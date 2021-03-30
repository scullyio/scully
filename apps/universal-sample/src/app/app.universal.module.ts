import { NgModule } from '@angular/core';
import { BEFORE_APP_SERIALIZED, ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HttpClient, XhrFactory } from '@angular/common/http';
import { ScullyHttpClient } from './ScullyXhr';
import { IdleMonitorService } from '@scullyio/ng-lib';

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [AppComponent],
  providers: [
    { provide: HttpClient, useClass: ScullyHttpClient },
    {
      provide: BEFORE_APP_SERIALIZED,
      useFactory: (i:IdleMonitorService) => () => i.init(),
      deps: [IdleMonitorService],
      multi: true,
    },
  ],
})
export class AppUniversalModule {}
