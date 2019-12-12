import {NgModule} from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';

import {BlogComponent} from './blog.component';

const routes: Routes = [
  {path: '', component: BlogComponent},
  {
    path: ':slug',
    component: BlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
