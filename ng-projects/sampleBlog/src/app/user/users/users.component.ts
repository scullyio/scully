import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {isScullyGenerated, TransferStateService} from '@scullyio/ng-lib';
import {of} from 'rxjs';
import {catchError, shareReplay, tap} from 'rxjs/operators';
import {User} from '../user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  apiUsers$ = this.http.get<User[]>(`http://localhost:8200/users`).pipe(
    catchError(() => of([] as User[])),
    shareReplay(1)
  );

  // This is an example of using TransferState
  users$ = isScullyGenerated()
    ? this.transferState.getState<User[]>('users')
    : this.apiUsers$.pipe(tap(user => this.transferState.setState('users', user)));

  constructor(private http: HttpClient, private transferState: TransferStateService) {}

  ngOnInit() {}
}
