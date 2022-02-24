import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { TransferStateService } from '@scullyio/ng-lib';
import { User } from '@sentry/node';
import { first, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
  constructor(private http: HttpClient, private tss: TransferStateService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.tss.useScullyTransferState('tssUsers', this.http.get<User>('http://localhost:8200/users/10')).pipe(first());
  }
}
