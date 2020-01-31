import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './user.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';

const routes: Routes = [
  {path: '', component: UsersComponent},
  {
    path: ':userId',
    component: UserComponent,
    children: [
      {path: '', component: PostsComponent, pathMatch: 'full'},
      {path: 'friend/:friendCode', component: UserComponent},
      {path: 'post/:postId', component: PostComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
