import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavListService } from '../../services';
import { NavListItem } from '../../models';

@Component({
  selector: 'scullyio-nav-list',
  styles: [
    `
      ul {
        margin-bottom: 22px;
        overflow: hidden;
      }
    `,
  ],
  template: `
    <ng-container *ngIf="docs$ | async as docs">
      <ul>
        <scullyio-nav-child-list *ngFor="let link of docs" [isHeading]="true" [link]="link"> </scullyio-nav-child-list>
      </ul>
    </ng-container>
  `,
})
export class NavListComponent {
  docs$: Observable<NavListItem[]> = this.navService.docs$;
  constructor(private navService: NavListService) {}
}
