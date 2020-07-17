import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scullyio-landing-page',
  encapsulation: ViewEncapsulation.None,
  template: `
    <section>
      <scullyio-landing-intro></scullyio-landing-intro>
      <scullyio-landing-features></scullyio-landing-features>
      <scullyio-landing-quote></scullyio-landing-quote>
      <scullyio-landing-resources></scullyio-landing-resources>
    </section>
    <scullyio-footer></scullyio-footer>
  `,
})
export class LandingPageComponent {}
