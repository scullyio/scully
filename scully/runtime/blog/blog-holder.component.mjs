import { Component } from '@angular/core';
import { ScullyRoutesService, TransferStateService } from '@scullyio/ng-lib';
import { map } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@scullyio/ng-lib";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
export class BlogHolderComponent {
    constructor(srs, sts) {
        this.srs = srs;
        this.sts = sts;
        this.blogs$ = this.sts.useScullyTransferState('blogRoutes', this.srs.available$.pipe(map((routeList) => routeList.filter((route) => route.route.startsWith(`/blog/`))), map((blogs) => blogs.sort((a, b) => (a.date < b.date ? -1 : 1)))));
    }
}
BlogHolderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BlogHolderComponent, deps: [{ token: i1.ScullyRoutesService }, { token: i1.TransferStateService }], target: i0.ɵɵFactoryTarget.Component });
BlogHolderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: BlogHolderComponent, selector: "app-blog-holder", ngImport: i0, template: `
    <h3>Scully blog content</h3>
    <hr />

    <router-outlet></router-outlet>

    <hr />
    <h4>End of blog content</h4>

    <span *ngFor="let r of blogs$ | async">
      <a [routerLink]="r.route">{{ r.route }}</a>
      <br />
    </span>
    <span>
      <a [routerLink]="['/blog/page-4']" fragment="_first_level_heading">Route to Page 4 Fragment</a>
    </span>
  `, isInline: true, directives: [{ type: i2.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }], pipes: { "async": i3.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BlogHolderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-blog-holder',
                    template: `
    <h3>Scully blog content</h3>
    <hr />

    <router-outlet></router-outlet>

    <hr />
    <h4>End of blog content</h4>

    <span *ngFor="let r of blogs$ | async">
      <a [routerLink]="r.route">{{ r.route }}</a>
      <br />
    </span>
    <span>
      <a [routerLink]="['/blog/page-4']" fragment="_first_level_heading">Route to Page 4 Fragment</a>
    </span>
  `,
                }]
        }], ctorParameters: function () { return [{ type: i1.ScullyRoutesService }, { type: i1.TransferStateService }]; } });
//# sourceMappingURL=blog-holder.component.js.map