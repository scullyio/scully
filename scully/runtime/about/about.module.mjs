import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import * as i0 from "@angular/core";
export class AboutModule {
}
AboutModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AboutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AboutModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AboutModule, declarations: [AboutComponent], imports: [CommonModule, AboutRoutingModule] });
AboutModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AboutModule, imports: [[CommonModule, AboutRoutingModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AboutModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AboutComponent],
                    imports: [CommonModule, AboutRoutingModule]
                }]
        }] });
//# sourceMappingURL=about.module.js.map