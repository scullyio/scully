import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcludeRoutingModule } from './exclude-routing.module';
import { ExcludeComponent } from './exclude.component';

@NgModule({
  declarations: [ExcludeComponent],
  imports: [CommonModule, ExcludeRoutingModule]
})
export class ExcludeModule {}
