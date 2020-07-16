import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <section class="page-container">
      <nav class="header">
        <scullyio-nav-header></scullyio-nav-header>
      </nav>

      <div class="page-content">
        <nav class="left" *ngIf="showNavlist">
          <scullyio-nav-list></scullyio-nav-list>
        </nav>

        <section class="router-container">
          <router-outlet></router-outlet>
        </section>
      </div>
    </section>
  `,
})
export class AppComponent {
  constructor(private router: Router) {}

  get showNavlist() {
    return this.router.url !== '/';
  }
}
