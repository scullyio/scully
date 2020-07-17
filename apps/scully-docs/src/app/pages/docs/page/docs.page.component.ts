import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scullyio-docs-page',
  encapsulation: ViewEncapsulation.None,
  // styles: [`
  //   /* this :host is used to position footer at the bottom always */
  //   :host {
  //     height: 100%;
  //     display: flex;
  //     flex-direction: column;
  //   }
  // `],
  // './docs.page.component.css',
  // '../styles/blockquote.css',
  // '../styles/code.css',
  // '../styles/details.css',
  // '../styles/headings.css',
  // '../styles/icon_button.css',
  // '../styles/link_table.css',
  // '../styles/links.css',
  // '../styles/paragraph_list.css',
  // '../styles/prev_next.css',
  // '../styles/showcase.css',
  // '../styles/table.css',
  // '../styles/toc.css',
  // ],
  template: `
    <section class="docs-page-content">
      <scully-content></scully-content>
    </section>
    <scullyio-footer></scullyio-footer>
  `,
})
export class DocsPageComponent {}
