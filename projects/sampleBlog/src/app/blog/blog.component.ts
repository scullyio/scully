import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ScullyRoutesService, ScullyRoute} from '@scullyio/ng-lib';
import {map} from 'rxjs/operators';

declare var window: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements OnInit {
  blogs$ = this.srs.available$.pipe(
    map(routeList => routeList.filter((route: ScullyRoute) => route.route.startsWith(`/blog/`))),
    map(blogs => blogs.sort((a, b) => (a.date < b.date ? -1 : 1)))
  );
  ngOnInit() {
    // if (window && !window.PrismLoading) {
    //   window.PrismLoading = true;
    //   if (window.Prism) {
    //     /** already loaded nothing to do here.. */
    //     return;
    //   }
    //   /** load prism to do syntax highlighting */
    //   const lnk = document.createElement('link');
    //   lnk.href = 'https://cdn.jsdelivr.net/npm/prismjs@1.19.0/themes/prism-twilight.css';
    //   lnk.rel = 'stylesheet';
    //   document.head.appendChild(lnk);
    //   const prism = document.createElement('script');
    //   prism.src = 'https://cdn.jsdelivr.net/npm/prismjs@1.19.0/prism.min.js';
    //   document.head.appendChild(prism);
    //   const prismLoad = document.createElement('script');
    //   prismLoad.src = 'https://cdn.jsdelivr.net/npm/prismjs@1.19.0/prism.min.js';
    //   document.head.appendChild(prismLoad);
    // }
  }

  constructor(private srs: ScullyRoutesService) {}
}
