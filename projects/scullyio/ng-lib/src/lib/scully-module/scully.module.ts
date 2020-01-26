import {NgModule, ModuleWithProviders} from '@angular/core';
import {IdleMonitorService} from '../idleMonitor/idle-monitor.service';

@NgModule()
export class ScullyModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ScullyModule,
      providers: [IdleMonitorService],
    };
  }
  constructor(private idle: IdleMonitorService) {}
}
