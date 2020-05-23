import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaticComponent } from './static.component';

const routes: Routes = [
  { path: ':topLevel', component: StaticComponent },
  { path: '', component: StaticComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
