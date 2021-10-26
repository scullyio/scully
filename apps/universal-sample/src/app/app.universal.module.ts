import { DOCUMENT } from '@angular/common';
import { HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { enableProdMode, Inject, Injectable, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ActivatedRoute } from '@angular/router';
import { IdleMonitorService } from '@scullyio/ng-lib';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';


/**
 * the platform server should be running in production mode.
 */
enableProdMode();

declare global {
  interface Window {
    scullyVersion: any;
    ScullyIO: any
  }
}
@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppUniversalModule {
  constructor(private r: ActivatedRoute, private idle: IdleMonitorService, @Inject(DOCUMENT) private document: Document) {
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
