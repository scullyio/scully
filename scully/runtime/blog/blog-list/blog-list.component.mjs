import { Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@scullyio/ng-lib";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
export class BlogListComponent {
    constructor(srs) {
        this.srs = srs;
        this.blogs$ = this.srs.available$.pipe(map(routeList => routeList.filter((route) => route.route.startsWith(`/blog/`))), map(blogs => blogs.sort((a, b) => (a.date < b.date ? -1 : 1))));
    }
    ngOnInit() { }
}
BlogListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BlogListComponent, deps: [{ token: i1.ScullyRoutesService }], target: i0.ɵɵFactoryTarget.Component });
BlogListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: BlogListComponent, selector: "app-blog-list", ngImport: i0, template: "<h1>Overview of blog posts</h1>\n\n<a *ngFor=\"let blog of blogs$ | async\" [routerLink]=\"[blog.route]\">\n  <article>\n    <h3>{{ blog.title || blog.route }}</h3>\n    <h4>{{ blog['publish date'] | date: 'shortDate':'GMT' }}</h4>\n    <p>{{ blog.description }}</p>\n  </article>\n</a>\n", styles: [":host {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n\n:host h1:first-child {\n  grid-column: span 3;\n  text-align: center;\n}\n\narticle {\n  background-color: royalblue;\n  padding: 5px;\n  border-radius: 5px;\n  color: whitesmoke;\n}\n"], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }], pipes: { "async": i2.AsyncPipe, "date": i2.DatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BlogListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-blog-list', template: "<h1>Overview of blog posts</h1>\n\n<a *ngFor=\"let blog of blogs$ | async\" [routerLink]=\"[blog.route]\">\n  <article>\n    <h3>{{ blog.title || blog.route }}</h3>\n    <h4>{{ blog['publish date'] | date: 'shortDate':'GMT' }}</h4>\n    <p>{{ blog.description }}</p>\n  </article>\n</a>\n", styles: [":host {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n\n:host h1:first-child {\n  grid-column: span 3;\n  text-align: center;\n}\n\narticle {\n  background-color: royalblue;\n  padding: 5px;\n  border-radius: 5px;\n  color: whitesmoke;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ScullyRoutesService }]; } });
//# sourceMappingURL=blog-list.component.js.map