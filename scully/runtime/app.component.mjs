import { ApplicationRef, Component } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IdleMonitorService, isScullyGenerated, isScullyRunning } from '@scullyio/ng-lib';
import { tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@scullyio/ng-lib";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
export class AppComponent {
    constructor(im, route, loc, router, platformStrategy, appRef) {
        this.im = im;
        this.route = route;
        this.loc = loc;
        this.router = router;
        this.appRef = appRef;
        this.currentState = isScullyRunning() ? 'rendering inside scully' : isScullyGenerated() ? 'Loaded from static HTML' : 'SPA mode';
        im.init();
        appRef.isStable.pipe(tap((stable) => {
            console.log(`
        stable: ${stable}
        AppComponent: ${this.currentState}
        loc: ${this.loc.path(true)}
        url: ${this.route.snapshot.pathFromRoot.map((x) => x.url).join('/')}
        route: ${this.router.url},
        ps: ${platformStrategy.constructor.name}
        `);
        })); //.subscribe();
    }
}
AppComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AppComponent, deps: [{ token: i1.IdleMonitorService }, { token: i2.ActivatedRoute }, { token: i3.Location }, { token: i2.Router }, { token: i3.LocationStrategy }, { token: i0.ApplicationRef }], target: i0.ɵɵFactoryTarget.Component });
AppComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: AppComponent, selector: "app-root", ngImport: i0, template: "<header>\n  <h1>\n    Scully demo blog app! <small>{{ currentState }}</small>\n  </h1>\n  <a [routerLink]=\"['/home']\">\uD83C\uDFE0</a>\n</header>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n<footer>\n  <h3>Made with \u2764\uFE0F <strong>@HeroDevs</strong></h3>\n</footer>\n", styles: [":host {\n  display: grid;\n  height: 100vh;\n  grid-template-rows: 60px 1fr 60px;\n}\n\n:host > header {\n  display: grid;\n  background-color: royalblue;\n  color: whitesmoke;\n  margin: 0;\n  padding: 0px 10px;\n  grid-template-columns: 1fr 40px;\n  place-items: center center;\n}\n\nheader h1,\nfooter h3 {\n  margin: 0;\n}\n:host > footer {\n  display: grid;\n  background-color: royalblue;\n  color: whitesmoke;\n  margin: 0;\n  padding-right: 10px;\n  justify-content: right;\n  align-content: center;\n}\n\nmain {\n  background-color: whitesmoke;\n  color: rgb(4, 12, 36);\n  padding: 10px;\n}\n"], directives: [{ type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }, { type: i2.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AppComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-root', template: "<header>\n  <h1>\n    Scully demo blog app! <small>{{ currentState }}</small>\n  </h1>\n  <a [routerLink]=\"['/home']\">\uD83C\uDFE0</a>\n</header>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n<footer>\n  <h3>Made with \u2764\uFE0F <strong>@HeroDevs</strong></h3>\n</footer>\n", styles: [":host {\n  display: grid;\n  height: 100vh;\n  grid-template-rows: 60px 1fr 60px;\n}\n\n:host > header {\n  display: grid;\n  background-color: royalblue;\n  color: whitesmoke;\n  margin: 0;\n  padding: 0px 10px;\n  grid-template-columns: 1fr 40px;\n  place-items: center center;\n}\n\nheader h1,\nfooter h3 {\n  margin: 0;\n}\n:host > footer {\n  display: grid;\n  background-color: royalblue;\n  color: whitesmoke;\n  margin: 0;\n  padding-right: 10px;\n  justify-content: right;\n  align-content: center;\n}\n\nmain {\n  background-color: whitesmoke;\n  color: rgb(4, 12, 36);\n  padding: 10px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.IdleMonitorService }, { type: i2.ActivatedRoute }, { type: i3.Location }, { type: i2.Router }, { type: i3.LocationStrategy }, { type: i0.ApplicationRef }]; } });
//# sourceMappingURL=app.component.js.map