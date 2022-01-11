import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';
import { of } from 'rxjs';
import { catchError, filter, map, pluck, shareReplay, switchMap, tap, } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common/http";
import * as i3 from "@scullyio/ng-lib";
import * as i4 from "@angular/common";
export class PostsComponent {
    constructor(route, http, transferState) {
        this.route = route;
        this.http = http;
        this.transferState = transferState;
        this.userId$ = this.route.params.pipe(pluck('userId'), filter((val) => ![undefined, null].includes(val)), map((val) => parseInt(val, 10)), shareReplay(1));
        this.apiPosts$ = this.userId$.pipe(switchMap((id) => this.http.get(`/api/posts?userId=${id}`).pipe(catchError(() => of([{
                id,
                title: 'not found',
            }])))), shareReplay(1));
        // This is an example of using TransferState
        this.posts$ = isScullyGenerated()
            ? this.transferState.getState('posts')
            : this.apiPosts$.pipe(tap((posts) => this.transferState.setState('posts', posts)));
    }
    ngOnInit() { }
}
PostsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: PostsComponent, deps: [{ token: i1.ActivatedRoute }, { token: i2.HttpClient }, { token: i3.TransferStateService }], target: i0.ɵɵFactoryTarget.Component });
PostsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: PostsComponent, selector: "app-posts", ngImport: i0, template: "<h4>User posts</h4>\n<section *ngIf=\"posts$ | async as posts\">\n  <ul>\n    <li *ngFor=\"let post of posts\">\n      <a [routerLink]=\"['post', post.id]\">{{ post.title }}</a>\n    </li>\n  </ul>\n</section>\n", styles: [""], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }], pipes: { "async": i4.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: PostsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-posts', template: "<h4>User posts</h4>\n<section *ngIf=\"posts$ | async as posts\">\n  <ul>\n    <li *ngFor=\"let post of posts\">\n      <a [routerLink]=\"['post', post.id]\">{{ post.title }}</a>\n    </li>\n  </ul>\n</section>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i2.HttpClient }, { type: i3.TransferStateService }]; } });
//# sourceMappingURL=posts.component.js.map