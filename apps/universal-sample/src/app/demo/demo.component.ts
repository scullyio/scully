import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-demo',
  template: ` <h1>{{ pageId$ | async }}</h1>
    <a [routerLink]="['..', ((pageId$ | async) || 10) - 1]">prev</a>
    &nbsp;
    <a [routerLink]="['..', +((pageId$ | async) || 10) + 1]">next</a>`,
  styles: [],
})
export class DemoComponent implements OnInit {
  pageId = this.route.snapshot.params.id;
  pageId$ = this.route.params.pipe(
    pluck('id'),
    map(id => +id)
    // tap(id => (this.pageId = id))
  );

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
