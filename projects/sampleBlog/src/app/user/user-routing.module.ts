import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './user.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: ':userId', component: UserComponent},
  {path: ':userId/:friendCode', component: UserComponent},
  {path: ':userId/:posts/:comments', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
