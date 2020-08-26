import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavListService } from './services/nav-list/nav-list.service';

@Component({
  selector: 'ul.testNav',
  encapsulation: ViewEncapsulation.None,
  template: `
    <li class="testNav" *ngFor="let link of navItem.inOrder || []">
      <a [routerLink]="link._route.route">{{ link._route.title || link._route.route }}</a>
      <ul *ngIf="checkRoute(link) && link.inOrder" class="testNav" [navItem]="link"></ul>
    </li>
    <style>
      ul {
        margin-left: 1rem;
      }
    </style>
  `,
})
export class NavItemComponent implements OnInit {
  @Input() navItem: any;
  showChild = false;
  constructor(private navService: NavListService) {}
  ngOnInit() {
    console.log(this.navItem);
  }

  checkRoute(route) {
    if (window && route?._route?.route) {
      return location.pathname.includes(route._route.route.replace('overview', ''));
    }
  }
}
