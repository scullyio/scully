import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {NavigationStart, Router} from '@angular/router';
import {isScullyGenerated, isScullyRunning} from '../utils/isScully';
import {Observable, of, Subject} from 'rxjs';
import {catchError, filter, map, switchMap, tap} from 'rxjs/operators';

const SCULLY_SCRIPT_ID = `scully-transfer-state`;
const SCULLY_STATE_START = `___SCULLY_STATE_START___`;
const SCULLY_STATE_END = `___SCULLY_STATE_END___`;

// Adding this dynamic comment to supress ngc error around Document as a DI token.
// https://github.com/angular/angular/issues/20351#issuecomment-344009887
/** @dynamic */
@Injectable({
  providedIn: 'root',
})
export class TransferStateService {
  private script: HTMLScriptElement;
  private state: {[key: string]: any} = {};
  private fetching: Subject<any>;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private http: HttpClient
  ) {
    this.setupEnvForTransferState();
    this.setupNavStartDataFetching();
  }

  private setupEnvForTransferState(): void {
    if (isScullyRunning()) {
      // In Scully puppeteer
      this.script = this.document.createElement('script');
      this.script.setAttribute('id', SCULLY_SCRIPT_ID);
      this.script.setAttribute('type', `text/${SCULLY_SCRIPT_ID}`);
      this.document.head.appendChild(this.script);
    } else if (isScullyGenerated()) {
      // On the client AFTER scully rendered it
      this.script = this.document.getElementById(SCULLY_SCRIPT_ID) as HTMLScriptElement;
      try {
        this.state = JSON.parse(unescapeHtml(this.script.textContent));
      } catch (e) {
        this.state = {};
      }
    }
  }

  getState<T>(name: string): Observable<T> {
    if (this.fetching) {
      return this.fetching.pipe(map(() => this.state[name]));
    } else {
      return of(this.state[name]);
    }
  }

  setState<T>(name: string, val: T): void {
    this.state[name] = val;
    if (isScullyRunning()) {
      this.script.textContent = `${SCULLY_STATE_START}${escapeHtml(
        JSON.stringify(this.state)
      )}${SCULLY_STATE_END}`;
    }
  }

  setupNavStartDataFetching() {
    /**
     * Each time the route changes, get the Scully state from the server-rendered page
     */
    if (!isScullyGenerated()) return;

    this.router.events
      .pipe(
        filter(e => e instanceof NavigationStart),
        tap(() => (this.fetching = new Subject<any>())),
        switchMap((e: NavigationStart) => {
          // Get the next route's page from the server
          return this.http.get(e.url, {responseType: 'text'}).pipe(
            catchError(err => {
              console.warn('Failed transfering state from route', err);
              return of('');
            })
          );
        }),
        map((html: string) => {
          // Parse the scully state out of the next page
          const startIndex = html.indexOf(SCULLY_STATE_START);
          if (startIndex !== -1) {
            const afterStart = html.split(SCULLY_STATE_START)[1] || '';
            const middle = afterStart.split(SCULLY_STATE_END)[0] || '';
            return middle;
          } else {
            return null;
          }
        }),
        filter(val => val !== null),
        tap(val => {
          // Add parsed-out scully-state to the current scully-state
          this.setFetchedRouteState(val);
          this.fetching = null;
        })
      )
      .subscribe();
  }

  private setFetchedRouteState(unprocessedTextContext) {
    // Exit if nothing to set
    if (!unprocessedTextContext || !unprocessedTextContext.length) return;

    // Parse to JSON the next route's state content
    const newState = JSON.parse(unescapeHtml(unprocessedTextContext));
    this.state = {...this.state, ...newState};
    this.fetching.next();
  }
}
export function unescapeHtml(text: string): string {
  const unescapedText: {[k: string]: string} = {
    '&a;': '&',
    '&q;': '"',
    '&s;': "'",
    '&l;': '<',
    '&g;': '>',
  };
  return text.replace(/&[^;]+;/g, s => unescapedText[s]);
}
export function escapeHtml(text: string): string {
  const escapedText: {[k: string]: string} = {
    '&': '&a;',
    '"': '&q;',
    "'": '&s;',
    '<': '&l;',
    '>': '&g;',
  };
  return text.replace(/[&"'<>]/g, s => escapedText[s]);
}
