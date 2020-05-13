import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [UserComponent, UsersComponent, PostsComponent, PostComponent],
  imports: [CommonModule, UserRoutingModule]
})
export class UserModule {}
