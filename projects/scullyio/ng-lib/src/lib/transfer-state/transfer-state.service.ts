import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {BehaviorSubject, forkJoin, NEVER, Observable, of} from 'rxjs';
import {catchError, filter, first, map, pluck, switchMap, tap} from 'rxjs/operators';
import {fetchHttp} from '../utils/fetchHttp';
import {isScullyGenerated, isScullyRunning} from '../utils/isScully';

const SCULLY_SCRIPT_ID = `scully-transfer-state`;
const SCULLY_STATE_START = `/** ___SCULLY_STATE_START___ */`;
const SCULLY_STATE_END = `/** ___SCULLY_STATE_END___ */`;

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
  // private stateBS = new BehaviorSubject<State>({});
  /** subject to fire off incomming states */
  private initialUrl: string;
  private stateBS = new BehaviorSubject<State>({});
  private state$ = this.stateBS.pipe(filter(state => state !== undefined));

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {
    this.setupEnvForTransferState();
    this.setupNavStartDataFetching();
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
      this.initialUrl = this.initialUrl.endsWith('/') ? this.initialUrl.slice(0, -1) : this.initialUrl;
      /** set the initial state */
      this.stateBS.next((window && window[SCULLY_SCRIPT_ID]) || {});
    }
  }

  /**
   * Getstate will return an observable that fires once and completes.
   * It does so right after the navigation for the page has finished.
   * @param name The name of the state to
   */
  getState<T>(name: string): Observable<T> {
    /**
     * We need the initial state only when the app is booting.
     * In this case, the router doesn't fire an event.
     * As the boot process is SYNC, putting in anything async will cause flicker in the view.
     * we can't use the subject in this case, because it will fire the
     * data sync before the component is ready.
     */
    // if (this.initial) {
    //   this.initial = false;
    //   // this.stateBS.next(this.state);
    //   return of(this.state[name]);
    // }
    /** once booted, the router will make sure this event fires after navigation */
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

  setupNavStartDataFetching() {
    /**
     * Each time the route changes, get the Scully state from the server-rendered page
     */
    if (!isScullyGenerated()) {
      return;
    }

    this.router.events
      .pipe(
        filter(e => e instanceof NavigationStart),
        switchMap((e: NavigationStart) => {
          if (this.initialUrl === e.url) {
            this.initialUrl = '__done__with__Initial__navigation__';
            return NEVER;
          }
          return of(e);
        }),
        /** reset the state, so new components will never get stale data */
        tap(() => this.stateBS.next(undefined)),
        switchMap((e: NavigationStart) => {
          return forkJoin([
            /** prevent emitting before navigation to _this_ URL is done. */
            this.router.events.pipe(
              filter(ev => ev instanceof NavigationEnd && ev.url === e.url),
              first()
            ),
            // Get the next route's page from the server
            fetchHttp<string>(e.url + '/index.html', 'text').catch(err => {
              console.warn('Failed transfering state from route', err);
              return '';
            }),
          ]);
        }),
        /** parse out the relevant piece off text, and conver to json */
        map(([e, html]: [any, string]) => {
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
      .subscribe();
  }
}
