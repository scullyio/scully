import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { FooterModule } from '../../components/footer';
import { DocsRoutingModule } from './docs-routing.module';

import { DocsPageComponent } from './page/docs.page.component';

@NgModule({
  declarations: [DocsPageComponent],
  imports: [CommonModule, ScullyLibModule, FooterModule, DocsRoutingModule],
})
export class DocsModule {}
