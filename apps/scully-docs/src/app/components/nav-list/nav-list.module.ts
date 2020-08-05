import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavListComponent } from './components/nav-list/nav-list.component';
import { ChildListComponent } from './components/child-list/child-list.component';

@NgModule({
  declarations: [NavListComponent, ChildListComponent],
  exports: [NavListComponent],
  imports: [CommonModule, RouterModule],
})
export class NavListModule {}
