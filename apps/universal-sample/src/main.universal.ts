import { enableProdMode } from '@angular/core';
import { AppUniversalModule } from './app/app.sps.module';
import { environment } from './environments/environment';

if (environment.production) {
}
enableProdMode();

export default AppUniversalModule;
export { renderModule, renderModuleFactory } from '@angular/platform-server';
