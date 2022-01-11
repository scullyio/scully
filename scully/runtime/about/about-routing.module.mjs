import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{ path: '', component: AboutComponent }];
export class AboutRoutingModule {
}
AboutRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AboutRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AboutRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AboutRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
AboutRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AboutRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AboutRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=about-routing.module.js.map