import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ScullyContentComponent} from './scully-content/scully-content.component';

@NgModule({
  declarations: [ScullyContentComponent],
  imports: [HttpClientModule],
  exports: [ScullyContentComponent],
})
export class ComponentsModule {}
