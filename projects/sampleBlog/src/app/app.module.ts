import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ScullyLibModule} from '@scullyio/ng-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    ScullyLibModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
