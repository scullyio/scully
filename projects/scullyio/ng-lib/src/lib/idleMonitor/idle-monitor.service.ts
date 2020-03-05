import {Inject, Injectable, NgZone} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {filter, pluck, take, tap} from 'rxjs/operators';
import {ScullyLibConfig, SCULLY_LIB_CONFIG, ScullyDefaultSettings} from '../config/scully-config';
import {TransferStateService} from '../transfer-state/transfer-state.service';
import {isScullyRunning} from '../utils/isScully';

// tslint:disable-next-line: no-any
// tslint:disable: no-string-literal
declare const Zone: any;

interface LocalState {
  idle: boolean;
  timeOut: number;
}

declare global {
  interface Window {
    'ScullyIO-exposed': {
      manualIdle?: boolean;
      transferState?: any;
      [key: string]: any;
    };
  }
}

if (window) {
  window.addEventListener('AngularReady', ev => {
    console.log('appReady fired', ev);
  });
}

@Injectable({
  providedIn: 'root',
})
export class IdleMonitorService {
  private scullyLibConfig: ScullyLibConfig;
  /** store the 'landing' url so we can skip it in idle-check. */
  private initialUrl = dropEndingSlash(window && window.location.pathname) || '';
  private imState = new BehaviorSubject<LocalState>({
    idle: false,
    timeOut: 5 * 1000, // 5 seconds timeout as default
  });
  public idle$ = this.imState.pipe(pluck('idle'));

  private initApp = new Event('AngularInitialized', {bubbles: true, cancelable: false});
  private appReady = new Event('AngularReady', {bubbles: true, cancelable: false});
  private appTimeout = new Event('AngularTimeout', {bubbles: true, cancelable: false});

  constructor(
    private zone: NgZone,
    private router: Router,
    @Inject(SCULLY_LIB_CONFIG) conf: ScullyLibConfig,
    tss: TransferStateService
  ) {
    /** provide the default for missing conf paramter */
    this.scullyLibConfig = Object.assign({}, ScullyDefaultSettings, conf);
    const exposed = window['ScullyIO-exposed'] || {};
    const manualIdle = !!exposed.manualIdle;

    if (
      !this.scullyLibConfig.manualIdle &&
      window &&
      (this.scullyLibConfig.alwaysMonitor || isScullyRunning())
    ) {
      window.dispatchEvent(this.initApp);
      this.router.events
        .pipe(
          filter(ev => ev instanceof NavigationEnd && ev.urlAfterRedirects !== undefined),
          /** don't check the page that has this setting. event is only importand on page load */
          filter((ev: NavigationEnd) => (manualIdle ? ev.urlAfterRedirects !== this.initialUrl : true)),
          tap(() => this.zoneIdleCheck())
        )
        .subscribe();
    }
    if (this.scullyLibConfig.manualIdle) {
      /** we still need the init event. */
      window.dispatchEvent(this.initApp);
    }
    if (this.scullyLibConfig.useTranferState) {
      /** don't start monitoring if people don't use the transferState */
      tss.startMonitoring();
    }
  }

  public async fireManualMyAppReadyEvent() {
    return window.dispatchEvent(this.appReady);
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

function dropEndingSlash(str: string) {
  return str.endsWith('/') ? str.slice(0, -1) : str;
}
