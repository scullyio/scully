import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
export class DemoComponent {
    constructor(route) {
        this.route = route;
        this.pageId = this.route.snapshot.params.id;
        this.pageId$ = this.route.params.pipe(pluck('id'), tap(id => (this.pageId = id)));
    }
    ngOnInit() { }
}
DemoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DemoComponent, deps: [{ token: i1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
DemoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: DemoComponent, selector: "app-demo", ngImport: i0, template: "<span>\n  {{ pageId$ | async }}\n</span>\n<a [routerLink]=\"['/demo', +pageId - 1]\"></a>\n<a [routerLink]=\"['/demo', +pageId + 1]\"></a>\n", styles: [":host {\n  height: 100%;\n  display: grid;\n  place-content: center center;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n}\n\nspan {\n  grid-area: 1/1/2/3;\n  text-align: center;\n  font-size: 80vw;\n  line-height: 85vh;\n}\n\na {\n  grid-area: 1/1/1/2;\n  display: block;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  cursor: w-resize;\n}\n\na:last-child {\n  grid-column: 2/3;\n  cursor: e-resize;\n}\n"], directives: [{ type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }], pipes: { "async": i2.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: DemoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-demo', template: "<span>\n  {{ pageId$ | async }}\n</span>\n<a [routerLink]=\"['/demo', +pageId - 1]\"></a>\n<a [routerLink]=\"['/demo', +pageId + 1]\"></a>\n", styles: [":host {\n  height: 100%;\n  display: grid;\n  place-content: center center;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n}\n\nspan {\n  grid-area: 1/1/2/3;\n  text-align: center;\n  font-size: 80vw;\n  line-height: 85vh;\n}\n\na {\n  grid-area: 1/1/1/2;\n  display: block;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  cursor: w-resize;\n}\n\na:last-child {\n  grid-column: 2/3;\n  cursor: e-resize;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }]; } });
//# sourceMappingURL=demo.component.js.map