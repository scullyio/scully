import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { isScullyGenerated } from '@scullyio/ng-lib';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-slow',
  template: `
    <p>slow works!</p>
    <h1 *ngIf="!isGenerated">Scully Not Generated</h1>
    <h1 *ngIf="isGenerated">Scully Generated</h1>
  `,
  styles: [``]
})
export class SlowComponent {
  isGenerated = isScullyGenerated();

  delay$ = this.http.get('http://localhost:8200/slow/2000');

  constructor(private http: HttpClient) {
    this.delay$.pipe(first()).subscribe();
  }
}
