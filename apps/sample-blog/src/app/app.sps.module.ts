import { enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyPlatformServerModule } from '@scullyio/platform-server';
import { AppComponent } from './app.component.js';
import { AppModule } from './app.module.js';

/**
 * the platform server should be running in production mode.
 */
enableProdMode();

@NgModule({
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppModule, ScullyPlatformServerModule],
  // providers: [{ provide: XhrFactory, useClass: ScullyXhrFactory }],
  bootstrap: [AppComponent],
})
export default class AppSPSModule {}
