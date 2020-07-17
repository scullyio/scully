import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scullyio-docs-page',
  encapsulation: ViewEncapsulation.None,
  template: `
    <section class="docs-page-content">
      <scully-content></scully-content>
    </section>
    <scullyio-footer></scullyio-footer>
  `,
})
export class DocsPageComponent {}
