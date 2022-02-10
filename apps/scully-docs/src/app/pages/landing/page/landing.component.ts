import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scullyio-landing-page',
  encapsulation: ViewEncapsulation.None,
  template: `
    <section class="scullyio-landing-intro"></section>
    <section class="scullyio-landing-features"></section>
    <section class="scullyio-landing-quote"></section>
    <section class="scullyio-landing-resources"></section>
    <footer class="scullyio-footer"></footer>
  `
})
export class LandingPageComponent {}
