import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scullyio-footer',
  encapsulation: ViewEncapsulation.None,
  template: `
    <footer>
      <section>
        <h2>Learn</h2>
        <ul>
          <li><a routerLink="/docs/learn/introduction">Docs</a></li>
          <li><a routerLink="/docs/learn/getting-started/requirements">Quickstart</a></li>
        </ul>
      </section>

      <section>
        <h2>Community</h2>
        <ul>
          <li><a routerLink="/docs/community/contributing">Contribute</a></li>
          <li><a href="https://gitter.im/scullyio/community">Gitter Channel</a></li>
          <li><a href="https://twitter.com/ScullyIO">Twitter</a></li>
        </ul>
      </section>
      <section>
        <h2>Organization</h2>
        <ul>
          <li><a href="https://herodevs.com/">About us</a></li>
          <li><a href="mailto:aaron@hero.dev">Contact us</a></li>
          <li><a href="https://github.com/scullyio/scully/tree/main/assets/logos">Press kit</a></li>
        </ul>
      </section>
    </footer>
  `,
})
export class FooterComponent {}
