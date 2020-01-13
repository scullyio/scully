import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {BehaviorSubject, from, Observable, of} from 'rxjs';
import {catchError, filter, map, pluck, switchMap, tap} from 'rxjs/operators';
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
  private state$ = new BehaviorSubject<State>({});

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
      this.state$.next((window && window[SCULLY_SCRIPT_ID]) || {});
    }
  }

  getState<T>(name: string): Observable<T> {
    return this.state$.pipe(pluck(name));
  }

  setState<T>(name: string, val: T): void {
    const newState = {...this.state$.value, [name]: val};
    this.state$.next(newState);
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
          // Get the next route's page from the server
          return from(fetchHttp(e.url, 'text')).pipe(
            catchError(err => {
              console.warn('Failed transfering state from route', err);
              return of('');
            })
          );
        }),
        map((html: string) => {
          try {
            const newStateStr = html.split(SCULLY_STATE_START)[1].split(SCULLY_STATE_END)[0];
            return JSON.parse(newStateStr);
          } catch {
            return null;
          }
        }),
        filter(val => val !== null),
        tap(newState => {
          // Add parsed-out scully-state to the current scully-state
          this.setFetchedRouteState(newState);
        })
      )
      .subscribe();
  }

  private setFetchedRouteState(newState) {
    this.state$.next({...this.state$.value, ...newState});
  }
}
