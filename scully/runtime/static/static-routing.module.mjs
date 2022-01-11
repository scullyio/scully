import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StaticComponent } from './static.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: ':topLevel', component: StaticComponent },
    { path: '', component: StaticComponent, pathMatch: 'full' }
];
export class StaticRoutingModule {
}
StaticRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: StaticRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StaticRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: StaticRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
StaticRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: StaticRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: StaticRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=static-routing.module.js.map