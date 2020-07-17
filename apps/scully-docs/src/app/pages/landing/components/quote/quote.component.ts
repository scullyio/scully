import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scullyio-landing-quote',
  encapsulation: ViewEncapsulation.None,
  // styleUrls: ['./quote.component.css'],
  template: `
    <section class="quote-container">
      <blockquote>
        <p>Nothing will make your Angular project as fast as using Scully and embracing JAMstack.</p>
      </blockquote>

      <cite>
        <p class="name">- Aaron Frost</p>
        <p class="org">Scully Core Team Member</p>
      </cite>
    </section>
  `,
})
export class LandingQuoteComponent {}
