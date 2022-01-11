import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlowRoutingModule } from './slow-routing.module';
import { SlowComponent } from './slow.component';
import * as i0 from "@angular/core";
export class SlowModule {
}
SlowModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SlowModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SlowModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SlowModule, declarations: [SlowComponent], imports: [CommonModule, SlowRoutingModule] });
SlowModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SlowModule, imports: [[CommonModule, SlowRoutingModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SlowModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SlowComponent],
                    imports: [CommonModule, SlowRoutingModule]
                }]
        }] });
//# sourceMappingURL=slow.module.js.map