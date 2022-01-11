import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as i0 from "@angular/core";
import * as i1 from "@scullyio/ng-lib";
export class AppModule {
}
AppModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AppModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AppModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AppModule, bootstrap: [AppComponent], declarations: [AppComponent], imports: [BrowserModule,
        HttpClientModule,
        AppRoutingModule, i1.ScullyLibModule] });
AppModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AppModule, imports: [[
            BrowserModule,
            HttpClientModule,
            AppRoutingModule,
            ScullyLibModule
                .forRoot({ useTransferState: true, alwaysMonitor: true })
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AppModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AppComponent],
                    imports: [
                        BrowserModule,
                        HttpClientModule,
                        AppRoutingModule,
                        ScullyLibModule
                            .forRoot({ useTransferState: true, alwaysMonitor: true })
                    ],
                    bootstrap: [AppComponent]
                }]
        }] });
//# sourceMappingURL=app.module.js.map