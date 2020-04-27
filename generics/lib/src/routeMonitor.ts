import {interval, merge, of, Subject} from 'rxjs';
import {distinctUntilChanged, filter, map, repeat, switchMap, take, takeWhile, tap} from 'rxjs/operators';

interface Mc {
  prev: URL;
}
const hasChanged = new Subject<string>();
const mightChange = new Subject<Mc>();

if (window && history) {
  window.addEventListener('popstate', ev => hasChanged.next(location.href));

  /**
   *  monkeyPath ps
   * used to monitor route changes, this is a 'route-start'
   */
  const hps = history.pushState.bind(history);
  history.pushState = (data: any, tile: string, url: string) => {
    // console.log('push', url);
    mightChange.next({prev: new URL(location.href)});
    hps(data, tile, url);
  };

  const maxTime = 1000; // use 1 second for now
  const pollInterval = 5;
  const maxTakes = maxTime / pollInterval;

  /**
   * While the polling might seem overkill, it is needed
   * if a framework is doing things like authentication on routes, or data fetching
   * it might take longer before the route change is finalized.
   */
  mightChange
    .pipe(
      switchMap(mc =>
        /** start polling */
        interval(pollInterval).pipe(
          tap(() => console.log('interval')),
          /** take while its not changed */
          takeWhile(() => location.pathname === mc.prev.pathname),
          /** OR the timeout is reached */
          take(maxTakes),
          map(() => mc)
        )
      ),
      /** filter out non-url changing pushes */
      filter(({prev}) => location.pathname !== prev.pathname),
      /** take 1 change */
      take(1),
      /** and start over  */
      repeat(),
      /** map to the current URL */
      map(() => location.href)
    )
    .subscribe(hasChanged);
}

// tslint:disable-next-line: deprecation
export const route$ = merge(of(location.href), hasChanged).pipe(
  distinctUntilChanged(),
  map(u => new URL(u))
);
