import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@scullyio/ng-lib";
export class ContentComponent {
    constructor() { }
    ngOnInit() { }
}
ContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: ContentComponent, selector: "app-content-component", ngImport: i0, template: `<h1>Content component</h1>
    <scully-content></scully-content> `, isInline: true, components: [{ type: i1.ScullyContentComponent, selector: "scully-content" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-content-component',
                    template: `<h1>Content component</h1>
    <scully-content></scully-content> `,
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=content.component.js.map