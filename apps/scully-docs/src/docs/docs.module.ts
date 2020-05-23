import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DocPageComponent } from './doc-page/doc-page.component';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ComponentsModule } from '../app/components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DocsComponent, DocPageComponent],
  imports: [
    CommonModule,
    DocsRoutingModule,
    ScullyLibModule,
    ComponentsModule,
    FormsModule
  ]
})
export class DocsModule {}
