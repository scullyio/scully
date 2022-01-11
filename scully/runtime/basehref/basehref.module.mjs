import { NgModule, Component } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
class BaseHrefComponent {
}
BaseHrefComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BaseHrefComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BaseHrefComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: BaseHrefComponent, selector: "ng-component", ngImport: i0, template: `
    <h1>Base Href component</h1>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BaseHrefComponent, decorators: [{
            type: Component,
            args: [{
                    template: `
    <h1>Base Href component</h1>
  `
                }]
        }] });
class BaseHrefRewrittenComponent {
    ngOnInit() {
        if (document) {
            // tslint:disable-next-line: no-non-null-assertion
            const b = document.querySelector('base');
            b.setAttribute('href', '/wrong');
        }
    }
}
BaseHrefRewrittenComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BaseHrefRewrittenComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BaseHrefRewrittenComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: BaseHrefRewrittenComponent, selector: "ng-component", ngImport: i0, template: `
    <h1>Base Href rewritten component</h1>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BaseHrefRewrittenComponent, decorators: [{
            type: Component,
            args: [{
                    template: `
    <h1>Base Href rewritten component</h1>
  `
                }]
        }] });
class BaseHrefRemovedComponent {
    ngOnInit() {
        if (document) {
            // tslint:disable-next-line: no-non-null-assertion
            const b = document.querySelector('base');
            // tslint:disable-next-line: no-non-null-assertion
            b.parentElement.removeChild(b);
        }
    }
}
BaseHrefRemovedComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BaseHrefRemovedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BaseHrefRemovedComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: BaseHrefRemovedComponent, selector: "ng-component", ngImport: i0, template: `
    <h1>Base Href removed component</h1>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BaseHrefRemovedComponent, decorators: [{
            type: Component,
            args: [{
                    template: `
    <h1>Base Href removed component</h1>
  `
                }]
        }] });
const routes = [
    { path: '', component: BaseHrefComponent },
    { path: 'rewritten', component: BaseHrefRewrittenComponent },
    { path: 'removed', component: BaseHrefRemovedComponent }
];
export class BaseHrefModule {
}
BaseHrefModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BaseHrefModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BaseHrefModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BaseHrefModule, imports: [ScullyLibModule, i1.RouterModule] });
BaseHrefModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BaseHrefModule, imports: [[ScullyLibModule, RouterModule.forChild(routes)]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BaseHrefModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [ScullyLibModule, RouterModule.forChild(routes)]
                }]
        }] });
//# sourceMappingURL=basehref.module.js.map