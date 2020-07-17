import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scullyio-docs-page',
  encapsulation: ViewEncapsulation.None,
  template: `
    <section class="docs-page-content">
      <scully-content></scully-content>
    </section>
    <footer class="scullyio-footer"></footer>
  `,
})
export class DocsPageComponent {}
