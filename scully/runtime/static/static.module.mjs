import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticRoutingModule } from './static-routing.module';
import { StaticComponent } from './static.component';
import * as i0 from "@angular/core";
export class StaticModule {
}
StaticModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: StaticModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StaticModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: StaticModule, declarations: [StaticComponent], imports: [CommonModule, StaticRoutingModule] });
StaticModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: StaticModule, imports: [[CommonModule, StaticRoutingModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: StaticModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [StaticComponent],
                    imports: [CommonModule, StaticRoutingModule]
                }]
        }] });
//# sourceMappingURL=static.module.js.map