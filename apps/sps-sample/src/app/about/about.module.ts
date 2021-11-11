import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', component: AboutComponent }
];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
