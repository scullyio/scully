import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BEFORE_APP_SERIALIZED, ServerModule } from '@angular/platform-server';
import { IdleMonitorService } from '@scullyio/ng-lib';
import { ScullyHttpClient } from './ScullyXhr';
import { domContentLoadedFactory } from './unversalWorker';

@NgModule({
  imports: [ServerModule],
  providers: [
    // { provide: HttpClient, useClass: ScullyHttpClient },
    { provide: APP_INITIALIZER, multi: true, useFactory: domContentLoadedFactory, deps: [DOCUMENT] },

    {
      provide: BEFORE_APP_SERIALIZED,
      useFactory: (i: IdleMonitorService) => () => i.init(),
      deps: [IdleMonitorService],
      multi: true,
    },
  ],
})
export class ScullyUniversalModule {
  constructor() {
    if (!process.version) {
      console.warn('the ScullyUniversalModule seems to be loaded in a browsers context. This might lead to unpredictable results')
    }
  }
}
