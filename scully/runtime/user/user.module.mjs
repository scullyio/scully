import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UsersComponent } from './users/users.component';
import * as i0 from "@angular/core";
export class UserModule {
}
UserModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: UserModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UserModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: UserModule, declarations: [UserComponent, UsersComponent, PostsComponent, PostComponent], imports: [CommonModule, UserRoutingModule] });
UserModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: UserModule, imports: [[CommonModule, UserRoutingModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: UserModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [UserComponent, UsersComponent, PostsComponent, PostComponent],
                    imports: [CommonModule, UserRoutingModule]
                }]
        }] });
//# sourceMappingURL=user.module.js.map