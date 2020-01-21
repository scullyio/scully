import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements OnInit {
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

  constructor(private router: Router, private route: ActivatedRoute) {}
}
