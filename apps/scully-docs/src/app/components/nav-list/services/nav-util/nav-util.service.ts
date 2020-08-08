import { Injectable } from '@angular/core';
import { ScullyRoute } from '@scullyio/ng-lib';
import { NavHierarchy, NavListItem, NavTextFormats } from '../../models';

@Injectable({ providedIn: 'root' })
export class NavUtilService {
  /**
   * Remove redundant route paths from scully.available$
   * and return simplified, array version of each path.
   *
   * @param availablePosts ScullyRoute[] directly from scully.available$
   */
  public simplifyRootRoutes(availablePosts: ScullyRoute[]): ScullyRoute[] {
    return availablePosts
      .map((post) => {
        // remove default path /docs/ to accommodate scully's need
        // for a dedicated route to display rendered md files.
        const routeArray = post.route.split('/');
        routeArray.splice(0, 2);
        // combine with existing post data
        if (routeArray.length > 0) {
          return { ...post, routeArray };
        }
        // only include path after /docs/
      })
      .filter((post) => !!post);
  }

  /**
   * Filters available routes by language (of current page).
   *
   * @param postsArray Array of ScullyRoutes.
   * @param lang Language abbreviation to filter by. eg 'en'|'es'
   */
  public filterPostsByLang(postsArray: ScullyRoute[], lang: string): ScullyRoute[] {
    // if page has no lang (eg. '/'), default to 'en'
    const postLang = lang ? lang : 'en';
    return postsArray.filter((post) => post.lang === postLang);
  }

  /**
   * In .md file header, define custom string formatting for
   * linkText with `navlist_textFormat`
   *
   * If no additional textFormat is defined, by default each linkText
   * will be capitalized.
   *
   * @param linkText String to be formatted.
   * @param textFormat Type of formatting to apply to linkText.
   */
  public formatLinkText(linkText: string, textFormat: NavTextFormats): string {
    if (textFormat) {
      switch (true) {
        // ------------------------------
        // none
        case textFormat.none:
          return linkText;
        // ------------------------------
        // capitalize
        case textFormat.capitalize:
          return linkText
            .split('-')
            .map((text) => this.smartToUppercase(text))
            .join(' ');
        // ------------------------------
        // capitalize first letter
        case textFormat.capitalizeFirstLetter:
          return linkText.charAt(0).toUpperCase() + linkText.split('-').join(' ').slice(1);
      }
    }
    // default capitalize first letter
    return linkText.charAt(0).toUpperCase() + linkText.split('-').join(' ').slice(1);
  }

  /**
   * When capitalizing every word of a link's text string,
   * some words should never be capitalized.
   * This function makes sure these words stay lowercase.
   *
   * @param text String to assess and alter.
   */
  private smartToUppercase(text: string): string {
    const alwaysLowercase = ['a', 'of', 'the'];
    const formattedWord = alwaysLowercase.includes(text) ? text : text.charAt(0).toUpperCase() + text.slice(1);
    return formattedWord;
  }

  /**
   * Determines if link text should have custom formatting.
   *
   * @param post ScullyRoute with simplified route paths.
   */
  public isNavListTextFormatType(post: ScullyRoute): boolean {
    for (const key of Object.keys(post)) {
      if (key.includes('navlist_textFormat')) {
        return true;
      }
    }
    return false;
  }

  /**
   * Converts `navlist_textFormat`s into a stringified NavTextFormats
   * as a part of a single NavHierarchyItem.
   *
   * @param post ScullyRoute with simplified route paths.
   */
  public navListTextFormats(post: ScullyRoute): string {
    const textFormats = {};
    for (const key of Object.keys(post)) {
      if (key.includes('navlist_textFormat')) {
        const formatNameArray = key.split('_');
        const formatName = formatNameArray[formatNameArray.length - 1];
        textFormats[formatName] = true;
      }
    }
    return JSON.stringify(textFormats);
  }

  /**
   * Create an updated NavHierarchy object by deep merging
   * two NavHierarchy objects.
   *
   * @param obj1 NavHierarchy object to be merged.
   * @param obj2 NavHierarchy object to be merged.
   */
  public deepMergeObjects(obj1: NavHierarchy, obj2: NavHierarchy): NavHierarchy {
    for (const key of Object.keys(obj2)) {
      if (!obj1.hasOwnProperty(key) || typeof obj2[key] !== 'object') {
        obj1[key] = obj2[key];
      } else {
        this.deepMergeObjects(obj1[key], obj2[key]);
      }
    }
    return obj1;
  }

  /**
   * Sorts each NavItem by `navlist_position`.
   * null values positioned last.
   *
   * @param a NavListItem item to compare.
   * @param b NavListItem item to compare.
   */
  public sortNavItems(a: NavListItem, b: NavListItem): number {
    let va: number | string = a.position;
    let vb: number | string = b.position;
    if (a.position === null) {
      va = '';
    }
    if (b.position === null) {
      vb = '';
    }
    if ('' + va < '' + vb) {
      return -1;
    }
    if ('' + va > '' + vb) {
      return 1;
    }
    return 0;
  }
}
