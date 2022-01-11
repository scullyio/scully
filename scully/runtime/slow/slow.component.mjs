import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { isScullyGenerated } from '@scullyio/ng-lib';
import { first } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/common";
export class SlowComponent {
    constructor(http) {
        this.http = http;
        this.isGenerated = isScullyGenerated();
        this.delay$ = this.http.get('/api/slow/2000');
        this.delay$.pipe(first()).subscribe();
    }
}
SlowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SlowComponent, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Component });
SlowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: SlowComponent, selector: "app-slow", ngImport: i0, template: `
    <p>slow works!</p>
    <h1 *ngIf="!isGenerated">Scully Not Generated</h1>
    <h1 *ngIf="isGenerated">Scully Generated</h1>
  `, isInline: true, styles: [""], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SlowComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-slow',
                    template: `
    <p>slow works!</p>
    <h1 *ngIf="!isGenerated">Scully Not Generated</h1>
    <h1 *ngIf="isGenerated">Scully Generated</h1>
  `,
                    styles: [``],
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=slow.component.js.map