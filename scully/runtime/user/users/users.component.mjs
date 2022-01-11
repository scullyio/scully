import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';
import { of } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@scullyio/ng-lib";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
export class UsersComponent {
    constructor(http, transferState) {
        this.http = http;
        this.transferState = transferState;
        this.apiUsers$ = this.http.get(`/api/users`).pipe(catchError(() => of([])), map((users) => users.slice(0, 10)), shareReplay(1));
        // This is an example of using TransferState
        this.users$ = isScullyGenerated()
            ? this.transferState.getState('users')
            : this.apiUsers$.pipe(tap((user) => this.transferState.setState('users', user)));
    }
    ngOnInit() { }
}
UsersComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: UsersComponent, deps: [{ token: i1.HttpClient }, { token: i2.TransferStateService }], target: i0.ɵɵFactoryTarget.Component });
UsersComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: UsersComponent, selector: "app-users", ngImport: i0, template: "<h1>Users</h1>\n\n<section *ngIf=\"users$ | async as users\">\n  <table>\n    <thead>\n      <th>Id</th>\n      <th>Username</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of users\">\n        <td>{{ user.id }}</td>\n        <td>\n          <a [routerLink]=\"''+user.id\" [queryParams]=\"{ id: user.id }\">\n            {{ user.name }}</a\n          >\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</section>\n", styles: [""], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }], pipes: { "async": i3.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: UsersComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-users', template: "<h1>Users</h1>\n\n<section *ngIf=\"users$ | async as users\">\n  <table>\n    <thead>\n      <th>Id</th>\n      <th>Username</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of users\">\n        <td>{{ user.id }}</td>\n        <td>\n          <a [routerLink]=\"''+user.id\" [queryParams]=\"{ id: user.id }\">\n            {{ user.name }}</a\n          >\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</section>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.TransferStateService }]; } });
//# sourceMappingURL=users.component.js.map