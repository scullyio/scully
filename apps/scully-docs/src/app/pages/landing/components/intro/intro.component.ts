import { Component } from '@angular/core';

@Component({
  selector: 'scullyio-landing-intro',
  styleUrls: ['./intro.component.css'],
  template: `
    <section class="intro">
      <div class="text">
        <h1>Static Angular sites,<br />wicked fast.</h1>
        <p>
          <strong>Scully</strong> makes building, testing and deploying <a href="https://jamstack.org/">JAMStack</a> apps
          <strong>extremely simple.</strong>
        </p>
        <p>
          Ship <strong>pre-rendered HTML & CSS</strong> instead of your entire Angular build, delivering users
          <strong>insanely fast apps</strong> on any device.
        </p>
        <div class="button-container">
          <a href="/docs/learn/getting-started/requirements">Get Started</a>
          <a href="/docs/learn/introduction">How it Works</a>
        </div>
      </div>

      <div class="cli">
        <div class="triad"></div>
        <pre class="terminal">
<code>ng add @scullyio/init</code>
        </pre>
      </div>
    </section>
  `,
})
export class LandingIntroComponent {}
