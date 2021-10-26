import { Component } from '@angular/core';

@Component({
  selector: 'scullyio-root',
  template: `
    <nav>
      <a [routerLink]="'/home'">Home</a>
      <a [routerLink]="'/about'">About</a>
      <a [routerLink]="['/user', 100]">user 100</a>
      <a [routerLink]="['/demo', 100]">demo 100</a>
    </nav>
    <router-outlet></router-outlet>
    <style>
      nav {
        display: grid;
        grid-template-columns: repeat(auto-fit, 4rem);
      }
    </style>
  `,

  styles: [``],
})
export class AppComponent {
  title = 'universal-sample';
  constructor() {
  }
}
