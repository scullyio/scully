import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';

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
  constructor(
    private srs: ScullyRoutesService,
    private route: ActivatedRoute
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
