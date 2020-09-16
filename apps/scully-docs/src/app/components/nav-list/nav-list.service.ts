import { DoCheck, Injectable } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export interface DocTree {
  _route: ScullyRoute;
  _next?: ScullyRoute;
  _prev?: ScullyRoute;
  inOrder: DocTree[];
  [path: string]: ScullyRoute | DocTree[] | unknown;
}

@Injectable({ providedIn: 'root' })
export class NavListService {
  /** return a tree structure for navigation */
  docTree$: Observable<DocTree> = forkJoin([this.scully.available$.pipe(take(1)), this.scully.getCurrent().pipe(take(1))]).pipe(
    map(([routes, currentPage]) => {
      /** only select currently activated language */
      routes = routes.filter((r) => r.lang === currentPage.lang).sort((a, b) => (a.route < b.route ? -1 : 1));

      const docTree = createTreeFromRoutes(routes);
      /** add an array with the children in the correct order on each tree level. */
      addOrdering(docTree);
      /** add next and prev to every route */
      addNextAndPrev(docTree);
      return docTree;
    })
  );

  /** return the currently document in view */
  currentDoc$: Observable<DocTree> = combineLatest([this.scully.getCurrent(), this.docTree$]).pipe(
    map(([route, docTree]) =>
      flattenTree(docTree).find((d) => {
        return d._route?.route === route.route;
      })
    )
  );

  constructor(private scully: ScullyRoutesService) {}
}

function createTreeFromRoutes(routes: ScullyRoute[]) {
  const rawTree = {} as DocTree;
  // go over all routes
  for (const route of routes) {
    const path = route.route.split('/');
    let last = rawTree;
    /**
     * This loop goes from `/one/two/tree to {one:{two:{tree:_route}}}
     * as every top-level has an 'overview.md' we end up with a full tree
     */
    for (const folderNamePart of path) {
      // don't add a 'level' for overview
      if (folderNamePart !== 'overview') {
        last[folderNamePart] = last[folderNamePart] || {};
        last = last[folderNamePart] as DocTree;
      }
    }
    last['_route'] = route;
  }
  /** get rid of the levels `/` and `docs/` and return */
  return rawTree['']['docs'] as DocTree;
}

function addNextAndPrev(docTree: DocTree) {
  const flat = flattenTree(docTree) as DocTree[];
  for (let i = 0; i < flat.length; i += 1) {
    if (i + 1 < flat.length) {
      flat[i]._next = flat[i + 1]._route;
    }
    if (i > 0) {
      flat[i]._prev = flat[i - 1]._route;
    }
  }
}

function addOrdering(docTree: DocTree) {
  docTree.inOrder = Object.entries(docTree)
    /** get rid of 'empty' routes, and skip the _own  route_ */
    .filter(([name, route]: [string, DocTree]) => name !== '_route' && route._route)
    /** only use the docTree from heer */
    .map(([name, route]) => (route as unknown) as DocTree)
    /** sort on position && title (inside current level only!) */
    .sort((a: DocTree, b: DocTree) => {
      // console.log(a?._route?.position.toString().padStart(5, '0'),b?._route?.position.toString().padStart(5, '0'))
      const aPos = (+a._route?.position || 99999).toString().padStart(5, '0') + a.title;
      const bPos = (+b._route?.position || 99999).toString().padStart(5, '0') + b.title;
      return aPos < bPos ? -1 : 1;
    });
  /* recusivly go over all children */
  docTree.inOrder.forEach(addOrdering);
  // console.table(docTree.inOrder.map(r => r._route).map(({position,title}) => ({position,title})))
}

/** helper to quickly flatten out a docs-tree to make it easier to find /modify stuff */
function flattenTree(docTree: DocTree, list = []) {
  list.push(docTree);
  docTree.inOrder.forEach((row) => {
    flattenTree(row, list);
  });
  return list;
}
