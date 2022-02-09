import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'docs',
    loadChildren: () => import('./pages/docs/docs.module').then(m => m.DocsModule)
  },
  {
    path: 'ngconf',
    loadChildren: () => import('./pages/extraPages/extra-page.module').then(m => m.ExtraPageModule)
  },
  {
    path: 'scully-user',
    loadChildren: () => import('./pages/extraPages/extra-page.module').then(m => m.ExtraPageModule)
  },
  {
    path: 'consultancy',
    loadChildren: () => import('./pages/extraPages/extra-page.module').then(m => m.ExtraPageModule)
  },
  {
    path: '404',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
