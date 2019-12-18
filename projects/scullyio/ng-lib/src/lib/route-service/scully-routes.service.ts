import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {of, ReplaySubject} from 'rxjs';
import {catchError, shareReplay, switchMap, map, tap} from 'rxjs/operators';

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
  available$ = this.refresh.pipe(
    switchMap(() => this.http.get<ScullyRoute[]>('/assets/scully-routes.json')),
    catchError(() => {
      console.warn(
        'Scully routes file not found, are you running the in static version of your site?'
      );
      return of([] as ScullyRoute[]);
    }),
    shareReplay({refCount: false, bufferSize: 1})
  );

  topLevel$ = this.available$.pipe(
    map(routes => routes.filter((r: ScullyRoute) => !r.route.slice(1).includes('/'))),
    shareReplay({refCount: false, bufferSize: 1})
  );

  constructor(private http: HttpClient) {
    /** kick off first cycle */
    this.reload();
  }

  getCurrent() {
    if (!location) {
      /** probably not in a browser, no current location available */
      return of([]);
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

  reload() {
    this.refresh.next();
  }
}
