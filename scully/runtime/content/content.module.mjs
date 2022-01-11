import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { CommonModule } from '@angular/common';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: ':slug',
        component: ContentComponent,
    },
    {
        path: '**',
        component: ContentComponent,
    },
];
export class ContentModule {
}
ContentModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ContentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ContentModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ContentModule, declarations: [ContentComponent], imports: [CommonModule, ScullyLibModule, i1.RouterModule] });
ContentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ContentModule, imports: [[CommonModule, ScullyLibModule, RouterModule.forChild(routes)]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ContentModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ScullyLibModule, RouterModule.forChild(routes)],
                    declarations: [ContentComponent],
                }]
        }] });
//# sourceMappingURL=content.module.js.map