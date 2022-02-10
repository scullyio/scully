import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs$ = this.srs.available$.pipe(
    map(routeList => routeList.filter((route: ScullyRoute) => route.route.startsWith(`/blog/`))),
    map(blogs => blogs.sort((a, b) => (a.date < b.date ? -1 : 1)))
  );

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit() {}
}
