import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <nav class="scullyio-nav-header"></nav>

    <div class="page-content">
      <section class="nav-container" *ngIf="showNavlist">
        <div class="scullyio-lang-select"></div>
        <ul class="scullyio-nav-list"></ul>
      </section>

      <section class="router-container">
        <router-outlet></router-outlet>
      </section>
    </div>
  `,
})
export class AppComponent {
  constructor(private router: Router) {}
  get showNavlist() {
    return this.router.url !== '/';
  }
}
