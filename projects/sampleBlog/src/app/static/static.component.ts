import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScullyRoutesService} from '@scullyio/ng-lib-v8';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css'],
})
export class StaticComponent implements OnInit {
  toplevelOnly = true;
  available$ = this.srs.available$;
  topLevel$ = this.srs.topLevel$;
  constructor(private srs: ScullyRoutesService, private route: ActivatedRoute) {}

  get routes() {
    return this.toplevelOnly ? this.topLevel$ : this.available$;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.toplevelOnly = params.topLevel !== 'all';
    });
  }
}
