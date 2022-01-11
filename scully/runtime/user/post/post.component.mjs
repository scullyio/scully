import { Component } from '@angular/core';
import { of } from 'rxjs';
import { pluck, shareReplay, switchMap, catchError, tap, filter, map, } from 'rxjs';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common/http";
import * as i3 from "@scullyio/ng-lib";
import * as i4 from "@angular/common";
export class PostComponent {
    constructor(route, http, transferState) {
        this.route = route;
        this.http = http;
        this.transferState = transferState;
        this.postId$ = this.route.params.pipe(pluck('postId'), filter((val) => ![undefined, null].includes(val)), map((val) => parseInt(val, 10)), shareReplay(1));
        this.apiPosts$ = this.postId$.pipe(switchMap((id) => this.http.get(`/api/posts/${id}`).pipe(catchError(() => of({
            id,
            title: 'not found',
        })))), shareReplay(1));
        // This is an example of using TransferState
        this.post$ = isScullyGenerated()
            ? this.transferState.getState('post')
            : this.apiPosts$.pipe(tap((post) => this.transferState.setState('post', post)));
    }
    ngOnInit() { }
}
PostComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: PostComponent, deps: [{ token: i1.ActivatedRoute }, { token: i2.HttpClient }, { token: i3.TransferStateService }], target: i0.ɵɵFactoryTarget.Component });
PostComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: PostComponent, selector: "app-post", ngImport: i0, template: "<h4>Post details</h4>\n<section *ngIf=\"post$ | async as post\">\n  <h4>{{ post.title }}</h4>\n\n  <p>{{ post.body }}</p>\n</section>\n", styles: [""], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": i4.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: PostComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-post', template: "<h4>Post details</h4>\n<section *ngIf=\"post$ | async as post\">\n  <h4>{{ post.title }}</h4>\n\n  <p>{{ post.body }}</p>\n</section>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i2.HttpClient }, { type: i3.TransferStateService }]; } });
//# sourceMappingURL=post.component.js.map