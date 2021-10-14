import { HttpClient, HttpHandler, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { workerMessages$ } from '@scullyio/scully';
import { createHash } from 'crypto';
import { Observable, of, throwError } from 'rxjs';
import { catchError, filter, map, mergeMap, take, tap } from 'rxjs';
const testCache = new Map<string, any>();

interface HttpRequestOptions {
  body?: any;
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: Map<any, any>;
  observe?: 'body' | 'events' | 'response';
  params?:
    | HttpParams
    | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
}

@Injectable()
export class ScullyHttpClient extends HttpClient {
  constructor(handler: HttpHandler, private zone: NgZone) {
    super(handler);
  }

  // @ts-ignore:
  request(first: string | HttpRequest<any>, url?: string, options: HttpRequestOptions = {}) {
    let method: string = first as string;
    const simple = typeof first === 'string';
    /** extract the values we need to create an caching Id */
    if (first instanceof HttpRequest) {
      url = first.url;
      options.headers = first.headers;
      method = first.method;
    }
    if (!(options.headers instanceof HttpHeaders)) {
      options.headers = new HttpHeaders(options.headers);
    }
    const headerString =
      options.headers.keys().reduce((s, key) => {
        const val = options.headers!.getAll ?? key;
        s += key;
        s += ':';
        /** its ok to add undefined or null in the id string */
        s += Array.isArray(val) ? val.join(', ') : val;
        return s;
      }, '') || 'No headers';
    const id = createKey(url!, headerString, method.toLowerCase());
    // @ts-ignore
    const resp: Observable<any> = simple ? super.request(first, url, options) : super.request(first);

    return cacheHas(id, this.zone).pipe(
      take(1),
      mergeMap((result) =>
        result !== false ? of(result) : resp.pipe(tap((response) => process.send!(['cacheSet', { id, response }])))
      ),
      // tap((p) => console.log('progr', p)),
      catchError((e) => {
        console.log(e);
        return throwError(e);
      })
    );
  }
}

function createKey(...args: string[]) {
  const hash = createHash('md5');
  args.forEach((part) => hash.update(part));
  return hash.digest('hex');
}

declare var Zone: any;

function cacheHas(id: string, zone: any) {
  return new Observable((obs) => {
    const tsk = Zone.current.scheduleMacroTask(
      'Scully.XMLHttpRequest',
      (r: any) => {
        obs.next(r);
      },
      { id },
      (task: any) => {
        task.data.sub = workerMessages$
          .pipe(
            filter(({ type }) => type === 'cacheResult'),
            map(({ msg }) => msg),
            take(1)
          )
          .subscribe({
            next(r) {
              task.invoke(r);
            },
            complete() {
              obs.complete();
            },
            error(e) {
              obs.error(e);
            },
          });
        process.send!(['cacheHas', task.data.id]);
      },
      (task: any) => task.data.sub.unsubscribe()
    );
    return () => {
      if (tsk && tsk.data && tsk.data.sub) {
        tsk.data.sub.unsubscribe()
      }
    }
  });
}
