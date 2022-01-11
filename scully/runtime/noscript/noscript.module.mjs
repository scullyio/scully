import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScullyLibModule, TransferStateService } from '@scullyio/ng-lib';
import { map } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@scullyio/ng-lib";
import * as i2 from "@angular/common/http";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
class NoScriptComponent {
    constructor(tss, http) {
        this.tss = tss;
        this.http = http;
        this.users$ = this.tss.useScullyTransferState('noScriptUser', this.http.get(`/api/users`).pipe(map((users) => users.map((user) => ({ name: user.name })))));
    }
}
NoScriptComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NoScriptComponent, deps: [{ token: i1.TransferStateService }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Component });
NoScriptComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: NoScriptComponent, selector: "ng-component", ngImport: i0, template: `
    <h1>No script page</h1>
    <ol>
      <li *ngFor="let user of users$ | async">{{ user.name }}</li>
    </ol>
  `, isInline: true, directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i3.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NoScriptComponent, decorators: [{
            type: Component,
            args: [{
                    template: `
    <h1>No script page</h1>
    <ol>
      <li *ngFor="let user of users$ | async">{{ user.name }}</li>
    </ol>
  `,
                }]
        }], ctorParameters: function () { return [{ type: i1.TransferStateService }, { type: i2.HttpClient }]; } });
const routes = [
    {
        path: '',
        component: NoScriptComponent,
    },
];
export class NoScriptModule {
}
NoScriptModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NoScriptModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NoScriptModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NoScriptModule, declarations: [NoScriptComponent], imports: [CommonModule, ScullyLibModule, i4.RouterModule] });
NoScriptModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NoScriptModule, imports: [[CommonModule, ScullyLibModule, RouterModule.forChild(routes)]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NoScriptModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ScullyLibModule, RouterModule.forChild(routes)],
                    declarations: [NoScriptComponent],
                }]
        }] });
//# sourceMappingURL=noscript.module.js.map