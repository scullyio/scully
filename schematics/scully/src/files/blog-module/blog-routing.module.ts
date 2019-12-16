import {NgModule} from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';

import {BlogComponent} from './blog.component';

interface HeroRoute extends Route {
  hero?: {path: string};
}
type HeroRoutes = HeroRoute[];

const routes: HeroRoutes = [
  {
    path: ':slug',
    component: BlogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
