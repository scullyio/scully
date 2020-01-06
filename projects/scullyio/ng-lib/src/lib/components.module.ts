import {HttpClient} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {ScullyContentComponent} from './scully-content/scully-content.component';

@NgModule({
  declarations: [ScullyContentComponent],
  exports: [ScullyContentComponent],
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders<ComponentsModule> {
    return {
      ngModule: ComponentsModule,
      providers: [HttpClient],
    };
  }
}
