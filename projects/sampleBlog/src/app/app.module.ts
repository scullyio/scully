import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, AppRoutingModule, ScullyLibModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
