import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    ScullyLibModule.forRoot({useTransferState: true}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
