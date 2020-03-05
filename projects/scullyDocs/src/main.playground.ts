import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {PlaygroundModule} from 'angular-playground';

PlaygroundModule.configure({
  selector: 'app-root',
  overlay: false,
  modules: [],
});

@Component({
  selector: 'playground-app',
  template: '<playground-root></playground-root>',
})
export class AppComponent {}

@NgModule({
  imports: [BrowserModule, PlaygroundModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
