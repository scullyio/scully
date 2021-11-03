import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, of, throwError } from 'rxjs';
import { catchError, map, pluck, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-demo',
  template: ` <h1>{{ pageId$ | async }}</h1>
    <div>{{ userName$ | async }}</div>
    <a [routerLink]="['..', ((pageId$ | async) || 10) - 1]">prev</a>
    &nbsp;
    <a [routerLink]="['..', +((pageId$ | async) || 10) + 1]">next</a>`,
  styles: [],
})
export class DemoComponent implements OnInit {
  pageId = this.route.snapshot.params.id;
  pageId$ = this.route.params.pipe(
    pluck('id'),
    map((id) => +id)
    // tap(id => (this.pageId = id))
  );

  userList$ = this.http.get<any[]>(`http://localhost:8200/users/?delay=100`);
  userName$ = combineLatest([this.pageId$, this.userList$]).pipe(
    map(([id, users]) => {
      const _id = +id % users.length
      return users[_id]['name'];
    }),
    // tap((r) => console.log('username', r))
  );

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {}
}
