import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'section.scullyio-landing-intro',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="text">
      <h1>Static Angular sites,<br />wicked fast.</h1>
      <p>
        <strong>Scully</strong> makes building, testing and deploying <a href="https://jamstack.org/">Jamstack</a> apps
        <strong>extremely simple.</strong>
      </p>
      <div class="button-container">
        <a href="/docs/learn/getting-started/overview">Get Started</a>
        <a href="/docs/learn/overview#how-does-it-work">How it Works</a>
      </div>
    </div>

    <div class="cli">
      <div class="triad"></div>
      <pre class="terminal">
<code>ng add @scullyio/init</code>
      </pre>
    </div>
  `,
})
export class LandingIntroComponent {}
