import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlowComponent } from './slow.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{ path: '', component: SlowComponent }];
export class SlowRoutingModule {
}
SlowRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SlowRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SlowRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SlowRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
SlowRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SlowRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SlowRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=slow-routing.module.js.map