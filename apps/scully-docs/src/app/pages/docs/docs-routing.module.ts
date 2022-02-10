import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsPageComponent } from './page/docs.page.component';

const routes: Routes = [
  {
    path: '',
    component: DocsPageComponent,
    children: [
      { path: ':slug', component: DocsPageComponent },
      { path: '**', component: DocsPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule {}
