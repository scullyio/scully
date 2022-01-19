import { DOCUMENT, XhrFactory } from '@angular/common';
import { Inject, NgModule, NgZone } from '@angular/core';
import { BEFORE_APP_SERIALIZED, ServerModule } from '@angular/platform-server';
import { ActivatedRoute } from '@angular/router';
import { IdleMonitorService } from '@scullyio/ng-lib';
import { ScullyXhrFactory } from './ScullyXhrFactory';

declare global {
  interface Window {
    scullyVersion: any;
    ScullyIO: any;
    'ScullyIO-injected': {
      [key: string]: any;
      inlineStateOnly?: boolean | undefined;
    };
  }
}

@NgModule({
  imports: [ServerModule],
  providers: [
    { provide: BEFORE_APP_SERIALIZED, multi: true, useFactory: scullyReadyEventFiredFactory, deps: [DOCUMENT, NgZone] },
    { provide: XhrFactory, useClass: ScullyXhrFactory },
  ],
})
export class ScullyPlatformServerModule {
  /** make sure it doesn't get optimized away. */
  #idle = this.idle;
  constructor(private route: ActivatedRoute, private idle: IdleMonitorService, @Inject(DOCUMENT) private document: Document) {
    if (window['ScullyIO'] === 'running') {
      /** we need to inject a few things into the HTML */
      const d = document.createElement('script');
      d.innerHTML = `window['ScullyIO']='generated';`;
      if (window['ScullyIO-injected']) {
        /** and add the injected data there too. */
        d.innerHTML += `window['ScullyIO-injected']=${JSON.stringify(window['ScullyIO-injected'])};`;
      }
      const m = document.createElement('meta');
      m.name = 'generator';
      m.content = `Scully ${window['scullyVersion']}`;
      document.head.appendChild(d);
      document.head.insertBefore(m, document.head.firstChild);
      /** inject the scully version into the body attribute */
      document.body.setAttribute('scully-version', window['scullyVersion']);
    }
  }
}

/**
 * Helper that makes sure we don't get the HTML content before the app is ready.
 * @param doc
 * @param ngZone
 * @returns
 */
export function scullyReadyEventFiredFactory(doc: Document, ngZone: NgZone): () => Promise<void> {
  return () =>
    new Promise((resolve, _reject) => {
      let fired = false;
      ngZone.runOutsideAngular(() => {
        const monitor = () => {
          /** check if there are still macrotasks. If so keep polling */
          if (ngZone.hasPendingMacrotasks) {
            // logWarn(`pending tasks.`);
            return setTimeout(monitor, 25);
          }
          /** also keep polling when Scully isn't ready yet */
          if (!fired) {
            return setTimeout(monitor, 25);
          }
          /** allow for at least 1 cycle after both above are green. */
          return setTimeout(() => resolve(), 5);
        };
        monitor();
        /** we need at least the Scully generated event. It does fire _too_ soon under Platform serer, but it signals all things Scully are _go_ */
        doc.addEventListener('AngularReady', () => {
          fired = true;
        });
      });
    });
}
