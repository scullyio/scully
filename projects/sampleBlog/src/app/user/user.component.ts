import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {catchError, filter, pluck, switchMap, map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user$ = this.route.params.pipe(
    pluck('userId'),
    filter(Boolean),
    switchMap(id =>
      this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
        catchError(() =>
          of({
            id: 11,
            name: 'not found',
          } as User)
        )
      )
    ),
    shareReplay(1)
  );

  id$ = this.user$.pipe(
    // tslint:disable-next-line: no-string-literal
    map(user => user.id),
    shareReplay(1)
  );
  next$ = this.id$.pipe(map(id => Math.min(+id + 1, 10)));
  prev$ = this.id$.pipe(map(id => Math.max(1, +id - 1)));

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

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
