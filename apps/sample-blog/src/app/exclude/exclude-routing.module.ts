import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcludeComponent } from './exclude.component';

const routes: Routes = [
  { path: 'present', component: ExcludeComponent },
  { path: 'notpresent', component: ExcludeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcludeRoutingModule {}
