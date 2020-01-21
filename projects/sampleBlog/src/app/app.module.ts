import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule.withServerTransition({appId: 'serverApp'}), AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
