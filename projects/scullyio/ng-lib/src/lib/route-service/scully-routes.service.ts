import {Injectable} from '@angular/core';
import {Observable, of, ReplaySubject} from 'rxjs';
import {catchError, map, shareReplay, switchMap, filter} from 'rxjs/operators';
import {fetchHttp} from '../utils/fetchHttp';

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
  allRoutes$: Observable<ScullyRoute[]> = this.refresh.pipe(
    switchMap(() => fetchHttp<ScullyRoute[]>('/assets/scully-routes.json')),
    catchError(() => {
      console.warn(
        'Scully routes file not found, are you running the Scully generated version of your site?'
      );
      return of([] as ScullyRoute[]);
    }),
    /** filter out all non-array results */
    filter(routes => Array.isArray(routes)),
    map(this.cleanDups),
    shareReplay({refCount: false, bufferSize: 1})
  );
  available$ = this.allRoutes$.pipe(
    map(list => list.filter(r => (r.hasOwnProperty('published') ? r.published !== false : true))),
    shareReplay({refCount: false, bufferSize: 1})
  );

  unPublished$ = this.allRoutes$.pipe(
    map(list => list.filter(r => (r.hasOwnProperty('published') ? r.published === false : false))),
    shareReplay({refCount: false, bufferSize: 1})
  );

  topLevel$: Observable<ScullyRoute[]> = this.available$.pipe(
    map(routes => routes.filter((r: ScullyRoute) => !r.route.slice(1).includes('/'))),
    shareReplay({refCount: false, bufferSize: 1})
  );

  constructor() {
    /** kick off first cycle */
    this.reload();
  }

  getCurrent(): Observable<ScullyRoute> {
    if (!location) {
      /** probably not in a browser, no current location available */
      return of();
    }
    const curLocation = decodeURI(location.pathname).trim();
    return this.available$.pipe(
      map(list =>
        list.find(
          r =>
            curLocation === r.route.trim() ||
            (r.slugs && Array.isArray(r.slugs) && r.slugs.find(slug => curLocation.endsWith(slug.trim())))
        )
      )
    );
  }

  private cleanDups(routes: ScullyRoute[]) {
    const m = new Map<string, ScullyRoute>();
    routes.forEach(r => m.set(r.sourceFile || r.route, r));
    return [...m.values()];
  }

  reload(): void {
    this.refresh.next();
  }
}
