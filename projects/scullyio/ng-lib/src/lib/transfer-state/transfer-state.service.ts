import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {BehaviorSubject, NEVER, Observable, of} from 'rxjs';
import {
  catchError,
  filter,
  first,
  map,
  pluck,
  shareReplay,
  switchMap,
  take,
  takeWhile,
  tap,
} from 'rxjs/operators';
import {fetchHttp} from '../utils/fetchHttp';
import {isScullyGenerated, isScullyRunning} from '../utils/isScully';
import {mergePaths} from '../utils/merge-paths';

const SCULLY_SCRIPT_ID = `scully-transfer-state`;
const SCULLY_STATE_START = `/** ___SCULLY_STATE_START___ */`;
const SCULLY_STATE_END = `/** ___SCULLY_STATE_END___ */`;
const initialStateDone = '__done__with__Initial__navigation__';

interface State {
  [key: string]: any;
}
// Adding this dynamic comment to suppress ngc error around Document as a DI token.
// https://github.com/angular/angular/issues/20351#issuecomment-344009887
/** @dynamic */
@Injectable({
  providedIn: 'root',
})
export class TransferStateService {
  private script: HTMLScriptElement;

  private initialUrl: string;
  /** set the currentBase to something that it can never be */
  private currentBaseUrl = '//';
  /** subject to fire off incoming states */
  private stateBS = new BehaviorSubject<State>({});
  private state$ = this.stateBS.pipe(filter(state => state !== undefined));
  // emit the next url when routing is complete
  private nextUrl = this.router.events.pipe(
    filter(e => e instanceof NavigationStart),
    switchMap((e: NavigationStart) => {
      if (this.initialUrl === e.url) {
        /** don't kick off on initial load to prevent flicker */
        this.initialUrl = initialStateDone;
        return NEVER;
      }
      return of(e);
    }),
    /** reset the state, so new components will never get stale data */
    tap(() => this.stateBS.next(undefined)),
    /** prevent emitting before navigation to _this_ URL is done. */
    switchMap((e: NavigationStart) =>
      this.router.events.pipe(
        filter(ev => ev instanceof NavigationEnd && ev.url === e.url),
        first()
      )
    ),
    map((ev: NavigationEnd) => ev.urlAfterRedirects),
    shareReplay(1)
  );

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {}

  startMonitoring() {
    this.setupEnvForTransferState();
    this.setupStartNavMonitoring();
  }

  private setupEnvForTransferState(): void {
    if (isScullyRunning()) {
      // In Scully puppeteer
      this.script = this.document.createElement('script');
      this.script.setAttribute('id', SCULLY_SCRIPT_ID);
      this.document.head.appendChild(this.script);
    } else if (isScullyGenerated()) {
      // On the client AFTER scully rendered it
      this.initialUrl = window.location.pathname || '__no_NO_no__';
      this.initialUrl = /^\/?(?:[a-zA-Z0-9]+\/)+$/.test(this.initialUrl)
        ? this.initialUrl.slice(0, -1)
        : this.initialUrl;
      /** set the initial state */
      this.stateBS.next((window && window[SCULLY_SCRIPT_ID]) || {});
    }
  }

  /**
   * Getstate will return an observable that containes the data.
   * It does so right after the navigation for the page has finished.
   * please note, this works SYNC on initial route, preventing a flash of content.
   * @param name The name of the state to
   */
  getState<T>(name: string): Observable<T> {
    /** start of the fetch for the current active route. */
    this.fetchTransferState();
    return this.state$.pipe(pluck(name));
  }

  setState<T>(name: string, val: T): void {
    const newState = {...this.stateBS.value, [name]: val};
    this.stateBS.next(newState);
    if (isScullyRunning()) {
      this.script.textContent = `window['${SCULLY_SCRIPT_ID}']=${SCULLY_STATE_START}${JSON.stringify(
        newState
      )}${SCULLY_STATE_END}`;
    }
  }

  /**
   * starts monitoring the router, and keep the url from the last completed navigation handy.
   */
  setupStartNavMonitoring() {
    if (!isScullyGenerated()) {
      return;
    }

    /** start monitoring the routes */
    this.nextUrl.subscribe();
  }

  async fetchTransferState(): Promise<void> {
    /** helper to read the part before the first slash (ignores leading slash) */
    const base = (url: string) => url.split('/').filter(part => part.trim() !== '')[0];
    /** put this in the next event cycle so the correct route can be read */
    await new Promise(r => setTimeout(r, 0));
    /** get the current url */
    const currentUrl = await this.nextUrl.pipe(take(1)).toPromise();
    const baseUrl = base(currentUrl);
    if (this.currentBaseUrl === baseUrl) {
      /** already monitoring, don't tho a thing */
      return;
    }
    /** keep the baseUrl for later reference */
    this.currentBaseUrl = baseUrl;
    this.nextUrl
      .pipe(
        /** keep updating till we move to another route */
        takeWhile(url => base(url) === this.currentBaseUrl),
        switchMap(url =>
          // Get the next route's page from the server
          fetchHttp<string>(mergePaths(url, '/index.html'), 'text').catch(err => {
            console.warn('Failed transfering state from route', err);
            return '';
          })
        ),
        map((html: string) => {
          try {
            const newStateStr = html.split(SCULLY_STATE_START)[1].split(SCULLY_STATE_END)[0];
            return JSON.parse(newStateStr);
          } catch {
            /** in case of emergency (no state parsing possible,set state to undefined) */
            return {};
          }
        }),
        catchError(e => {
          // TODO: come up with better error text.
          /** the developer needs to know, but its not fatal, so just return an empty state */
          console.warn('Error for getState during navigation:', e);
          return of({});
        }),
        tap(newState => {
          /** and activate the state in the components. on any error it will be empty */
          this.stateBS.next(newState);
        })
      )
      .subscribe({
        /** when completes (different URL) */
        complete: () => {
          /** reset the currentBaseUrl */
          this.currentBaseUrl = '//';
        },
      });
  }
}
