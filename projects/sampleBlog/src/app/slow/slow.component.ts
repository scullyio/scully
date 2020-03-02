import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {isScullyGenerated, isScullyRunning} from '@scullyio/ng-lib';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-slow',
  template: `
    <p>slow works!</p>
    <h1 *ngIf="isNotGenerated">Not Scully Generated</h1>
    <h1 *ngIf="isGenerated">Scully Generated</h1>
  `,
  styles: [``],
})
export class SlowComponent {
  isNotGenerated = isScullyRunning() || (!isScullyGenerated() && !isScullyRunning());
  isGenerated = isScullyGenerated();

  delay$ = this.http.get('http://localhost:8200/slow/4000');

  constructor(private http: HttpClient) {
    this.delay$.pipe(first()).subscribe();
  }
}
