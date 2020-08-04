import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nav.scullyio-nav-header',
  encapsulation: ViewEncapsulation.None,
  template: `
    <img src="assets/beta-badge.png" alt="beta" class="badge" />
    <ul>
      <li class="logo"><a routerLink="/"></a></li>
      <li>#BlackLivesMatter</li>
      <li class="feature"><a routerLink="/docs/learn/getting-started/requirements">get started</a></li>
      <li><a routerLink="/docs/learn/introduction">docs</a></li>
      <li><a routerLink="/docs/community/showcase">showcase</a></li>
      <li class="icon github"><a href="https://github.com/scullyio/scully"></a></li>
    </ul>
  `,
})
export class NavHeaderComponent {}
