import {Injectable} from '@angular/core';
import {Observable, of, ReplaySubject} from 'rxjs';
import {catchError, map, shareReplay, switchMap} from 'rxjs/operators';
import {fetchHttp} from '../utils/fetchHttp';

export interface ScullyRoute {
  route: string;
  title?: string;
  slugs?: string[];
  [prop: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class ScullyRoutesService {
  private refresh = new ReplaySubject<void>(1);
  available$: Observable<ScullyRoute[]> = this.refresh.pipe(
    switchMap(() => fetchHttp<ScullyRoute[]>('/assets/scully-routes.json')),
    catchError(() => {
      console.warn('Scully routes file not found, are you running the in static version of your site?');
      return of([] as ScullyRoute[]);
    }),
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
    const curLocation = location.pathname;
    return this.available$.pipe(
      map(list =>
        list.find(
          r =>
            curLocation.includes(r.route) ||
            (r.slugs &&
              Array.isArray(r.slugs) &&
              r.slugs.find(slug => curLocation.includes(slug)) !== undefined)
        )
      )
    );
  }

  reload(): void {
    this.refresh.next();
  }
}
