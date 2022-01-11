import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogHolderComponent } from './blog-holder.component';
import * as i0 from "@angular/core";
export class BlogModule {
}
BlogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BlogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BlogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BlogModule, declarations: [BlogComponent, BlogListComponent, BlogHolderComponent], imports: [CommonModule, BlogRoutingModule, ScullyLibModule] });
BlogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BlogModule, imports: [[CommonModule, BlogRoutingModule, ScullyLibModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: BlogModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BlogComponent, BlogListComponent, BlogHolderComponent],
                    imports: [CommonModule, BlogRoutingModule, ScullyLibModule],
                }]
        }] });
//# sourceMappingURL=blog.module.js.map