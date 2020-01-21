import {Injectable, NgZone} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {filter, map, tap, startWith, shareReplay, pluck, take} from 'rxjs/operators';

// tslint:disable-next-line: no-any
// tslint:disable: no-string-literal
declare const Zone: any;

interface LocalState {
  idle: boolean;
  timeOut: number;
}

@Injectable({
  providedIn: 'root',
})
export class IdleMonitorService {
  private imState = new BehaviorSubject<LocalState>({
    idle: false,
    timeOut: 5 * 1000, // 5 seconds timeout as default
  });
  public idle$ = this.imState.pipe(pluck('idle'));

  private initApp = new Event('AngularInitialized', {bubbles: true, cancelable: false});
  private appReady = new Event('AngularReady', {bubbles: true, cancelable: false});
  private appTimeout = new Event('AngularTimeout', {bubbles: true, cancelable: false});

  constructor(private zone: NgZone, private router: Router) {
    if (window) {
      window.dispatchEvent(this.initApp);
      this.router.events
        .pipe(
          filter(ev => ev instanceof NavigationEnd && ev.urlAfterRedirects !== undefined),
          tap(() => this.zoneIdleCheck())
        )
        .subscribe();
    }
  }

  public async init() {
    return this.idle$.pipe(take(1)).toPromise();
  }

  private async zoneIdleCheck() {
    if (Zone === undefined) {
      return this.simpleTimeout();
    }
    const taskTrackingZone = Zone.current.get('TaskTrackingZone');
    if (taskTrackingZone === undefined) {
      return this.simpleTimeout();
    }
    if (this.imState.value.idle) {
      await this.setState('idle', false);
    }
    /** run the actual check for 'idle' outsides zone, otherwise it will never come to an end. */
    this.zone.runOutsideAngular(() => {
      let tCancel: NodeJS.Timeout;
      let count = 0;
      const startTime = Date.now();
      const monitor = () => {
        clearTimeout(tCancel);
        // console.table(taskTrackingZone.macroTasks);
        if (Date.now() - startTime > 30 * 1000) {
          /** bail out after 30 seconds. */
          window.dispatchEvent(this.appTimeout);
          return;
        }
        if (
          (taskTrackingZone.macroTasks.length > 0 &&
            taskTrackingZone.macroTasks.find((z: {source: string | string[]}) =>
              z.source.includes('XMLHttpRequest')
            ) !== undefined) ||
          count < 1 // make sure it runs at least once!
        ) {
          tCancel = setTimeout(() => {
            count += 1;
            monitor();
          }, 50);
          return;
        }
        window.dispatchEvent(this.appReady);
        this.setState('idle', true);
      };
      monitor();
    });
  }

  private async simpleTimeout() {
    /** zone not available, use a timeout instead. */
    console.warn('Scully is using timeouts, add the needed polyfills instead!');
    await new Promise(r => setTimeout(r, this.imState.value.timeOut));
    window.dispatchEvent(this.appReady);
  }

  public setPupeteerTimoutValue(milliseconds: number) {
    this.imState.next({...this.imState.value, timeOut: milliseconds});
  }

  private setState(key: string, value: any) {
    this.imState.next({...this.imState.value, [key]: value});
  }
}
