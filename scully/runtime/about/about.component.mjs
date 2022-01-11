import { Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { firstValueFrom } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@scullyio/ng-lib";
export class AboutComponent {
    constructor(srs) {
        this.srs = srs;
    }
    async ngOnInit() {
        const cur = await firstValueFrom(this.srs.getCurrent());
        console.log(cur);
    }
}
AboutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AboutComponent, deps: [{ token: i1.ScullyRoutesService }], target: i0.ɵɵFactoryTarget.Component });
AboutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: AboutComponent, selector: "app-about", ngImport: i0, template: "<p>about works!</p>\n\n<a href=\"https://scully.io\" target=\"_blank\">Scully docs site</a>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AboutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-about', template: "<p>about works!</p>\n\n<a href=\"https://scully.io\" target=\"_blank\">Scully docs site</a>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.ScullyRoutesService }]; } });
//# sourceMappingURL=about.component.js.map