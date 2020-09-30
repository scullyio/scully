import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EMPTY } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NavListService } from '../../../components/nav-list/nav-list.service';

@Component({
  selector: 'scullyio-docs-page',
  encapsulation: ViewEncapsulation.None,
  template: `
    <section class="docs-page-content">
      <scully-content></scully-content>
      <div class="docs-prev_next" *ngIf="currentPage$ | async as cur">
        <a class="prev" *ngIf="cur?.prev?.route" [href]="cur.prev.route">{{ cur.prev.title }}</a>
        <a class="next" *ngIf="cur?.next?.route" [href]="cur.next.route">{{ cur.next.title }}</a>
      </div>
      <!-- <pre><code>{{currentPage$|async|json}}</code></pre> -->
    </section>
    <footer class="scullyio-footer"></footer>
  `,
})
export class DocsPageComponent {
  currentPage$ = this.nav.currentDoc$.pipe(
    tap((cur) => {
      const title = cur._route?.title as string;
      if (title) {
        this.title.setTitle(title + ' - Scully');
      } else {
        this.title.setTitle('Scully Documentation');
      }
    }),
    map((cur) => ({ next: cur._next, prev: cur._prev })),
    /** note, this is for testing only, as in the docs site _no_ code will not be there anyway! */
    catchError((e) => {
      console.error(e);
      // window.location.assign('/404');
      return EMPTY;
    })
  );

  constructor(private nav: NavListService, private title: Title) {}
}
