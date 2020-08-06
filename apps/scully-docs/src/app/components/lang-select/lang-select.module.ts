import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LangSelectComponent } from './component/lang-select/lang-select.component';

@NgModule({
  declarations: [LangSelectComponent],
  exports: [LangSelectComponent],
  imports: [CommonModule, RouterModule],
})
export class LangSelectModule {}
