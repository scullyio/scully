import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlowComponent } from './slow.component';

const routes: Routes = [{ path: '', component: SlowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlowRoutingModule {}
