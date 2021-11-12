import { enableProdMode, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ScullyPlatformServerModule } from '@scullyio/platform-server'


/**
 * the platform server should be running in production mode.
 */
enableProdMode();


@NgModule({
  imports: [
    AppModule,
    ScullyPlatformServerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppSPSModule {}
