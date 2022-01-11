import { Component } from '@angular/core';
import { IdleMonitorService } from '@scullyio/ng-lib';
import * as i0 from "@angular/core";
import * as i1 from "@scullyio/ng-lib";
export class ManualIdleComponent {
    constructor(ims) {
        this.ims = ims;
        this.text = 'this text is displayed by automated detection';
    }
    ngOnInit() {
        setTimeout(() => (this.text = '__ManualIdle__'), 3 * 1000);
        setTimeout(() => this.ims.fireManualMyAppReadyEvent(), 3.25 * 1000);
    }
}
ManualIdleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ManualIdleComponent, deps: [{ token: i1.IdleMonitorService }], target: i0.ɵɵFactoryTarget.Component });
ManualIdleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: ManualIdleComponent, selector: "app-manual-idle", ngImport: i0, template: "<p>manual-idle works!</p>\n<p id=\"manualTextForTest\">{{ text }}</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ManualIdleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-manual-idle', template: "<p>manual-idle works!</p>\n<p id=\"manualTextForTest\">{{ text }}</p>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.IdleMonitorService }]; } });
//# sourceMappingURL=manual-idle.component.js.map