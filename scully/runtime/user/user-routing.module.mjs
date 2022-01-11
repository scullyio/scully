import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: '', component: UsersComponent },
    {
        path: ':userId',
        component: UserComponent,
        children: [
            { path: '', component: PostsComponent, pathMatch: 'full' },
            { path: 'friend/:friendCode', component: UserComponent },
            { path: 'post/:postId', component: PostComponent }
        ]
    }
];
export class UserRoutingModule {
}
UserRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: UserRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UserRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: UserRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
UserRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: UserRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: UserRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=user-routing.module.js.map