import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { LangSelectService } from '../../services';
import { CurrentPageLanguageData } from '../../models';

@Component({
  selector: '.scullyio-lang-select',
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container *ngIf="currentPageLangData$ | async as langData">
      <input type="checkbox" id="lang-select-checkbox" />
      <label for="lang-select-checkbox" id="lang-select-label" class="select">
        <span id="lang-select-text">{{ langData.pageLang }}</span>
      </label>

      <ul class="lang-select-options">
        <li *ngFor="let langRoutes of langData.pageLangRoutes">
          <a [routerLink]="langRoutes.route" routerLinkActive="active" [class.unavailable]="!langData.langRoutes[langRoutes.lang]">
            {{ langDefaults.labels[langRoutes.lang] }}
          </a>
        </li>
      </ul>
    </ng-container>
  `,
})
export class LangSelectComponent {
  langDefaults = this.langSelectService.langDefaults;
  currentPageLangData$: Observable<CurrentPageLanguageData> = this.langSelectService.currentPageLangData$;

  constructor(private langSelectService: LangSelectService) {}
}
