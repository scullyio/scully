import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SlowRoutingModule} from './slow-routing.module';
import {SlowComponent} from './slow.component';

@NgModule({
  declarations: [SlowComponent],
  imports: [CommonModule, SlowRoutingModule],
})
export class SlowModule {}
