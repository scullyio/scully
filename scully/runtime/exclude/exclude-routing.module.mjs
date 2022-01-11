import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExcludeComponent } from './exclude.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: 'present', component: ExcludeComponent },
    { path: 'notpresent', component: ExcludeComponent }
];
export class ExcludeRoutingModule {
}
ExcludeRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ExcludeRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ExcludeRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ExcludeRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
ExcludeRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ExcludeRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ExcludeRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=exclude-routing.module.js.map