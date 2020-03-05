import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ScullyLibModule} from '@scullyio/ng-lib-v8';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ScullyLibModule.forRoot({useTranferState: true, alwaysMonitor: true}),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
