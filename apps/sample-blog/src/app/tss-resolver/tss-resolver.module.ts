import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TssResolverRoutingModule } from './tss-resolver-routing.module';
import { TssResolverComponent } from './tss-resolver.component';

@NgModule({
  declarations: [TssResolverComponent],
  imports: [CommonModule, TssResolverRoutingModule],
})
export class TssResolverModule {}
