import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  isDevMode,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
  Inject,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take, tap } from 'rxjs/operators';
import { ScullyRoutesService } from '../route-service/scully-routes.service';
import { basePathOnly } from '../utils/basePathOnly';
import { fetchHttp } from '../utils/fetchHttp';
import { findComments } from '../utils/findComments';
import { promises } from 'fs';
import { SCULLY_LIB_CONFIG, ScullyLibConfig, ScullyDefaultSettings } from '../config/scully-config';
import { IncomingMessage } from 'http';

interface ScullyContent {
  html: string;
  cssId: string;
}
declare global {
  interface Window {
    scullyContent: ScullyContent;
  }
}
/** this is needed, because otherwise the CLI borks while building */
const scullyBegin = '<!--scullyContent-begin-->';
const scullyEnd = '<!--scullyContent-end-->';

/** use the module's closure to keep a system-wide check for the last handled URL. */
let lastHandled: String;

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
export class ScullyContentComponent implements OnDestroy, OnInit {
  baseUrl = this.conf.useTransferState || ScullyDefaultSettings.useTransferState;
  elm = this.elmRef.nativeElement as HTMLElement;
  /** pull in all  available routes into an eager promise */
  routes = this.srs.allRoutes$.pipe(take(1)).toPromise();
  /** monitor the router, so we can update while navigating in the same 'page' see #311 */
  routeUpdates$ = this.router.events.pipe(
    filter((ev) => ev instanceof NavigationEnd),
    /** don't replace if we are already there */
    filter((ev: NavigationEnd) => lastHandled && !lastHandled.endsWith(ev.urlAfterRedirects)),
    tap((r) => this.replaceContent())
  );

  routeSub = this.routeUpdates$.subscribe();

  constructor(
    private elmRef: ElementRef,
    private srs: ScullyRoutesService,
    private router: Router,
    @Inject(SCULLY_LIB_CONFIG) private conf: ScullyLibConfig
  ) {
    /** do this from constructor, so it runs ASAP */
  }

  ngOnInit(): void {
    if (this.elm) {
      /** this will only fire in a browser environment */
      this.handlePage();
    }
  }

  /**
   * Loads the static content from scully into the view
   * Will fetch the content from sibling links with xmlHTTPrequest
   */
  private async handlePage() {
    const curPage = basePathOnly(location.href);
    if (lastHandled === curPage) {
      /**
       * Due to the fix we needed for #311
       * it might happen that this routine is called
       * twice for the same page.
       * this code will make sure the second one is ignored.
       */
      return;
    }
    lastHandled = curPage;
    const template = document.createElement('template');
    const currentCssId = this.getCSSId(this.elm);
    if (window.scullyContent) {
      /** upgrade existing static content */
      const htmlString = window.scullyContent.html;
      if (currentCssId !== window.scullyContent.cssId) {
        /** replace the angular cssId */
        template.innerHTML = htmlString.split(window.scullyContent.cssId).join(currentCssId);
      } else {
        template.innerHTML = htmlString;
      }
    } else {
      /**
       *   NOTE
       * when updateting the texts for the errors, make sure you leave the
       *  `id="___scully-parsing-error___"`
       * in there. That way users can detect rendering errors in their CI
       * on a reliable way.
       */
      await fetchHttp(curPage + '/index.html', 'text')
        .catch((e) => {
          if (isDevMode()) {
            /** in devmode (usually in `ng serve`) check the scully server for the content too */
            const uri = new URL(location.href);
            const url = `${this.conf.baseURIForScullyContent}/${basePathOnly(uri.pathname)}/index.html`;
            return fetchHttp(url, 'text');
          } else {
            return Promise.reject(e);
          }
        })
        .then((html: string) => {
          try {
            const htmlString = html.split(scullyBegin)[1].split(scullyEnd)[0];
            if (htmlString.includes('_ngcontent')) {
              /** update the angular cssId */
              const atr = '_ngcontent' + htmlString.split('_ngcontent')[1].split('=')[0];
              template.innerHTML = htmlString.split(atr).join(currentCssId);
            } else {
              template.innerHTML = htmlString;
            }
          } catch (e) {
            template.innerHTML = `<h2 id="___scully-parsing-error___">Sorry, could not parse static page content</h2>
            <p>This might happen if you are not using the static generated pages.</p>`;
          }
        })
        .catch((e) => {
          template.innerHTML = '<h2 id="___scully-parsing-error___">Sorry, could not load static page content</h2>';
          console.error('problem during loading static scully content', e);
        });
    }
    /** insert the whole thing just before the `<scully-content>` element */
    const parent = this.elm.parentElement || document.body;
    const begin = document.createComment('scullyContent-begin');
    const end = document.createComment('scullyContent-end');
    parent.insertBefore(begin, this.elm);
    parent.insertBefore(template.content, this.elm);
    parent.insertBefore(end, this.elm);
    /** upgrade all hrefs to simulated routelinks (in next microtask) */
    setTimeout(() => document.querySelectorAll('[href]').forEach(this.upgradeToRoutelink.bind(this)), 10);
    // document.querySelectorAll('[href]').forEach(this.upgradeToRoutelink.bind(this));
  }

  /**
   * upgrade a **href** attributes to links that respect the Angular router
   * and don't do a full page reload. Only works on links that are found in the
   * Scully route config file.
   * @param elm the element containing the **hrefs**
   */
  async upgradeToRoutelink(elm: HTMLElement) {
    if (!['A', 'BUTTON'].includes(elm.tagName)) {
      return;
    }
    const routes = await this.routes;
    const href = elm.getAttribute('href');
    const lnk = basePathOnly(href.toLowerCase());
    const fragment = href.includes('#') ? href.split('#')[1].split('?')[0] : undefined;
    const route = routes.find((r) => basePathOnly(r.route.toLowerCase()) === lnk);

    /** only upgrade routes known by scully. */
    if (lnk && route && !lnk.startsWith('#')) {
      elm.onclick = async (ev: MouseEvent) => {
        const splitRoute = route.route.split(`/`);
        const curSplit = location.pathname.split('/');
        // loose last "part" of route
        curSplit.pop();

        ev.preventDefault();
        const routed = await this.router.navigate(splitRoute, { fragment }).catch((e) => {
          console.error('routing error', e);
          return false;
        });
        if (!routed) {
          return;
        }

        /** check for the same route with different "data", and NOT a 1 level higher (length), and is not a fragment of th same page */
        if (
          curSplit.every((part, i) => splitRoute[i] === part) &&
          splitRoute.length !== curSplit.length + 1 &&
          fragment === undefined
        ) {
          setTimeout(() => this.replaceContent(), 10); // a small delay, so we are sure the angular parts in the page are settled enough
        }
      };
    }
  }

  private replaceContent(): void {
    /**
     * as Angular doesn't destroy the component if we stay on the same page,
     * we have to manually delete old content. Also we need to kick of loading
     * the new content. handlePage() takes care of that.
     */
    /** delete the content, as it is now out of date! */

    window.scullyContent = undefined;
    const parent = this.elm.parentElement;
    let cur = findComments(parent, 'scullyContent-begin')[0] as ChildNode;
    while (cur && cur !== this.elm) {
      const next = cur.nextSibling;
      parent.removeChild(cur);
      cur = next;
    }
    this.handlePage();
  }

  getCSSId(elm: HTMLElement) {
    return elm.getAttributeNames().find((a) => a.startsWith('_ngcontent')) || '';
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    /** reset the lastused */
    lastHandled = '//';
  }
}
