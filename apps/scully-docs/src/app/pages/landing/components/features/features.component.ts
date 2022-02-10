import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'section.scullyio-landing-features',
  encapsulation: ViewEncapsulation.None,
  template: `
    <section class="features">
      <div class="feature">
        <div class="icon-container">
          <img width="70" height="74" src="/assets/img/icons/angular-brands.svg" alt="angular logo" />
        </div>
        <h2>Jamstack Toolchain</h2>
        <p>
          Scully's CLI is powerful enough to make JAMstack possible for all Angular and Angular-hybrid projects. Everything needed
          to build, test, and deploy is included out of the box.
        </p>
      </div>

      <div class="feature">
        <div class="icon-container">
          <img width="70" height="74" src="/assets/img/icons/angle-double-right-solid.svg" alt="right arrows" />
        </div>
        <h2>Runtime Tooling</h2>
        <p>
          Scully gives developers the necessary tools to JAMstackify any Angular project, including fine-grained control where
          needed.
        </p>
      </div>

      <div class="feature">
        <div class="icon-container">
          <img width="70" height="74" alt="puzzle piece" src="/assets/img/icons/puzzle-piece-solid.svg" />
        </div>
        <h2><a routerLink="/docs/Reference/plugins/overview">Plugin System</a></h2>
        <p>
          Extend and adapt Scully to any need with its powerful plugin ecosystem. Choose from built-in plugins, community plugins,
          or make you own custom plugin and unleash the full power of Scully.
        </p>
      </div>
    </section>
  `
})
export class LandingFeaturesComponent {}
