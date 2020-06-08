import { NgModule, Component, OnInit } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { Routes, RouterModule } from '@angular/router';

@Component({
  template: `
    <h1>Base Href component</h1>
  `
})
class BaseHrefComponent {}

@Component({
  template: `
    <h1>Base Href rewritten component</h1>
  `
})
class BaseHrefRewrittenComponent implements OnInit {
  ngOnInit() {
    if (document) {
      // tslint:disable-next-line: no-non-null-assertion
      const b = document.querySelector('base')!;
      b.setAttribute('href', '/wrong');
    }
  }
}
@Component({
  template: `
    <h1>Base Href removed component</h1>
  `
})
class BaseHrefRemovedComponent implements OnInit {
  ngOnInit() {
    if (document) {
      // tslint:disable-next-line: no-non-null-assertion
      const b = document.querySelector('base')!;
      // tslint:disable-next-line: no-non-null-assertion
      b.parentElement!.removeChild(b);
    }
  }
}

const routes: Routes = [
  { path: '', component: BaseHrefComponent },
  { path: 'rewritten', component: BaseHrefRewrittenComponent },
  { path: 'removed', component: BaseHrefRemovedComponent }
];

@NgModule({
  declarations: [],
  imports: [ScullyLibModule, RouterModule.forChild(routes)]
})
export class BaseHrefModule {}
