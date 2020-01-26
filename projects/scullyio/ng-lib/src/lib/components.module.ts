import {NgModule} from '@angular/core';
import {ScullyContentModule} from './scully-content/scully-content.module';

@NgModule({
  imports: [ScullyContentModule],
  exports: [ScullyContentModule],
})
export class ComponentsModule {}
