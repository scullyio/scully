import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScullyLibModule, TransferStateService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';
import { User } from '../user/user.component';

@Component({
  template: `
    <h1>No script page</h1>
    <ol>
      <li *ngFor="let user of users$ | async">{{ user.name }}</li>
    </ol>
  `,
})
class NoScriptComponent {
  users$ = this.tss.useScullyTransferState(
    'noScriptUser',
    this.http.get<User[]>(`/api/users`).pipe(map((users) => users.map((user) => ({ name: user.name }))))
  );
  constructor(private tss: TransferStateService, private http: HttpClient) {}
}

const routes: Routes = [
  {
    path: '',
    component: NoScriptComponent,
  },
];

@NgModule({
  imports: [CommonModule, ScullyLibModule, RouterModule.forChild(routes)],
  declarations: [NoScriptComponent],
})
export class NoScriptModule {}
