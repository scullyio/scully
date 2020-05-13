import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualIdleComponent } from './manual-idle.component';

const routes: Routes = [{ path: '', component: ManualIdleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualIdleRoutingModule {}
