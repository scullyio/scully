import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';
import { of } from 'rxjs';
import { catchError, filter, pluck, switchMap, map, shareReplay, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common/http";
import * as i3 from "@scullyio/ng-lib";
import * as i4 from "@angular/common";
export class UserComponent {
    constructor(route, http, transferState) {
        this.route = route;
        this.http = http;
        this.transferState = transferState;
        this.userId$ = this.route.params.pipe(pluck('userId'), filter((val) => ![undefined, null].includes(val)), map((val) => parseInt(val, 10)), shareReplay(1));
        this.next$ = this.userId$.pipe(map((id) => Math.min(+id + 1, 10)));
        this.prev$ = this.userId$.pipe(map((id) => Math.max(1, +id - 1)));
        this.apiUser$ = this.userId$.pipe(switchMap((id) => this.http.get(`/api/users/${id}`).pipe(catchError((e) => {
            console.log('error', e);
            return of({
                id: id,
                name: 'not found',
            });
        }))), shareReplay(1));
        // This is an example of using TransferState
        this.user$ = isScullyGenerated()
            ? this.transferState.getState('user').pipe(tap((user) => console.log('Incoming TSS user', user)))
            : this.apiUser$.pipe(tap((user) => this.transferState.setState('user', user)));
    }
    ngOnInit() { }
}
UserComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: UserComponent, deps: [{ token: i1.ActivatedRoute }, { token: i2.HttpClient }, { token: i3.TransferStateService }], target: i0.ɵɵFactoryTarget.Component });
UserComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: UserComponent, selector: "app-user", ngImport: i0, template: "<style>\n  #user {\n    display: grid;\n    grid-template-columns: 10rem 1fr;\n    grid-template-rows: repeat(4, 1rem);\n  }\n\n  #user label {\n    text-align: right;\n  }\n\n  #user label::after {\n    content: ':';\n  }\n\n  strong {\n    display: inline-block;\n    padding: 5px;\n    border-radius: 5px;\n    background-color: #afafaf;\n    margin: 10px;\n  }\n  #sub {\n    padding: 20px;\n  }\n</style>\n<section *ngIf=\"user$ | async as user; else loading\">\n  <h4>User Data</h4>\n\n  <section id=\"user\">\n    <label>Id</label>\n    <p>{{ user.id }}</p>\n    <label>Name</label>\n    <p>{{ user.name }}</p>\n    <label>email</label>\n    <p>{{ user.email }}</p>\n    <label>company</label>\n    <p>{{ user.company?.name }}</p>\n  </section>\n\n  <strong>{{ user.company?.catchPhrase }}</strong>\n</section>\n<ng-template #loading>\n  <section>Loading ...</section>\n</ng-template>\n<a [routerLink]=\"['/user/' + (prev$ | async)]\">Previous ({{ prev$ | async }})</a>\n<a [routerLink]=\"['/user/' + (next$ | async)]\">Next ({{ next$ | async }})</a>\n\n<hr />\n<section id=\"sub\">\n  <router-outlet></router-outlet>\n</section>\n", styles: ["a {\n  display: inline-block;\n  padding: 5px;\n  margin: 10px 3px;\n  width: 100px;\n  border-radius: 4px;\n  background-color: royalblue;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\na:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\na:active {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n", "\n  #user {\n    display: grid;\n    grid-template-columns: 10rem 1fr;\n    grid-template-rows: repeat(4, 1rem);\n  }\n\n  #user label {\n    text-align: right;\n  }\n\n  #user label::after {\n    content: ':';\n  }\n\n  strong {\n    display: inline-block;\n    padding: 5px;\n    border-radius: 5px;\n    background-color: #afafaf;\n    margin: 10px;\n  }\n  #sub {\n    padding: 20px;\n  }\n"], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }, { type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }], pipes: { "async": i4.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: UserComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-user', template: "<style>\n  #user {\n    display: grid;\n    grid-template-columns: 10rem 1fr;\n    grid-template-rows: repeat(4, 1rem);\n  }\n\n  #user label {\n    text-align: right;\n  }\n\n  #user label::after {\n    content: ':';\n  }\n\n  strong {\n    display: inline-block;\n    padding: 5px;\n    border-radius: 5px;\n    background-color: #afafaf;\n    margin: 10px;\n  }\n  #sub {\n    padding: 20px;\n  }\n</style>\n<section *ngIf=\"user$ | async as user; else loading\">\n  <h4>User Data</h4>\n\n  <section id=\"user\">\n    <label>Id</label>\n    <p>{{ user.id }}</p>\n    <label>Name</label>\n    <p>{{ user.name }}</p>\n    <label>email</label>\n    <p>{{ user.email }}</p>\n    <label>company</label>\n    <p>{{ user.company?.name }}</p>\n  </section>\n\n  <strong>{{ user.company?.catchPhrase }}</strong>\n</section>\n<ng-template #loading>\n  <section>Loading ...</section>\n</ng-template>\n<a [routerLink]=\"['/user/' + (prev$ | async)]\">Previous ({{ prev$ | async }})</a>\n<a [routerLink]=\"['/user/' + (next$ | async)]\">Next ({{ next$ | async }})</a>\n\n<hr />\n<section id=\"sub\">\n  <router-outlet></router-outlet>\n</section>\n", styles: ["a {\n  display: inline-block;\n  padding: 5px;\n  margin: 10px 3px;\n  width: 100px;\n  border-radius: 4px;\n  background-color: royalblue;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\na:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\na:active {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n", "\n  #user {\n    display: grid;\n    grid-template-columns: 10rem 1fr;\n    grid-template-rows: repeat(4, 1rem);\n  }\n\n  #user label {\n    text-align: right;\n  }\n\n  #user label::after {\n    content: ':';\n  }\n\n  strong {\n    display: inline-block;\n    padding: 5px;\n    border-radius: 5px;\n    background-color: #afafaf;\n    margin: 10px;\n  }\n  #sub {\n    padding: 20px;\n  }\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i2.HttpClient }, { type: i3.TransferStateService }]; } });
//# sourceMappingURL=user.component.js.map