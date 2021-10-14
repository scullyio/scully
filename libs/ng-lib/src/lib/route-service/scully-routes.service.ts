import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  catchError, filter, map, merge, Observable, of, ReplaySubject, shareReplay,
  switchMap
} from 'rxjs';
import { basePathOnly } from '../utils/basePathOnly';
import { fetchHttp } from '../utils/fetchHttp';

export interface ScullyRoute {
  route: string;
  title?: string;
  slugs?: string[];
  published?: boolean;
  slug?: string;
  sourceFile?: string;
  lang?: string;
  [prop: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class ScullyRoutesService {
  private refresh = new ReplaySubject<void>(1);
  /**
   * An observable with all routes, published and unpublished alike
   */
  allRoutes$: Observable<ScullyRoute[]> = this.refresh.pipe(
    switchMap(() => fetchHttp<ScullyRoute[]>('assets/scully-routes.json')),
    catchError(() => {
      console.warn(
        'Scully routes file not found, are you running the Scully generated version of your site?'
      );
      return of([] as ScullyRoute[]);
    }),
    /** filter out all non-array results */
    filter((routes) => Array.isArray(routes)),
    map(this.cleanDups),
    shareReplay({ refCount: false, bufferSize: 1 })
  );
  /**
   * An observable with available routes (all published routes)
   */
  available$ = this.allRoutes$.pipe(
    map((list) =>
      list.filter((r) =>
        r.hasOwnProperty('published') ? r.published !== false : true
      )
    ),
    shareReplay({ refCount: false, bufferSize: 1 })
  );

  /**
   * an observable with all unpublished routes
   */
  unPublished$ = this.allRoutes$.pipe(
    map((list) =>
      list.filter((r) =>
        r.hasOwnProperty('published') ? r.published === false : false
      )
    ),
    shareReplay({ refCount: false, bufferSize: 1 })
  );

  /**
   * An observable with the top-level off all published routes.
   * (in an urls it would be `http://www.sample.org/__thisPart__/subroutes`)
   */
  topLevel$: Observable<ScullyRoute[]> = this.available$.pipe(
    map((routes) =>
      routes.filter((r: ScullyRoute) => !r.route.slice(1).includes('/'))
    ),
    shareReplay({ refCount: false, bufferSize: 1 })
  );

  constructor(private router: Router) {
    /** kick off first cycle */
    this.reload();
  }

  /**
   * returns an observable that returns the route information for the
   * route currently selected. subscribes to route-events to update when needed
   */
  getCurrent(): Observable<ScullyRoute> {
    if (!location) {
      /** probably not in a browser, no current location available */
      return of();
    }
    /** fire off at start, and when navigation is done. */
    return merge(of(new NavigationEnd(0, '', '')), this.router.events).pipe(
      filter((e) => e instanceof NavigationEnd),
      switchMap(() => this.available$),
      map((list) => {
        const curLocation = basePathOnly(encodeURI(location.pathname).trim());
        return list.find(
          (r) =>
            curLocation === basePathOnly(r.route.trim()) ||
            (r.slugs &&
              Array.isArray(r.slugs) &&
              r.slugs.find((slug) =>
                curLocation.endsWith(basePathOnly(slug.trim()))
              ))
        );
      })
    );
  }

  /**
   * internal, as routes can have multiple slugs, and so occur multiple times
   * this util function collapses all slugs back into 1 route.
   */
  private cleanDups(routes: ScullyRoute[]) {
    const m = new Map<string, ScullyRoute>();
    /** check for duplicates by comparing all, include route in comparison if its the only thing, or the only thing with only the tile  */
    routes.forEach((r) =>
      m.set(JSON.stringify({ ...r, route: hasOtherprops(r) ? '' : r.route }), r)
    );
    return [...m.values()];
  }

  /** an utility that will force a reload of the `scully-routes.json` file */
  reload(): void {
    this.refresh.next();
  }
}

function hasOtherprops(obj) {
  const keys = Object.keys(obj);
  if (keys.length === 1 && keys.includes('route')) {
    return false;
  }
  if (keys.length === 2 && keys.includes('route') && keys.includes('title')) {
    return false;
  }
  return true;
}
