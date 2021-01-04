import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, NEVER, Observable, of } from 'rxjs';
import { catchError, filter, first, map, pluck, shareReplay, switchMap, take, takeWhile, tap } from 'rxjs/operators';
import { basePathOnly } from '../utils/basePathOnly';
import { fetchHttp } from '../utils/fetchHttp';
import { isScullyGenerated, isScullyRunning } from '../utils/isScully';
import { mergePaths } from '../utils/merge-paths';

const SCULLY_SCRIPT_ID = `ScullyIO-transfer-state`;
const SCULLY_STATE_START = `/** ___SCULLY_STATE_START___ */`;
const SCULLY_STATE_END = `/** ___SCULLY_STATE_END___ */`;
const initialStateDone = '__done__with__Initial__navigation__';

declare global {
  interface Window {
    'ScullyIO-injected': {
      inlineStateOnly?: boolean;
      [key: string]: any;
    };
  }
}

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
  /** parse from index, or load from data.json, according to scullConfig setting */
  private inlineOnly = false;

  private initialUrl: string;
  /** set the currentBase to something that it can never be */
  private currentBaseUrl = '//';
  /** subject to fire off incoming states */
  private stateBS = new BehaviorSubject<State>({});
  private state$ = this.stateBS.pipe(filter((state) => state !== undefined));
  // emit the next url when routing is complete
  private nextUrl = this.router.events.pipe(
    filter((e) => e instanceof NavigationStart),
    switchMap((e: NavigationStart) => {
      if (basePathOnly(this.initialUrl) === basePathOnly(e.url)) {
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
        filter((ev) => ev instanceof NavigationEnd && ev.url === e.url),
        first()
      )
    ),
    map((ev: NavigationEnd) => basePathOnly(ev.urlAfterRedirects || ev.url)),
    shareReplay(1)
  );

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {}

  startMonitoring() {
    if (window && window['ScullyIO-injected'] && window['ScullyIO-injected'].inlineStateOnly) {
      this.inlineOnly = true;
    }
    this.setupEnvForTransferState();
    this.setupStartNavMonitoring();
  }

  private setupEnvForTransferState(): void {
    if (isScullyRunning()) {
      this.injectScript();
      // In Scully puppeteer
      const exposed = window['ScullyIO-exposed'] || {};
      if (exposed.transferState) {
        this.stateBS.next(exposed.transferState);
        this.saveState(exposed.transferState);
      }
    } else if (isScullyGenerated()) {
      // On the client AFTER scully rendered it
      this.initialUrl = window.location.pathname || '__no_NO_no__';
      this.initialUrl = this.initialUrl !== '/' && this.initialUrl.endsWith('/') ? this.initialUrl.slice(0, -1) : this.initialUrl;
      /** set the initial state */
      this.stateBS.next((window && window[SCULLY_SCRIPT_ID]) || {});
    }
  }

  private injectScript() {
    this.script = this.document.createElement('script');
    this.script.setAttribute('id', SCULLY_SCRIPT_ID);
    let last = document.body.lastChild;
    while (last.previousSibling.nodeName === 'SCRIPT') {
      last = last.previousSibling as ChildNode;
    }
    document.body.insertBefore(this.script, last);
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
    return this.state$.pipe(
      pluck(name)
      // tap((data) => console.log('tss', data))
    );
  }

  /**
   * Read the current state, and see if it has an value for the name.
   * (note the value it containes still can be undefined!)
   */
  stateHasKey(name: string) {
    return this.stateBS.value && this.stateBS.value.hasOwnProperty(name);
  }

  /**
   * Read the current state, and see if it has an value for the name.
   * Checks also if there is actually an value in the state.
   */
  stateKeyHasValue(name: string) {
    return this.stateBS.value && this.stateBS.value.hasOwnProperty(name) && this.stateBS.value[name] != null;
  }

  /**
   * SetState will update the script in the generated page with data added.
   * @param name
   * @param val
   */
  setState<T>(name: string, val: T): void {
    const newState = { ...this.stateBS.value, [name]: val };
    this.stateBS.next(newState);
    this.saveState(newState);
  }

  private saveState(newState) {
    if (isScullyRunning()) {
      this.script.textContent = `{
      window['${SCULLY_SCRIPT_ID}']=_u(\`${SCULLY_STATE_START}${escapeHtml(JSON.stringify(newState))}${SCULLY_STATE_END}\`)
      function _u(t) {
        t = t.split('${SCULLY_STATE_START}')[1].split('${SCULLY_STATE_END}')[0];const u = {'_~q~': "'",'_~s~': '/','_~l~': '<','_~g~': '>'};return JSON.parse(t.replace(/\\'/g,\`\\\\\"\`).replace(/_~[^]~/g, (s) => u[s]).replace(/${'\\'}n/g,'//n'));
      };
    }`;
    }
  }

  /**
   * starts monitoring the router, and keep the url from the last completed navigation handy.
   */
  private setupStartNavMonitoring() {
    if (!isScullyGenerated()) {
      return;
    }

    /** start monitoring the routes */
    this.nextUrl.subscribe();
  }

  /**
   * Wraps an observable into scully's transfer state. If data for the provided `name` is
   * available in the state, it gets returned. Otherwise, the `originalState` observable will
   * be returned.
   *
   * On subsequent calls, the data in the state will always be returned. The `originalState` will
   * be returned only once.
   *
   * This is a convenience method which does not require you to use `getState`/`setState` manually.
   *
   * @param name state key
   * @param originalState an observable which yields the desired data
   */
  useScullyTransferState<T>(name: string, originalState: Observable<T>): Observable<T> {
    if (isScullyGenerated()) {
      return this.getState(name);
    }
    return originalState.pipe(tap((state) => this.setState(name, state)));
  }

  private async fetchTransferState(): Promise<void> {
    /** helper to read the part before the first slash (ignores leading slash) */
    const base = (url: string) => url.split('/').filter((part) => part.trim() !== '')[0];
    /** put this in the next event cycle so the correct route can be read */
    await new Promise((r) => setTimeout(r, 0));
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
        takeWhile((url) => base(url) === this.currentBaseUrl),
        // Get the next route's data from the the index or data file
        switchMap((url) => (this.inlineOnly ? this.readFromIndex(url) : this.readFromJson(url))),
        catchError((e) => {
          // TODO: come up with better error text.
          /** the developer needs to know, but its not fatal, so just return an empty state */
          console.warn('Error while loading of parsing Scully state:', e);
          return of({});
        }),
        tap((newState) => {
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

  private readFromJson(url: string): Promise<object> {
    return fetchHttp<object>(dropPreSlash(mergePaths(url, '/data.json')));
  }

  private readFromIndex(url): Promise<object> {
    return fetchHttp<string>(dropPreSlash(mergePaths(url, '/index.html')), 'text').then((html: string) => {
      const newStateStr = html.split(SCULLY_STATE_START)[1].split(SCULLY_STATE_END)[0];
      return JSON.parse(unescapeHtml(newStateStr));
    });
  }
}

function dropPreSlash(string: string): string {
  return string.startsWith('/') ? string.slice(1) : string;
}
/**
 * we need to escape our HTML to prevent XXS,
 * It needs to be custom, because the content can already contain html-escaped sequences
 **/
export function escapeHtml(text: string): string {
  const escapedText: { [k: string]: string } = {
    "'": '_~q~',
    '/': '_~s~',
    '<': '_~l~',
    '>': '_~g~',
  };
  return (
    text
      /** escape the json */
      .replace(/['<>\/]/g, (s) => escapedText[s])
      /** replace escaped double-quotes with single */
      .replace(/\\\"/g, `\\'`)
  );
}

/**
 * Unescape our custom escaped texts
 * @param text
 */
export function unescapeHtml(text: string): string {
  const unescapedText: { [k: string]: string } = {
    '_~q~': "'",
    '_~s~': '/',
    '_~l~': '<',
    '_~g~': '>',
  };

  return (
    text
      /** put back escaped double quotes to make valid json again */
      .replace(/\\'/g, `\\"`)
      /** replace the custom escapes */
      .replace(/_~[^]~/g, (s) => unescapedText[s])
      /** restore newlines */
      .replace(/\n/g, '//n')
  );
}
