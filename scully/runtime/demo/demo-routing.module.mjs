import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{ path: ':id', component: DemoComponent }];
export class DemoRoutingModule {
}
DemoRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DemoRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DemoRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DemoRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DemoRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DemoRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DemoRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=demo-routing.module.js.map