import { NgModule } from '@angular/core';

import { ContentComponent } from './content.component';
import { CommonModule } from '@angular/common';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: ':slug',
    component: ContentComponent,
  },
  {
    path: '**',
    component: ContentComponent,
  },
];

@NgModule({
  imports: [CommonModule, ScullyLibModule, RouterModule.forChild(routes)],
  declarations: [ContentComponent],
})
export class ContentModule {}
