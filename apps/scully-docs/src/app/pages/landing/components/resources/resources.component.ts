import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scullyio-landing-resources',
  encapsulation: ViewEncapsulation.None,
  // styleUrls: ['./resources.component.css'],
  template: `
    <section class="resources">
      <a href="/docs/learn/introduction">
        <img src="/assets/img/icons/book-solid.svg" />
        <div class="text">
          <h3>Guides</h3>
          <p>Easy step-by-step guides to help you get started.</p>
        </div>
      </a>

      <a href="/docs/learn/create-a-blog/add-blog-support">
        <img src="/assets/img/icons/blog-solid.svg" />
        <div class="text">
          <h3>Create a blog</h3>
          <p>Create your own static Angular blog in 5 minutes.</p>
        </div>
      </a>
    </section>
  `,
})
export class LandingResourcesComponent {}
