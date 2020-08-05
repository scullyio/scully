import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { NavListItem } from '../../models';

@Component({
  selector: 'li.scullyio-nav-child-list',
  encapsulation: ViewEncapsulation.None,
  template: `
    <a
      class="nav-child-list-link"
      *ngIf="link.route"
      [routerLink]="link.route"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }"
      [class.heading]="isHeading"
    >
      <span [class.parent]="link.children">{{ link.linkText }}</span>
    </a>

    <ng-container *ngIf="link.children">
      <!-- "checked" is strange. ngIf seems to be the only way to actually apply default checked state. -->
      <input type="checkbox" class="nav-link-toggle" [id]="link.toggleId" *ngIf="!isChecked" />
      <input type="checkbox" class="nav-link-toggle" [id]="link.toggleId" checked *ngIf="isChecked" />

      <label [for]="link.toggleId" [class.heading]="isHeading" [class.no-route]="!link.route">
        <div class="indicator"></div>
        <span *ngIf="!link.route" class="no-route-link" [class.heading]="isHeading" [class.parent]="link.children">
          {{ link.linkText }}
        </span>
      </label>

      <ul>
        <li
          class="scullyio-nav-child-list"
          *ngFor="let childLink of link.children"
          [link]="childLink"
          [leftOffsetExisting]="leftPadding"
        ></li>
      </ul>
    </ng-container>
  `,
})
export class ChildListComponent {
  leftDefault = 32;
  leftOffset = 12;

  /** Compiled offset padding of parent components */
  @Input() leftOffsetExisting?: number;

  /** NavListItem and any potential children */
  @Input() link: NavListItem;

  /** Currently only changes .list-item styles */
  @Input() isHeading?: boolean;

  /** Assigns template-consumable offset padding in px to variable */
  @HostBinding('style.--offset-left') get leftOffsetPx(): string {
    return `${this.leftPadding}px`;
  }

  constructor(public router: Router) {}

  /** Determine if each checkbox should be checked based on the current url and toggleId */
  get isChecked(): boolean {
    return !!this.router.url.includes(this.link.toggleId);
  }

  /** Returns cumulative offset to indent list item arbitrary steps */
  get leftPadding(): number {
    return this.leftOffsetExisting ? this.leftOffset + this.leftOffsetExisting : this.leftOffset + this.leftDefault;
  }
}
