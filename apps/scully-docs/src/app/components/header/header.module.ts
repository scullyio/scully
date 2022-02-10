import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavHeaderComponent } from './component/nav-header/nav-header.component';

@NgModule({
  declarations: [NavHeaderComponent],
  exports: [NavHeaderComponent],
  imports: [CommonModule, RouterModule]
})
export class HeaderModule {}
