import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./static/static.module').then(m => m.StaticModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: '**',
    loadChildren: () => import('./pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule),
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
