import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  { path: '', component: DemoComponent }
];

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class DemoModule { }
