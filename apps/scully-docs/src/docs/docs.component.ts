import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { filter, first, map } from 'rxjs/operators';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  docs$ = this.srs.available$.pipe(
    map(routes => routes.filter(r => r.route.startsWith('/docs/'))),
    map(routes =>
      routes.map(r => ((r.title = r.title || properify(r.route)), r))
    ),
    map(routes => sortRoutes(routes))
  );

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit(): void {}
}

function sortRoutes(routes: ScullyRoute[]): ScullyRoute[] {
  return routes
    .map(r => {
      r.order = r.order || 99999;
      return r;
    })
    .sort((x, y) => (x.order < y.order ? -1 : 1));
}

function properify(s: string): string {
  return s.split('/docs/').join('');
}
