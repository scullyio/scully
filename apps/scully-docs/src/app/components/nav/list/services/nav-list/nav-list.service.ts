import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { NavHierarchy, NavListItem } from '../../models';
import { NavUtilService } from '../nav-util';

@Injectable({ providedIn: 'root' })
export class NavListService {
  public docs$: Observable<NavListItem[]> = this.scully.available$.pipe(
    map((availablePosts: ScullyRoute[]) => {
      // console.log('availablePosts: ', availablePosts);  // TODO: possible scully bug: overwrites page with same name but different directories
      // add stripped, array version of routes
      const postsArray = this.util.simplifyRootRoutes(availablePosts);
      // convert post objects and route arrays into hierarchical object
      const navListHierarchy = this.createNavListHierarchy(postsArray);
      // convert navListHierarchy object into an array of objects with arrays in them
      const navList = this.createNavList(navListHierarchy);
      return navList;
    })
  );

  constructor(private scully: ScullyRoutesService, private util: NavUtilService) {}

  /**
   * Converts ScullyRoute[] array into NavHierarchy object.
   *
   * @param postsArray ScullyRoute[] with simplified route paths.
   */
  private createNavListHierarchy(postsArray: ScullyRoute[]): NavHierarchy {
    let navList: NavHierarchy = {};
    for (const post of postsArray) {
      // convert generated string to JSON object
      const navListObj = this.createNavListItem(post);
      // merge all objects together into one, maintaing original hierarchy
      navList = this.util.deepMergeObjects(navList, navListObj);
    }
    return navList;
  }

  /**
   * Converts NavHierarchy object into NavListItem[] array for docs$ Observable.
   *
   * @param navHierarchy NavHierarchy created by createNavListHierarchy().
   */
  private createNavList(navHierarchy: NavHierarchy): NavListItem[] {
    const navListItem: NavListItem[] = [];
    // identifier of last nav item in chain, `route` is unique to the last item.
    // there may be a better way to identify this, but it's currently a reliable identifier.
    if (!navHierarchy.linkText) {
      for (const item of Object.keys(navHierarchy)) {
        const navItem = this.defineNavItemProperties(item, navHierarchy);
        // if not explicitly excluded, add compiled items to returned array
        if (!navHierarchy[item].excludeSelf) {
          navListItem.push(navItem);
        }
      }
    }
    // sort by `navlist_position`, null values positioned last
    navListItem.sort((a, b) => this.util.sortNavItems(a, b));
    return navListItem;
  }

  /**
   * Creates a NavHierarchy by recursively assessing if a given route
   * represents an actual link, or just a parent directory heading.
   *
   * @param post ScullyRoute with simplified route paths.
   */
  private createNavListItem(post: ScullyRoute): NavHierarchy {
    // if not explicitly defined, current item name is last item of routeArrayB
    const currentItemName = post.navlist_linkText ? post.navlist_linkText : post.routeArray[post.routeArray.length - 1];
    // array needs to be reversed to reverse traverse correctly
    const routeArrayReverse = post.routeArray.reverse();

    // define recursive string handler so we can JSON.parse it within this function
    const createString = (postB: ScullyRoute, routeArray: string[]): string => {
      // only 'en' lang for now. current docs have selection, but doesn't seem to do anything
      // TODO: make lang selectable
      if (!postB.lang || postB.lang === 'en') {
        // index of where to slice routeArray when recursively calling createNavListItem() again
        const lastParentIndex = routeArray.length - 1;
        // returned string in shape of NavHierarchyItem
        const objString = !routeArray.length
          ? // current navListItem is a route / has a link
            `{
            "linkText": "${currentItemName}"
            ,"route": "${postB.route}"
            ${postB.navlist_position ? ',"position": ' + parseInt(postB.navlist_position, 0) : ''}
            ${postB.navlist_parentIndex ? ',"parentIndex": ' + postB.navlist_parentIndex : ''}
            ${postB.navlist_parentPosition ? ',"parentPosition": ' + postB.navlist_parentPosition : ''}
            ${postB.navlist_excludeSelf ? ',"excludeSelf": ' + postB.navlist_excludeSelf : ''}
            ${this.util.isNavListTextFormatType(post) ? ',"textFormats": ' + this.util.navListTextFormats(postB) : ''}
          }`
          : // current navListItem is a parent heading
            `{
            "${routeArray[lastParentIndex]}": ${createString(postB, routeArray.slice(0, lastParentIndex))}
          }`;
        return objString;

        // temporary JSON appeaser until language select is implemented
      } else {
        return '{}';
      }
    };

    // convert generated string to object
    const navListParsed: NavHierarchy = JSON.parse(createString(post, routeArrayReverse));
    return navListParsed;
  }

  /**
   * Creates NavListItem to be added to NavListItem[] array
   * returned by docs$ Observable.
   * Populates each item with individual template-consumable
   * parameters defined in each .md file.
   *
   * @param item Item name derived from NavHierarchy keys.
   * @param navHierarchy NavHierarchy itself returned from createNavListHierarchy()
   */
  private defineNavItemProperties(item: string, navHierarchy: NavHierarchy): NavListItem {
    const hierarchyItem = navHierarchy[item];
    let navItem: NavListItem;
    // ------------------------------
    // -- Link Text
    // use existing `linkText` if available, otherwise create string from item name / route
    const linkText = hierarchyItem.linkText ? hierarchyItem.linkText : item;
    // initialize simplest NavListItem structure based on current item
    navItem = { linkText: this.util.formatLinkText(linkText, hierarchyItem.textFormats) };
    // ------------------------------
    // -- Position
    // only include position if current object has `position` property
    navItem = hierarchyItem.position ? { position: hierarchyItem.position, ...navItem } : navItem;
    // ------------------------------
    // -- Routes
    // only include route if current object has `route` property
    navItem = hierarchyItem.route ? { route: hierarchyItem.route, ...navItem } : navItem;
    // ------------------------------
    // -- Parent Directory Parameters
    // current assessed item is not a page, but a directory,
    // known because directories don't have their own linkText
    if (!hierarchyItem.linkText) {
      for (const child of Object.keys(hierarchyItem)) {
        const childKeys = Object.keys(hierarchyItem[child]);
        // ------------------------------
        // -- Parent Index
        // child route is acting as the index route for this directory
        if (childKeys.includes('parentIndex')) {
          navItem = { route: hierarchyItem[child].route, ...navItem };
        }
        // ------------------------------
        // -- Position
        // child route determines position for this directory
        if (childKeys.includes('parentPosition')) {
          navItem = { position: hierarchyItem[child].parentPosition, ...navItem };
        }
      }
    }
    // ------------------------------
    // -- Children
    // only include extra properties if item has children
    if (Object.keys(navHierarchy).length) {
      const navList = this.createNavList(hierarchyItem);
      // generate id to compare against window.location.pathName to
      // determine if child nav items should be visible on page load
      const toggleId = navItem.route
        ? navItem.route.split('/').slice(0, -1).join('/')
        : navList[0].route.split('/').slice(0, -1).join('/');
      // add children and toggleId to navList
      navItem = navList.length
        ? {
            ...navItem,
            children: navList,
            toggleId,
          }
        : navItem;
    }
    return navItem;
  }
}
