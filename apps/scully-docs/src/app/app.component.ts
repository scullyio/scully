import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NavListService } from './components/nav-list/nav-list.service';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <nav class="scullyio-nav-header" theme="dark"></nav>

    <div class="page-content">
      <section class="nav-container" *ngIf="showNavlist">
        <div class="scullyio-lang-select"></div>
        <!-- <ul class="scullyio-nav-list"></ul> -->
        <nav>
          <ul class="sideMenu" [navItem]="nl.docTree$ | async"></ul>
        </nav>
      </section>

      <section class="router-container">
        <router-outlet></router-outlet>
      </section>
    </div>
  `,
})
export class AppComponent {
  constructor(private router: Router, public nl: NavListService) {}
  get showNavlist() {
    return this.router.url !== '/';
  }
}
