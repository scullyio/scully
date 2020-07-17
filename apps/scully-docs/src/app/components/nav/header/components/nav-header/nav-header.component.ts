import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scullyio-nav-header',
  encapsulation: ViewEncapsulation.None,
  template: `
    <nav>
      <ul>
        <li class="logo"><a routerLink="/"></a></li>
        <li class="feature"><a routerLink="/docs/learn/getting-started/requirements">get started</a></li>
        <li><a routerLink="/docs/learn/introduction">docs</a></li>
        <li><a routerLink="/docs/community/showcase">showcase</a></li>
        <li class="icon github"><a href="https://github.com/scullyio/scully"></a></li>
      </ul>
    </nav>
  `,
})
export class NavHeaderComponent {}
