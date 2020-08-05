import { Component } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-holder',
  template: `
    <h3>Scully blog content</h3>
    <hr />

    <router-outlet></router-outlet>

    <hr />
    <h4>End of blog content</h4>

    <span *ngFor="let r of blogs$ | async">
      <a [routerLink]="r.route">{{ r.route }}</a>
      <br />
    </span>
  `,
})
export class BlogHolderComponent {
  blogs$ = this.srs.available$.pipe(
    map((routeList) => routeList.filter((route: ScullyRoute) => route.route.startsWith(`/blog/`))),
    map((blogs) => blogs.sort((a, b) => (a.date < b.date ? -1 : 1)))
  );

  constructor(private srs: ScullyRoutesService) {}
}
