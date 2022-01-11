import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog.component';
import { BlogHolderComponent } from './blog-holder.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: '', component: BlogListComponent, pathMatch: 'full' },
    {
        path: '',
        component: BlogHolderComponent,
        children: [
            {
                path: ':slug',
                component: BlogComponent,
            },
            {
                path: '**',
                component: BlogComponent,
            },
        ],
    },
];
export class BlogRoutingModule {
}
BlogRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BlogRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BlogRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BlogRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
BlogRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BlogRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BlogRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=blog-routing.module.js.map