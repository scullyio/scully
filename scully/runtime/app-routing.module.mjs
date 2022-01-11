import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: 'about',
        loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => import('./static/static.module').then((m) => m.StaticModule),
    },
    {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
    },
    {
        path: 'content',
        loadChildren: () => import('./content/content.module').then((m) => m.ContentModule),
    },
    {
        path: 'user',
        loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    },
    {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule),
    },
    {
        path: 'exclude',
        loadChildren: () => import('./exclude/exclude.module').then((m) => m.ExcludeModule),
    },
    {
        path: 'slow',
        loadChildren: () => import('./slow/slow.module').then((m) => m.SlowModule),
    },
    {
        path: 'basehref',
        loadChildren: () => import('./basehref/basehref.module').then((m) => m.BaseHrefModule),
    },
    {
        path: 'manualIdle',
        loadChildren: () => import('./manual-idle/manual-idle.module').then((m) => m.ManualIdleModule),
    },
    {
        path: 'noScript',
        loadChildren: () => import('./noscript/noscript.module').then((m) => m.NoScriptModule),
    },
    {
        path: '**',
        loadChildren: () => import('./pagenotfound/pagenotfound.module').then((m) => m.PagenotfoundModule),
    },
];
export class AppRoutingModule {
}
AppRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AppRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AppRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AppRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
AppRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AppRoutingModule, imports: [[RouterModule.forRoot(routes, { anchorScrolling: 'enabled', relativeLinkResolution: 'legacy' })], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AppRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', relativeLinkResolution: 'legacy' })],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=app-routing.module.js.map