import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./static/static.module').then(m => m.StaticModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./content/content.module').then(m => m.ContentModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: 'exclude',
    loadChildren: () => import('./exclude/exclude.module').then(m => m.ExcludeModule)
  },
  {
    path: 'slow',
    loadChildren: () => import('./slow/slow.module').then(m => m.SlowModule)
  },
  {
    path: 'basehref',
    loadChildren: () => import('./basehref/basehref.module').then(m => m.BaseHrefModule)
  },
  {
    path: 'manualIdle',
    loadChildren: () => import('./manual-idle/manual-idle.module').then(m => m.ManualIdleModule)
  },
  {
    path: 'noScript',
    loadChildren: () => import('./noscript/noscript.module').then(m => m.NoScriptModule)
  },
  { path: 'tssr', loadChildren: () => import('./tss-resolver/tss-resolver.module').then(m => m.TssResolverModule) },
  {
    path: '**',
    loadChildren: () => import('./pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
