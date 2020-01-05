import {HttpClient} from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {take} from 'rxjs/operators';
import {IdleMonitorService} from '../idleMonitor/idle-monitor.service';
import {ScullyRoutesService} from '../route-service/scully-routes.service';

/** this is needed, because otherwise the CLI borks while building */
const scullyBegin = '<!--scullyContent-begin-->';
const scullyEnd = '<!--scullyContent-end-->';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'scully-content',
  template: '<ng-content></ng-content>',
  styles: [
    `
      :host {
        display: none;
      }
      scully-content {
        display: none;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: true,
})
export class ScullyContentComponent implements OnInit, OnDestroy {
  @Input() type = 'MD';

  elm = this.elmRef.nativeElement as HTMLElement;
  mutationSubscription: Subscription;
  routes = this.srs.available$.pipe(take(1)).toPromise();

  constructor(
    private elmRef: ElementRef,
    private srs: ScullyRoutesService,
    private http: HttpClient,
    private router: Router,
    private idle: IdleMonitorService
  ) {}

  ngOnInit() {
    /** make sure the idle-check is loaded. */
    this.idle.init();
    if (this.elm) {
      this.handlePage();
    }
  }

  private async handlePage() {
    const template = document.createElement('template');
    // tslint:disable-next-line: no-string-literal
    if (window['scullyContent']) {
      /** upgrade existing static content */
      // tslint:disable-next-line: no-string-literal
      template.innerHTML = window['scullyContent'];
    } else {
      const curPage = location.href;
      await this.http
        .get(curPage, {responseType: 'text'})
        .toPromise()
        .then((html: string) => {
          try {
            template.innerHTML = html.split(scullyBegin)[1].split(scullyEnd)[0];
          } catch (e) {
            template.innerHTML = `<h2>Sorry, could not parse static page content</h2>
            <p>This might happen if you are not using the static generated pages.</p>`;
            console.error('problem during parsing static scully content', e);
          }
        })
        .catch(e => {
          template.innerHTML = '<h2>Sorry, could not load static page content</h2>';
          console.error('problem during loading static scully content', e);
        });
    }
    const parent = this.elm.parentElement || document.body;
    const begin = document.createComment('scullyContent-begin');
    const end = document.createComment('scullyContent-end');
    parent.insertBefore(begin, this.elm);
    parent.insertBefore(template.content, this.elm);
    parent.insertBefore(end, this.elm);
    document.querySelectorAll('[href]').forEach(this.upgradeToRoutelink.bind(this));
  }

  async upgradeToRoutelink(elm: HTMLElement) {
    const routes = await this.routes;
    const lnk = elm.getAttribute('href').toLowerCase();
    const route = routes.find(r => r.route.toLowerCase() === lnk);
    if (lnk && route) {
      elm.onclick = (ev: MouseEvent) => {
        const splitRoute = route.route.split(`/`);
        const curSplit = location.pathname.split('/');
        // loose last "part" of route
        curSplit.pop();

        ev.preventDefault();
        this.router.navigate(splitRoute).catch(e => console.error('routing error', e));
        /** check for the same route with different "data", and NOT a level higher (length) */
        if (curSplit.every((part, i) => splitRoute[i] === part) && splitRoute.length > curSplit.length) {
          setTimeout(() => {
            const p = this.elm.parentElement;
            let cur = findComments(p, 'scullyContent-begin')[0] as HTMLElement;
            let next;
            do {
              next = cur.nextSibling;
              p.removeChild(cur);
              cur = next;
            } while (next && next !== this.elm);
            // tslint:disable-next-line: no-string-literal
            window['scullyContent'] = undefined;
            this.handlePage();
          }, 20);
        }
      };
    }
  }

  ngOnDestroy() {
    if (this.mutationSubscription) {
      this.mutationSubscription.unsubscribe();
    }
  }
}

export function fromMutationObserver(
  elm: HTMLElement,
  config: MutationObserverInit
): Observable<MutationRecord> {
  return new Observable(obs => {
    const observer = new MutationObserver(mutations => mutations.forEach(mutation => obs.next(mutation)));
    observer.observe(elm, config);
    return () => observer.disconnect();
  });
}

function findComments(rootElem: HTMLElement, searchText?: string) {
  const comments = [];
  // Fourth argument, which is actually obsolete according to the DOM4 standard, seems required in IE 11
  const iterator = document.createNodeIterator(
    rootElem,
    NodeFilter.SHOW_COMMENT,
    {
      acceptNode: node => {
        // Logic to determine whether to accept, reject or skip node
        // In this case, only accept nodes that have content
        // other than whitespace
        if (searchText && node.nodeValue && !node.nodeValue.includes(searchText)) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    }
    // , false // IE-11 support requires this parameter.
  );
  let curNode;
  // tslint:disable-next-line: no-conditional-assignment
  while ((curNode = iterator.nextNode())) {
    comments.push(curNode);
  }
  return comments;
}
