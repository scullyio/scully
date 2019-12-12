import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService} from '@scullyio/ng-lib';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css'],
})
export class StaticComponent implements OnInit {
  toplevelOnly = false;
  available$ = this.srs.available$;
  topLevel$ = this.srs.topLevel$;
  constructor(private srs: ScullyRoutesService) {}

  get routes() {
    return this.toplevelOnly ? this.topLevel$ : this.available$;
  }

  ngOnInit() {}
}
