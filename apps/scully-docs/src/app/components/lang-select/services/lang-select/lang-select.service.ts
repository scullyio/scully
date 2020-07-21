import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { AllLanguages, CurrentPageLanguageData, LanguageDefaults, PageLanguageData } from '../../models';
import { NavUtilService } from '../../../nav-list/services/nav-util';

@Injectable({ providedIn: 'root' })
export class LangSelectService {
  public langDefaults: LanguageDefaults = {
    labels: {
      en: 'English',
      es: 'Español',
    },
    routes: {
      en: '/docs/learn/introduction',
      es: '/docs/learn/introduction_es',
    },
  };

  /**
   * Find counterpart languages for each route
   */
  private pageLangs$: Observable<PageLanguageData> = this.scully.available$.pipe(
    map((availableRoutes: ScullyRoute[]) => {
      // add stripped, array version of routes
      const postsArray = this.util.simplifyRootRoutes(availableRoutes);
      // find counterpart languages for each route
      const pageLanguages = this.createNavListLanguages(postsArray);
      return pageLanguages;
    })
  );

  /**
   * All available language abbreviations, derived from available page languages.
   */
  private allLanguages$: Observable<AllLanguages> = this.scully.available$.pipe(
    map((availablePosts: ScullyRoute[]) => {
      // make collection of available language abbreviations from page list
      const availableLangs = {};
      for (const post of availablePosts) {
        if (post.lang && !availableLangs[post.lang]) {
          availableLangs[post.lang] = true;
        }
      }
      const alllanguages = Object.keys(availableLangs).map((key) => key);
      return alllanguages;
    })
  );

  /**
   * Compiled current data to use in lang-select template.
   */
  public currentPageLangData$: Observable<CurrentPageLanguageData> = forkJoin(
    this.pageLangs$.pipe(take(1)),
    this.allLanguages$.pipe(take(1)),
    this.scully.getCurrent().pipe(take(1))
  ).pipe(
    map(([pageLangs, langs, currentPage]) => {
      const routeLangs: CurrentPageLanguageData = {
        allLangs: [],
        langRoutes: {},
        pageLang: 'en',
        pageLangRoutes: null,
      };
      // populate routeLangs with relevant data
      const currentRouteLangData = pageLangs[currentPage.route];
      for (const lang of langs) {
        if (currentRouteLangData[lang]) {
          routeLangs.langRoutes = pageLangs[currentPage.route];
        }
      }
      routeLangs.pageLang = currentPage.lang;
      routeLangs.allLangs = langs;
      // determine which route to use for select option: given or a default
      routeLangs.pageLangRoutes = langs.map((lang) => ({
        lang,
        route: this.getLangRoute(lang, routeLangs),
      }));
      return routeLangs;
    })
  );

  constructor(private scully: ScullyRoutesService, private util: NavUtilService) {}

  /**
   * Finds all the language "versions" of a page and constructs a list
   * indicating alternative language routes for each specific page.
   *
   * @param scullyRoutes Array of ScullyRoutes to assess.
   */
  private createNavListLanguages(scullyRoutes: ScullyRoute[]): PageLanguageData {
    const langs = {};
    for (const page of scullyRoutes) {
      const itemLangs = {};
      const affectedRoutes = [];
      // check if page has any counterparts of another language and
      // collect alternate language page routes to include in all affected pages
      for (const pageCompareItem of scullyRoutes) {
        if (pageCompareItem?.route !== page.route && pageCompareItem?.route?.includes(page.route)) {
          // add language routes to root route identifier object's languages
          itemLangs[page.lang] = page.route;
          itemLangs[pageCompareItem.lang] = pageCompareItem.route;
          // add routes to list of affected items, to later include all languages with
          affectedRoutes.push(page.route, pageCompareItem.route);
        }
      }
      // flatten array and store language route group to apply to all routes later
      const affectedRoutesUnique = [...new Set(affectedRoutes)];
      for (const route of affectedRoutesUnique) {
        langs[route] = itemLangs;
      }
    }
    // create link for each link regardless of if it has another lanugage counterpart
    const pageAvailableLangs = {};
    for (const itemPage of scullyRoutes) {
      // if language route group is empty, use only page route for availableLangs
      // otherwise use collected sibling/counterpart lang routes
      const availableLangs = langs[itemPage.route] ? langs[itemPage.route] : { [itemPage.lang]: itemPage.route };
      pageAvailableLangs[itemPage.route] = availableLangs;
    }
    return pageAvailableLangs;
  }

  /**
   * Determines which route to use for a given language link.
   *
   * @param lang Available language abbreviation.
   * @param langData Compiled data to determine lang-select state
   */
  getLangRoute(lang: string, langData: CurrentPageLanguageData): string {
    switch (true) {
      // if page exists in given lang, use that oage's route
      case !!langData.langRoutes[lang]:
        return langData.langRoutes[lang];
      // if page doesn't exist in given lang, but has a default route, use default route
      case !!this.langDefaults.routes[lang]:
        return this.langDefaults.routes[lang];
      // if page langData doesn't fit above criteria, default to default English ('en') route
      default:
        return this.langDefaults.routes['en'];
    }
  }
}
