import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DocsComponent} from './docs.component';
import {DocPageComponent} from './doc-page/doc-page.component';

const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      {path: ':slug', component: DocPageComponent},
      {path: '**', redirectTo: 'getting-started'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}
