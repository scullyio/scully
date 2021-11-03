import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

const routes: Routes = [
  { path: ':slug', component: DocsComponent }
];

@NgModule({
  declarations: [
    DocsComponent
  ],
  imports: [
    CommonModule,
    DocsRoutingModule,
    ScullyLibModule,
    RouterModule.forChild(routes)
  ]
})
export class DocsModule { }
