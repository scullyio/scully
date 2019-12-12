import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MineRoutingModule } from './mine-routing.module';
import { MineComponent } from './mine.component';


@NgModule({
  declarations: [MineComponent],
  imports: [
    CommonModule,
    MineRoutingModule
  ]
})
export class MineModule { }
