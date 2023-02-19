/*
 * Public API Surface of ng-lib
 */

export { IdleMonitorService, dropEndingSlash } from './lib/idleMonitor/idle-monitor.service';
export { ScullyRoutesService, ScullyRoute } from './lib/route-service/scully-routes.service';
export { ScullyContentComponent } from './lib/scully-content/scully-content.component';
export { ScullyContentModule } from './lib/scully-content/scully-content.module';
export { ScullyLibModule } from './lib/scully-lib.module';
export { TransferStateService } from './lib/transfer-state/transfer-state.service';
export { isScullyGenerated, isScullyRunning } from './lib/utils/isScully';
