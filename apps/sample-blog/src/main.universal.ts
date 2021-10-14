import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}
export { renderModule, renderModuleFactory } from '@angular/platform-server';
export { AppUniversalModule } from './app/app.universal.module';

