import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { NavListService } from '../../services';
import { NavListItem } from '../../models';

@Component({
  selector: 'scullyio-nav-list',
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container *ngIf="docs$ | async as docs">
      <ul class="nav-list-container">
        <scullyio-nav-child-list *ngFor="let link of docs" [isHeading]="true" [link]="link"> </scullyio-nav-child-list>
      </ul>
    </ng-container>
  `,
})
export class NavListComponent {
  docs$: Observable<NavListItem[]> = this.navService.docs$;
  constructor(private navService: NavListService) {}
}
