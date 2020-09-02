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
  docTree$: Observable<DocTree> = forkJoin([this.scully.available$.pipe(take(1)), this.scully.getCurrent().pipe(take(1))]).pipe(
    map(([routes, currentPage]) => {
      routes = routes.filter((r) => r.lang === currentPage.lang).sort((a, b) => (a.route < b.route ? -1 : 1));
      const rawTree = {} as DocTree;
      for (const r of routes) {
        r.title = r.title || r.sourceFile;
        const path = r.route.split('/');
        let last = rawTree;
        for (const part of path) {
          if (part !== 'overview') {
            /** overview will be used on the "parent", otherwise, create a "child" */
            last[part] = last[part] || {};
            last = last[part] as DocTree;
          }
        }
        last['_route'] = r;
      }
      const docTree = rawTree['']['docs'] as DocTree;
      /** add an array with the children in the correct order on each tree level. */
      addOrdering(docTree);
      /** add next and prev to every route */
      const flat = flattenTree(docTree) as DocTree[];
      for (let i = 0; i < flat.length; i += 1) {
        if (i + 1 < flat.length) {
          flat[i]._next = flat[i + 1]._route;
        }
        if (i > 0) {
          flat[i]._prev = flat[i - 1]._route;
        }
      }
      return docTree;
    })
  );

  currentDoc$: Observable<DocTree> = combineLatest([this.scully.getCurrent(), this.docTree$]).pipe(
    map(([route, docTree]) =>
      flattenTree(docTree).find((d) => {
        return d._route?.route === route.route;
      })
    )
  );

  constructor(private scully: ScullyRoutesService) {}
}

function addOrdering(docTree: DocTree) {
  docTree.inOrder = Object.entries(docTree)
    .filter(([name, route]: [string, DocTree]) => name !== '_route' && route._route)
    .map(([name, route]) => (route as unknown) as DocTree)
    .sort((a: DocTree, b: DocTree) => {
      const aPos = (+a._route?.position || 99999).toString().padStart(5, '0') + a.title;
      const bPos = (+b._route?.position || 99999).toString().padStart(5, '0') + b.title;
      return aPos < bPos ? -1 : 1;
    });
  docTree.inOrder.forEach(addOrdering);
}

function flattenTree(docTree: DocTree, list = []) {
  list.push(docTree);
  docTree.inOrder.forEach((row) => {
    flattenTree(row, list);
  });
  return list;
}
