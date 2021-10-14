import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, pluck, shareReplay, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-user',
  template: `
    <h2>user {{ userId$ | async }} works!</h2>
    <p *ngIf="apiUser$ | async as user">{{ user.name }}</p>
    <a [routerLink]="['..', ((userId$ | async) || 10) - 1]">prev</a>
    &nbsp;
    <a [routerLink]="['..', ((userId$ | async) || 10) + 1]">next</a>
  `,
  styles: [],
})
export class UserComponent implements OnInit {
  userId$: Observable<number> = this.route.params.pipe(
    pluck('id'),
    filter((val) => ![undefined, null].includes(val)),
    map((val) => parseInt(val, 10)),
    // tap(r => console.log(r)),
    shareReplay(1)
  );

  userList$ = this.http.get<any[]>(`http://localhost:8200/users/?delay=100`);

  apiUser$ = this.userId$.pipe(
    switchMap((id) =>
      this.sts.useScullyTransferState(`user-${id}`, this.userList$.pipe(map((list) => list.find((user) => user.id === id))))
    ),
    // tap(r => console.log(r)),
    shareReplay(1)
  );

  constructor(private route: ActivatedRoute, private http: HttpClient, private sts: TransferStateService) {}

  ngOnInit(): void {}
}
