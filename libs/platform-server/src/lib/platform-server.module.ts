import { DOCUMENT } from '@angular/common';
import { Inject, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ActivatedRoute } from '@angular/router';
import { IdleMonitorService } from '@scullyio/ng-lib';

declare global {
  interface Window {
    scullyVersion: any;
    ScullyIO: any;
    'ScullyIO-injected': {
      [key: string]: any;
      inlineStateOnly?: boolean | undefined;
    }
  }
}

@NgModule({
  imports: [ServerModule],
})
export class ScullyPlatformServerModule {
  constructor(
    private r: ActivatedRoute,
    private idle: IdleMonitorService,
    @Inject(DOCUMENT) private document: Document
  ) {
    let dummy = idle
    dummy = dummy
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
