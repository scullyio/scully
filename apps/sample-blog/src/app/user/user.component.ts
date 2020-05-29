import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isScullyGenerated, TransferStateService } from '@scullyio/ng-lib';
import { Observable, of } from 'rxjs';
import {
  catchError,
  filter,
  pluck,
  switchMap,
  map,
  shareReplay,
  tap
} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId$: Observable<number> = this.route.params.pipe(
    pluck('userId'),
    filter(val => ![undefined, null].includes(val)),
    map(val => parseInt(val, 10)),
    shareReplay(1)
  );
  next$ = this.userId$.pipe(map(id => Math.min(+id + 1, 10)));
  prev$ = this.userId$.pipe(map(id => Math.max(1, +id - 1)));

  apiUser$ = this.userId$.pipe(
    switchMap(id =>
      this.http.get<User>(`http://localhost:8200/users/${id}`).pipe(
        catchError(() =>
          of({
            id: id,
            name: 'not found'
          } as User)
        )
      )
    ),
    shareReplay(1)
  );

  // This is an example of using TransferState
  user$ = isScullyGenerated()
    ? this.transferState
        .getState<User>('user')
        .pipe(tap(user => console.log('Incoming TSS user', user)))
    : this.apiUser$.pipe(
        tap(user => this.transferState.setState('user', user))
      );

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private transferState: TransferStateService
  ) {}

  ngOnInit() {}
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
