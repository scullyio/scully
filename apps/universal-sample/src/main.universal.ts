import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
}
enableProdMode();


export { AppUniversalModule } from './app/app.universal.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
