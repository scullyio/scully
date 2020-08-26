import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NavListService } from './components/nav-list/services';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <nav class="scullyio-nav-header" theme="dark"></nav>

    <div class="page-content">
      <section class="nav-container" *ngIf="showNavlist">
        <div class="scullyio-lang-select"></div>
        <!-- <ul class="scullyio-nav-list"></ul> -->
        <ul class="testNav" [navItem]="nl.docTree$ | async"></ul>
      </section>

      <section class="router-container">
        <router-outlet></router-outlet>
      </section>
    </div>
  `,
})
export class AppComponent {
  constructor(private router: Router, private nl: NavListService) {}
  get showNavlist() {
    return this.router.url !== '/';
  }
}
