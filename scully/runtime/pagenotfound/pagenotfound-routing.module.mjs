import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{ path: '', component: PagenotfoundComponent }];
export class PagenotfoundRoutingModule {
}
PagenotfoundRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: PagenotfoundRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PagenotfoundRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: PagenotfoundRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
PagenotfoundRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: PagenotfoundRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: PagenotfoundRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=pagenotfound-routing.module.js.map