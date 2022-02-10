import { enableProdMode, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ScullyPlatformServerModule } from '@scullyio/platform-server';
import { BrowserModule } from '@angular/platform-browser';

/**
 * the platform server should be running in production mode.
 */
enableProdMode();

@NgModule({
  imports: [BrowserModule.withServerTransition({ appId: 'scully-docs' }), AppModule, ScullyPlatformServerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export default class AppSPSModule {}
