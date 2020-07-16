import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavListComponent } from './list/components/nav-list/nav-list.component';
import { ChildListComponent } from './list/components/child-list/child-list.component';
import { NavHeaderComponent } from './header/components/nav-header/nav-header.component';

@NgModule({
  declarations: [NavListComponent, ChildListComponent, NavHeaderComponent],
  exports: [NavListComponent, NavHeaderComponent],
  imports: [CommonModule, RouterModule],
})
export class NavModule {}
