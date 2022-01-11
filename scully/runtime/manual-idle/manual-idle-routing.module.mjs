import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManualIdleComponent } from './manual-idle.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{ path: '', component: ManualIdleComponent }];
export class ManualIdleRoutingModule {
}
ManualIdleRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ManualIdleRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ManualIdleRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ManualIdleRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
ManualIdleRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ManualIdleRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ManualIdleRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=manual-idle-routing.module.js.map