import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@scullyio/ng-lib";
import * as i2 from "@angular/router";
import * as i3 from "@angular/platform-browser";
import * as i4 from "@angular/common";
export class StaticComponent {
    constructor(srs, route, title) {
        this.srs = srs;
        this.route = route;
        this.title = title;
        this.toplevelOnly = true;
        this.unPublished = false;
        this.available$ = this.srs.available$;
        this.topLevel$ = this.srs.topLevel$;
        this.title$ = this.srs.getCurrent().pipe(map(r => r.title || ''), tap(t => this.title.setTitle(t)));
    }
    get routes() {
        return this.unPublished
            ? this.srs.unPublished$
            : this.toplevelOnly
                ? this.topLevel$
                : this.available$;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.toplevelOnly = params.topLevel !== 'all';
            this.unPublished = params.topLevel === 'unpublished';
        });
    }
}
StaticComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: StaticComponent, deps: [{ token: i1.ScullyRoutesService }, { token: i2.ActivatedRoute }, { token: i3.Title }], target: i0.ɵɵFactoryTarget.Component });
StaticComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: StaticComponent, selector: "app-static", ngImport: i0, template: "<!-- Gets the title from the scully.routes -->\n<h1>{{ title$ | async }}</h1>\n\n<a class=\"btn\" [routerLink]=\"['/home', '']\" *ngIf=\"!toplevelOnly || unPublished\"\n  >Top level routes only</a\n>\n<a\n  class=\"btn\"\n  [routerLink]=\"['/home', 'all']\"\n  *ngIf=\"toplevelOnly || unPublished\"\n  >All routes</a\n>\n<a class=\"btn\" [routerLink]=\"['/home', 'unpublished']\" *ngIf=\"!unPublished\"\n  >Unpublished routes</a\n>\n<ul>\n  <li>\n    <strong>routelink</strong>\n    <strong>full page reload</strong>\n  </li>\n  <li *ngFor=\"let r of routes | async\">\n    <a [routerLink]=\"[r.route]\">{{ r.title || r.route }}</a>\n    <a [href]=\"r.route\">{{ r.title || r.route }}</a>\n  </li>\n</ul>\n", styles: ["li {\n  display: grid;\n  grid-template-columns: 200px 200px;\n}\n\na.btn {\n  display: inline-block;\n  padding: 10px;\n  margin: 10px 3px;\n  width: 200px;\n  height: 40px;\n  border-radius: 4px;\n  background-color: royalblue;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\na.btn:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22);\n}\n\na.btn:active {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n"], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i4.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: StaticComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-static', template: "<!-- Gets the title from the scully.routes -->\n<h1>{{ title$ | async }}</h1>\n\n<a class=\"btn\" [routerLink]=\"['/home', '']\" *ngIf=\"!toplevelOnly || unPublished\"\n  >Top level routes only</a\n>\n<a\n  class=\"btn\"\n  [routerLink]=\"['/home', 'all']\"\n  *ngIf=\"toplevelOnly || unPublished\"\n  >All routes</a\n>\n<a class=\"btn\" [routerLink]=\"['/home', 'unpublished']\" *ngIf=\"!unPublished\"\n  >Unpublished routes</a\n>\n<ul>\n  <li>\n    <strong>routelink</strong>\n    <strong>full page reload</strong>\n  </li>\n  <li *ngFor=\"let r of routes | async\">\n    <a [routerLink]=\"[r.route]\">{{ r.title || r.route }}</a>\n    <a [href]=\"r.route\">{{ r.title || r.route }}</a>\n  </li>\n</ul>\n", styles: ["li {\n  display: grid;\n  grid-template-columns: 200px 200px;\n}\n\na.btn {\n  display: inline-block;\n  padding: 10px;\n  margin: 10px 3px;\n  width: 200px;\n  height: 40px;\n  border-radius: 4px;\n  background-color: royalblue;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\na.btn:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22);\n}\n\na.btn:active {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ScullyRoutesService }, { type: i2.ActivatedRoute }, { type: i3.Title }]; } });
//# sourceMappingURL=static.component.js.map