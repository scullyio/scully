import {Component, OnInit} from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogs$ = this.srs.available$.pipe(
    map(routeList => routeList.filter((route: ScullyRoute) => route.route.startsWith(`/blog/`)))
  );

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit() {}
}
