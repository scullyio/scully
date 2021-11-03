import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { pluck, tap } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  pageId = this.route.snapshot.params.id;
  pageId$ = this.route.params.pipe(
    pluck('id'),
    tap(id => (this.pageId = id))
  );

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
