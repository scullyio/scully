import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css']
})
export class StaticComponent implements OnInit {
  toplevelOnly = true;
  unPublished = false;
  available$ = this.srs.available$;
  topLevel$ = this.srs.topLevel$;

  title$ = this.srs.getCurrent().pipe(
    // tap(r => console.log('current route', r)),
    map(r => r.title || ''),
    tap(t => this.title.setTitle(t))
  );
  constructor(
    private srs: ScullyRoutesService,
    private route: ActivatedRoute,
    private title: Title
  ) {}

  get routes() {
    return this.unPublished
      ? this.srs.unPublished$
      : this.toplevelOnly
      ? this.topLevel$
      : this.available$;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.toplevelOnly = params.topLevel !== 'all';
      this.unPublished = params.topLevel === 'unpublished';
    });
  }
}
