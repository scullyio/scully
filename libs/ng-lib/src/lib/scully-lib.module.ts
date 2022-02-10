import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScullyDefaultSettings, ScullyLibConfig, SCULLY_LIB_CONFIG } from './config/scully-config';
import { IdleMonitorService } from './idleMonitor/idle-monitor.service';
import { ScullyContentModule } from './scully-content/scully-content.module';

@NgModule({
  imports: [ScullyContentModule, HttpClientModule],
  exports: [ScullyContentModule]
})
export class ScullyLibModule {
  /**
   * We use a little trick to get a working idle-service.
   * First, we separate out the component in a separate module to prevent a circulair injection
   * second we create a constuctor that activates the IdleMonitorService. as that is provided for 'root'
   * there will be only 1 instance in our app.
   */
  static forRoot(config: ScullyLibConfig = ScullyDefaultSettings): ModuleWithProviders<ScullyLibModule> {
    config = Object.assign({}, ScullyDefaultSettings, config);
    return {
      ngModule: ScullyLibModule,
      providers: [{ provide: SCULLY_LIB_CONFIG, useValue: config }]
    };
  }
  constructor(private idle: IdleMonitorService) {}
}
