import {NgModule} from '@angular/core';
import {IdleMonitorService} from './idleMonitor/idle-monitor.service';
import {ScullyContentModule} from './scully-content/scully-content.module';

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
  constructor(private idle: IdleMonitorService) {}
}
