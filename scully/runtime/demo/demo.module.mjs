import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import * as i0 from "@angular/core";
export class DemoModule {
}
DemoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DemoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DemoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DemoModule, declarations: [DemoComponent], imports: [CommonModule, DemoRoutingModule] });
DemoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DemoModule, imports: [[CommonModule, DemoRoutingModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DemoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DemoComponent],
                    imports: [CommonModule, DemoRoutingModule]
                }]
        }] });
//# sourceMappingURL=demo.module.js.map