import {HttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ScullyContentComponent} from './scully-content/scully-content.component';

@NgModule({
  declarations: [ScullyContentComponent],
  exports: [ScullyContentComponent],
})
export class ComponentsModule {
  static forRoot() {
    return {
      NgModule: ComponentsModule,
      deps: [HttpClient],
    };
  }
}
