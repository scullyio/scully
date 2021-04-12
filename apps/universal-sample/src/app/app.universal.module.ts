import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ScullyUniversalModule } from '@scullyio/universal'


@NgModule({
  imports: [AppModule, ServerModule, ScullyUniversalModule],
  bootstrap: [AppComponent],
})
export class AppUniversalModule {}
