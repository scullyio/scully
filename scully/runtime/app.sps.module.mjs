import { enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyPlatformServerModule } from '@scullyio/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
/**
 * the platform server should be running in production mode.
 */
enableProdMode();
export default class AppSPSModule {
}
AppSPSModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AppSPSModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AppSPSModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AppSPSModule, bootstrap: [AppComponent], imports: [i1.BrowserModule, AppModule, ScullyPlatformServerModule] });
AppSPSModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AppSPSModule, imports: [[BrowserModule.withServerTransition({ appId: 'serverApp' }), AppModule, ScullyPlatformServerModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AppSPSModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppModule, ScullyPlatformServerModule],
                    // providers: [{ provide: XhrFactory, useClass: ScullyXhrFactory }],
                    bootstrap: [AppComponent],
                }]
        }] });
//# sourceMappingURL=app.sps.module.js.map