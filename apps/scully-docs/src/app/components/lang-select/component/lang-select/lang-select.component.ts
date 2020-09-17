import { Component, ViewEncapsulation } from '@angular/core';
import { NavListService } from '../../../nav-list/nav-list.service';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { pluck, take } from 'rxjs/operators';

const langs = {
  es: {
    lang: 'Español',
    url: '/docs/learn/introduction_es',
  },
  en: {
    lang: 'English',
    url: '/docs/learn/overview',
  },
};

@Component({
  selector: '.scullyio-lang-select',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div *ngFor="let langRoutes of language$ | async" class="tab">
      <button
        class="tablinks"
        [routerLink]="langs[langRoutes].url"
        routerLinkActive="active"
        [class.active]="langRoutes === (current$ | async)"
      >
        {{ langs[langRoutes].lang }}
      </button>
    </div>
  `,
})
export class LangSelectComponent {
  langs = langs;
  language$ = this.navListService.languages$;
  current$ = this.scullyRouteService.getCurrent().pipe(take(1), pluck('lang'));

  constructor(private navListService: NavListService, private scullyRouteService: ScullyRoutesService) {}
}
