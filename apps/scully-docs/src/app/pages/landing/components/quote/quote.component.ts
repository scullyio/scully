import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'section.scullyio-landing-quote',
  encapsulation: ViewEncapsulation.None,
  template: `
    <blockquote>
      <p>Nothing will make your Angular project as fast as using Scully and embracing JAMstack.</p>
    </blockquote>
    <cite>
      <p class="name">- Aaron Frost</p>
      <p class="org">Scully Core Team Member</p>
    </cite>
  `,
})
export class LandingQuoteComponent {}
