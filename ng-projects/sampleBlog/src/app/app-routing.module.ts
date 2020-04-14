import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
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
  {path: 'exclude', loadChildren: () => import('./exclude/exclude.module').then(m => m.ExcludeModule)},
  {path: 'slow', loadChildren: () => import('./slow/slow.module').then(m => m.SlowModule)},
  {
    path: 'manualIdle',
    loadChildren: () => import('./manual-idle/manual-idle.module').then(m => m.ManualIdleModule),
  },
  {
    path: '**',
    loadChildren: () => import('./pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
