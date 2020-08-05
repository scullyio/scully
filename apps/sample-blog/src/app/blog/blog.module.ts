import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogHolderComponent } from './blog-holder.component';

@NgModule({
  declarations: [BlogComponent, BlogListComponent, BlogHolderComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule],
})
export class BlogModule {}
