import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {NavigationStart, Router, NavigationEnd} from '@angular/router';
import {BehaviorSubject, from, Observable, of, merge, forkJoin} from 'rxjs';
import {catchError, filter, map, pluck, switchMap, tap, first} from 'rxjs/operators';
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
  private isNavigating = false;
  private stateBS = new BehaviorSubject<State>({});
  /** make sure state doesn't emit _while_ navigating. */
  private state$ = this.stateBS.pipe(filter(() => !this.isNavigating));

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
      this.stateBS.next((window && window[SCULLY_SCRIPT_ID]) || {});
    }
  }

  getState<T>(name: string): Observable<T> {
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
        tap(() => (this.isNavigating = true)),
        switchMap((e: NavigationStart) =>
          /** prevent emitting before navigation is done. */
          forkJoin([
            this.router.events.pipe(
              filter(ev => ev instanceof NavigationEnd),
              tap(() => (this.isNavigating = false)),
              first()
            ),
            // Get the next route's page from the server
            fetchHttp<string>(e.url + '/index.html', 'text').catch(err => {
              console.warn('Failed transfering state from route', err);
              return '';
            }),
          ])
        ),
        map(([e, html]: [any, string]) => {
          try {
            const newStateStr = html.split(SCULLY_STATE_START)[1].split(SCULLY_STATE_END)[0];
            return JSON.parse(newStateStr);
          } catch {
            return null;
          }
        }),
        filter(val => val !== null),
        /** only when data comes out here, navigation is done for transferState */
        tap(() => (this.isNavigating = false)),
        // Add parsed-out scully-state to the current scully-state
        tap(newState => this.setFetchedRouteState(newState))
      )
      .subscribe();
  }

  private setFetchedRouteState(newState) {
    this.stateBS.next({...this.stateBS.value, ...newState});
  }
}
