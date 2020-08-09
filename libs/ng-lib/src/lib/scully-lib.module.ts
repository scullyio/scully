import { ModuleWithProviders, NgModule } from '@angular/core';
import { ScullyDefaultSettings, ScullyLibConfig, SCULLY_LIB_CONFIG } from './config/scully-config';
import { IdleMonitorService } from './idleMonitor/idle-monitor.service';
import { ScullyContentModule } from './scully-content/scully-content.module';

@NgModule({
  imports: [ScullyContentModule],
  exports: [ScullyContentModule],
})
export class ScullyLibModule {
  /**
   * We use a little trick to get a working idle-service.
   * First, we separate out the component in a separate module to prevent a circulair injection
   * second we create a constuctor that activates the IdleMonitorService. as that is provided for 'root'
   * there will be only 1 instance in our app.
   * We don't need forRoot, as we are not configuring anything in here.
   */
  static forRoot(config: ScullyLibConfig = ScullyDefaultSettings): ModuleWithProviders<any> {
    return {
      ngModule: ScullyLibModule,
      providers: [{ provide: SCULLY_LIB_CONFIG, useValue: config }],
    };
  }
  constructor(private idle: IdleMonitorService) {}
}
