import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { LangSelectService } from '../../services';
import { CurrentPageLanguageData } from '../../models';

@Component({
  selector: '.scullyio-lang-select',
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container *ngIf="currentPageLangData$ | async as langData">
      <div *ngFor="let langRoutes of langData.pageLangRoutes" class="tab">
        <button
          class="tablinks"
          [routerLink]="langRoutes.route"
          routerLinkActive="active"
          [class.unavailable]="!langData.langRoutes[langRoutes.lang]"
        >
          {{ langDefaults.labels[langRoutes.lang] }}
        </button>
      </div>
    </ng-container>
  `,
  styles: [
    `
      /* Style the tab */
      .tab {
        overflow: hidden;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
        border-radius: 8px 8px 0px 0px;
      }

      /* Style the buttons that are used to open the tab content */
      .tab button {
        background-color: inherit;
        color: rgba(0, 0, 0, 0.7);
        font-size: 12px;
        font-weight: 900;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
      }

      /* Change background color of buttons on hover */
      .tab button:hover {
        background-color: #ddd;
      }

      /* Create an active/current tablink class */
      .tab button.active {
        background-color: #ffffff;
        color: #000000;
        font-size: 13px;
      }
    `,
  ],
})
export class LangSelectComponent {
  langDefaults = this.langSelectService.langDefaults;
  currentPageLangData$: Observable<CurrentPageLanguageData> = this.langSelectService.currentPageLangData$;

  constructor(private langSelectService: LangSelectService) {}
}
