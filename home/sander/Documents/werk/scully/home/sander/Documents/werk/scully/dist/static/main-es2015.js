(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main'],
  {
    /***/ '../../dist/scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js':
      /*!********************************************************************************************************!*\
  !*** /home/sander/Documents/werk/scully/dist/scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js ***!
  \********************************************************************************************************/
      /*! exports provided: IdleMonitorService, ScullyContentComponent, ScullyContentModule, ScullyLibModule, ScullyRoutesService, TransferStateService, isScullyGenerated, isScullyRunning */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'IdleMonitorService',
          function() {
            return IdleMonitorService;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ScullyContentComponent',
          function() {
            return ScullyContentComponent;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ScullyContentModule',
          function() {
            return ScullyContentModule;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ScullyLibModule',
          function() {
            return ScullyLibModule;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ScullyRoutesService',
          function() {
            return ScullyRoutesService;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'TransferStateService',
          function() {
            return TransferStateService;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'isScullyGenerated',
          function() {
            return isScullyGenerated;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'isScullyRunning',
          function() {
            return isScullyRunning;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ '../../node_modules/tslib/tslib.es6.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ '../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs */ '../../node_modules/rxjs/_esm2015/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs/operators */ '../../node_modules/rxjs/_esm2015/operators/index.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/common */ '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        /**
         * @fileoverview added by tsickle
         * Generated from: lib/idleMonitor/idle-monitor.service.ts
         * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
         */
        /**
         * @record
         */

        const _c0 = ['*'];
        function LocalState() {}
        if (false) {
        }
        class IdleMonitorService {
          /**
           * @param {?} zone
           * @param {?} router
           */
          constructor(zone, router) {
            this.zone = zone;
            this.router = router;
            this.imState = new rxjs__WEBPACK_IMPORTED_MODULE_3__['BehaviorSubject']({
              idle: false,
              timeOut: 5 * 1000,
            });
            this.idle$ = this.imState.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['pluck'])('idle')
            );
            this.initApp = new Event('AngularInitialized', {bubbles: true, cancelable: false});
            this.appReady = new Event('AngularReady', {bubbles: true, cancelable: false});
            this.appTimeout = new Event('AngularTimeout', {bubbles: true, cancelable: false});
            if (window) {
              window.dispatchEvent(this.initApp);
              this.router.events
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['filter'])(
                    /**
                     * @param {?} ev
                     * @return {?}
                     */
                    ev =>
                      ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__['NavigationEnd'] &&
                      ev.urlAfterRedirects !== undefined
                  ),
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['tap'])(
                    /**
                     * @return {?}
                     */
                    () => this.zoneIdleCheck()
                  )
                )
                .subscribe();
            }
          }
          /**
           * @return {?}
           */
          init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(this, void 0, void 0, function*() {
              return this.idle$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['take'])(1))
                .toPromise();
            });
          }
          /**
           * @private
           * @return {?}
           */
          zoneIdleCheck() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(this, void 0, void 0, function*() {
              if (Zone === undefined) {
                return this.simpleTimeout();
              }
              /** @type {?} */
              const taskTrackingZone = Zone.current.get('TaskTrackingZone');
              if (taskTrackingZone === undefined) {
                return this.simpleTimeout();
              }
              if (this.imState.value.idle) {
                yield this.setState('idle', false);
              }
              /** run the actual check for 'idle' outsides zone, otherwise it will never come to an end. */
              this.zone.runOutsideAngular(
                /**
                 * @return {?}
                 */
                () => {
                  /** @type {?} */
                  let tCancel;
                  /** @type {?} */
                  let count = 0;
                  /** @type {?} */
                  const startTime = Date.now();
                  /** @type {?} */
                  const monitor
                  /**
                   * @return {?}
                   */ = (() => {
                    clearTimeout(tCancel);
                    // console.table(taskTrackingZone.macroTasks);
                    if (Date.now() - startTime > 30 * 1000) {
                      /** bail out after 30 seconds. */
                      window.dispatchEvent(this.appTimeout);
                      return;
                    }
                    if (
                      (taskTrackingZone.macroTasks.length > 0 &&
                        taskTrackingZone.macroTasks.find(
                          /**
                           * @param {?} z
                           * @return {?}
                           */
                          z => z.source.includes('XMLHttpRequest')
                        ) !== undefined) ||
                      count < 1 // make sure it runs at least once!
                    ) {
                      tCancel = setTimeout(
                        /**
                         * @return {?}
                         */
                        () => {
                          count += 1;
                          monitor();
                        },
                        50
                      );
                      return;
                    }
                    window.dispatchEvent(this.appReady);
                    this.setState('idle', true);
                  });
                  monitor();
                }
              );
            });
          }
          /**
           * @private
           * @return {?}
           */
          simpleTimeout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(this, void 0, void 0, function*() {
              /** zone not available, use a timeout instead. */
              console.warn('Scully is using timeouts, add the needed polyfills instead!');
              yield new Promise
              /**
               * @param {?} r
               * @return {?}
               */(r => setTimeout(r, this.imState.value.timeOut));
              window.dispatchEvent(this.appReady);
            });
          }
          /**
           * @param {?} milliseconds
           * @return {?}
           */
          setPupeteerTimoutValue(milliseconds) {
            this.imState.next(Object.assign(Object.assign({}, this.imState.value), {timeOut: milliseconds}));
          }
          /**
           * @private
           * @param {?} key
           * @param {?} value
           * @return {?}
           */
          setState(key, value) {
            this.imState.next(Object.assign(Object.assign({}, this.imState.value), {[key]: value}));
          }
        }
        IdleMonitorService.ɵfac = function IdleMonitorService_Factory(t) {
          return new (t || IdleMonitorService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵinject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgZone']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵinject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router']
            )
          );
        };
        /** @nocollapse */
        IdleMonitorService.ctorParameters = () => [
          {type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgZone']},
          {type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router']},
        ];
        /** @nocollapse */ IdleMonitorService.ɵprov = Object(
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjectable']
        )({
          factory: function IdleMonitorService_Factory() {
            return new IdleMonitorService(
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵinject'])(
                _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgZone']
              ),
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵinject'])(
                _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router']
              )
            );
          },
          token: IdleMonitorService,
          providedIn: 'root',
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            IdleMonitorService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'],
                args: [
                  {
                    providedIn: 'root',
                  },
                ],
              },
            ],
            function() {
              return [
                {type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgZone']},
                {type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router']},
              ];
            },
            null
          );
        })();
        if (false) {
        }

        /**
         * @fileoverview added by tsickle
         * Generated from: lib/utils/fetchHttp.ts
         * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
         */
        /**
         * @template T
         * @param {?} url
         * @param {?=} responseType
         * @return {?}
         */
        function fetchHttp(url, responseType = 'json') {
          return new Promise
          /**
           * @param {?} resolve
           * @param {?} reject
           * @return {?}
           */((resolve, reject) => {
            /** @type {?} */
            const xhr = new XMLHttpRequest();
            xhr.responseType = responseType;
            xhr.addEventListener(
              'load'
              /**
               * @param {?} ev
               * @return {?}
               */,
              ev => resolve(xhr.response)
            );
            xhr.addEventListener(
              'error'
              /**
               * @param {...?} err
               * @return {?}
               */,
              (...err) => reject(err)
            );
            xhr.open('get', url, true);
            xhr.send();
          });
        }

        /**
         * @fileoverview added by tsickle
         * Generated from: lib/route-service/scully-routes.service.ts
         * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
         */
        /**
         * @record
         */
        function ScullyRoute() {}
        if (false) {
        }
        class ScullyRoutesService {
          constructor() {
            this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__['ReplaySubject'](1);
            this.allRoutes$ = this.refresh.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['switchMap'])(
                /**
                 * @return {?}
                 */
                () => fetchHttp('/assets/scully-routes.json')
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['catchError'])(
                /**
                 * @return {?}
                 */
                () => {
                  console.warn(
                    'Scully routes file not found, are you running the Scully generated version of your site?'
                  );
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__['of'])(/** @type {?} */ ([]));
                }
              ),
              /** filter out all non-array results */
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['filter'])(
                /**
                 * @param {?} routes
                 * @return {?}
                 */
                routes => Array.isArray(routes)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['map'])(this.cleanDups),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['shareReplay'])({
                refCount: false,
                bufferSize: 1,
              })
            );
            this.available$ = this.allRoutes$.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['map'])(
                /**
                 * @param {?} list
                 * @return {?}
                 */
                list =>
                  list.filter(
                    /**
                     * @param {?} r
                     * @return {?}
                     */
                    r => (r.hasOwnProperty('published') ? r.published !== false : true)
                  )
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['shareReplay'])({
                refCount: false,
                bufferSize: 1,
              })
            );
            this.unPublished$ = this.allRoutes$.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['map'])(
                /**
                 * @param {?} list
                 * @return {?}
                 */
                list =>
                  list.filter(
                    /**
                     * @param {?} r
                     * @return {?}
                     */
                    r => (r.hasOwnProperty('published') ? r.published === false : false)
                  )
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['shareReplay'])({
                refCount: false,
                bufferSize: 1,
              })
            );
            this.topLevel$ = this.available$.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['map'])(
                /**
                 * @param {?} routes
                 * @return {?}
                 */
                routes =>
                  routes.filter(
                    /**
                     * @param {?} r
                     * @return {?}
                     */
                    r => !r.route.slice(1).includes('/')
                  )
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['shareReplay'])({
                refCount: false,
                bufferSize: 1,
              })
            );
            /** kick off first cycle */
            this.reload();
          }
          /**
           * @return {?}
           */
          getCurrent() {
            if (!location) {
              /** probably not in a browser, no current location available */
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__['of'])();
            }
            /** @type {?} */
            const curLocation = location.pathname.trim();
            return this.available$.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['map'])(
                /**
                 * @param {?} list
                 * @return {?}
                 */
                list =>
                  list.find(
                    /**
                     * @param {?} r
                     * @return {?}
                     */
                    r =>
                      curLocation === r.route.trim() ||
                      (r.slugs &&
                        Array.isArray(r.slugs) &&
                        r.slugs.find(
                          /**
                           * @param {?} slug
                           * @return {?}
                           */
                          slug => curLocation.endsWith(slug.trim())
                        ))
                  )
              )
            );
          }
          /**
           * @param {?} routes
           * @return {?}
           */
          cleanDups(routes) {
            /** @type {?} */
            const m = new Map();
            routes.forEach(
              /**
               * @param {?} r
               * @return {?}
               */
              r => m.set(r.sourceFile || r.route, r)
            );
            return [...m.values()];
          }
          /**
           * @return {?}
           */
          reload() {
            this.refresh.next();
          }
        }
        ScullyRoutesService.ɵfac = function ScullyRoutesService_Factory(t) {
          return new (t || ScullyRoutesService)();
        };
        /** @nocollapse */
        ScullyRoutesService.ctorParameters = () => [];
        /** @nocollapse */ ScullyRoutesService.ɵprov = Object(
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjectable']
        )({
          factory: function ScullyRoutesService_Factory() {
            return new ScullyRoutesService();
          },
          token: ScullyRoutesService,
          providedIn: 'root',
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            ScullyRoutesService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'],
                args: [
                  {
                    providedIn: 'root',
                  },
                ],
              },
            ],
            function() {
              return [];
            },
            null
          );
        })();
        if (false) {
        }

        /**
         * @fileoverview added by tsickle
         * Generated from: lib/utils/findComments.ts
         * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
         */
        /**
         * Returns an array of nodes coninting all the html comments in the element.
         * When a searchText is given this is narrowed down to only comments that contian this text
         * @param {?} rootElem Element to search nto
         * @param {?=} searchText optional string that needs to be in a HTML comment
         * @return {?}
         */
        function findComments(rootElem, searchText) {
          /** @type {?} */
          const comments = [];
          // Fourth argument, which is actually obsolete according to the DOM4 standard, seems required in IE 11
          /** @type {?} */
          const iterator = document.createNodeIterator(
            rootElem,
            NodeFilter.SHOW_COMMENT,
            {
              /**
               * @param {?} node
               * @return {?}
               */
              acceptNode: (node => {
                // Logic to determine whether to accept, reject or skip node
                // In this case, only accept nodes that have content
                // that is containing our searchText, by rejecting any other nodes.
                if (searchText && node.nodeValue && !node.nodeValue.includes(searchText)) {
                  return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
              }),
            }
            // , false // IE-11 support requires this parameter.
          );
          /** @type {?} */
          let curNode;
          // tslint:disable-next-line: no-conditional-assignment
          while ((curNode = iterator.nextNode())) {
            comments.push(curNode);
          }
          return comments;
        }

        /**
         * @fileoverview added by tsickle
         * Generated from: lib/scully-content/scully-content.component.ts
         * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
         */
        /**
         * @record
         */
        function ScullyContent() {}
        if (false) {
        }
        /**
         * this is needed, because otherwise the CLI borks while building
         * @type {?}
         */
        const scullyBegin = '<!--scullyContent-begin-->';
        /** @type {?} */
        const scullyEnd = '<!--scullyContent-end-->';
        class ScullyContentComponent {
          /**
           * @param {?} elmRef
           * @param {?} srs
           * @param {?} router
           */
          constructor(elmRef, srs, router) {
            this.elmRef = elmRef;
            this.srs = srs;
            this.router = router;
            this.elm = /** @type {?} */ (this.elmRef.nativeElement);
            /**
             * pull in all  available routes into an eager promise
             */
            this.routes = this.srs.available$
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['take'])(1))
              .toPromise();
          }
          /**
           * @return {?}
           */
          ngOnInit() {
            // /** make sure the idle-check is loaded. */
            // this.idle.init();
            if (this.elm) {
              /** this will only fire in a browser environment */
              this.handlePage();
            }
          }
          /**
           * Loads the static content from scully into the view
           * Will fetch the content from sibling links with xmlHTTPrequest
           * @private
           * @return {?}
           */
          handlePage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(this, void 0, void 0, function*() {
              /** @type {?} */
              const template = document.createElement('template');
              /** @type {?} */
              const currentCssId = this.getCSSId(this.elm);
              if (window.scullyContent) {
                /**
                 * upgrade existing static content
                 * @type {?}
                 */
                const htmlString = window.scullyContent.html;
                if (currentCssId !== window.scullyContent.cssId) {
                  /** replace the angular cssId */
                  template.innerHTML = htmlString.split(window.scullyContent.cssId).join(currentCssId);
                } else {
                  template.innerHTML = htmlString;
                }
              } else {
                /** @type {?} */
                const curPage = location.href;
                /**
                 *   NOTE
                 * when updateting the texts for the errors, make sure you leave the
                 *  `id="___scully-parsing-error___"`
                 * in there. That way users can detect rendering errors in their CI
                 * on a reliable way.
                 */
                yield fetchHttp(curPage, 'text')
                  .then(
                    /**
                     * @param {?} html
                     * @return {?}
                     */
                    html => {
                      try {
                        /** @type {?} */
                        const htmlString = html.split(scullyBegin)[1].split(scullyEnd)[0];
                        if (htmlString.includes('_ngcontent')) {
                          /**
                           * update the angular cssId
                           * @type {?}
                           */
                          const atr = '_ngcontent' + htmlString.split('_ngcontent')[1].split('=')[0];
                          template.innerHTML = htmlString.split(atr).join(currentCssId);
                        }
                      } catch (e) {
                        template.innerHTML = `<h2 id="___scully-parsing-error___">Sorry, could not parse static page content</h2>
            <p>This might happen if you are not using the static generated pages.</p>`;
                      }
                    }
                  )
                  .catch(
                    /**
                     * @param {?} e
                     * @return {?}
                     */
                    e => {
                      template.innerHTML =
                        '<h2 id="___scully-parsing-error___">Sorry, could not load static page content</h2>';
                      console.error('problem during loading static scully content', e);
                    }
                  );
              }
              /**
               * insert the whole thing just before the `<scully-content>` element
               * @type {?}
               */
              const parent = this.elm.parentElement || document.body;
              /** @type {?} */
              const begin = document.createComment('scullyContent-begin');
              /** @type {?} */
              const end = document.createComment('scullyContent-end');
              parent.insertBefore(begin, this.elm);
              parent.insertBefore(template.content, this.elm);
              parent.insertBefore(end, this.elm);
              /** upgrade all hrefs to simulated routelinks  */
              document.querySelectorAll('[href]').forEach(this.upgradeToRoutelink.bind(this));
            });
          }
          /**
           * upgrade a **href** attributes to links that respect the Angular router
           * and don't do a full page reload. Only works on links that are found in the
           * Scully route config file.
           * @param {?} elm the element containing the **hrefs**
           * @return {?}
           */
          upgradeToRoutelink(elm) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(this, void 0, void 0, function*() {
              /** @type {?} */
              const routes = yield this.routes;
              /** @type {?} */
              const lnk = elm.getAttribute('href').toLowerCase();
              /** @type {?} */
              const route = routes.find(
                /**
                 * @param {?} r
                 * @return {?}
                 */
                (r => r.route.toLowerCase() === lnk)
              );
              /** only upgrade routes known by scully. */
              if (lnk && route) {
                elm.onclick
                /**
                 * @param {?} ev
                 * @return {?}
                 */ = ev =>
                  Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(this, void 0, void 0, function*() {
                    /** @type {?} */
                    const splitRoute = route.route.split(`/`);
                    /** @type {?} */
                    const curSplit = location.pathname.split('/');
                    // loose last "part" of route
                    curSplit.pop();
                    ev.preventDefault();
                    /** @type {?} */
                    const routed = yield this.router.navigate(splitRoute).catch(
                      /**
                       * @param {?} e
                       * @return {?}
                       */
                      (e => {
                        console.error('routing error', e);
                        return false;
                      })
                    );
                    if (!routed) {
                      return;
                    }
                    /** delete the content, as it is now out of date! */
                    window.scullyContent = undefined;
                    /** check for the same route with different "data", and NOT a level higher (length) */
                    if (
                      curSplit.every(
                        /**
                         * @param {?} part
                         * @param {?} i
                         * @return {?}
                         */
                        (part, i) => splitRoute[i] === part
                      ) &&
                      splitRoute.length > curSplit.length
                    ) {
                      /**
                       * as Angular doesn't destroy the component if we stay on the same page,
                       * we have to manually delete old content. Also we need to kick of loading
                       * the new content. handlePage() takes care of that.
                       */
                      setTimeout(
                        /**
                         * @return {?}
                         */
                        () => {
                          /** @type {?} */
                          const p = this.elm.parentElement;
                          /** @type {?} */
                          let cur = /** @type {?} */ (findComments(p, 'scullyContent-begin')[0]);
                          /** @type {?} */
                          let next;
                          do {
                            next = cur.nextSibling;
                            p.removeChild(cur);
                            cur = next;
                          } while (next && next !== this.elm);
                          // tslint:disable-next-line: no-string-literal
                          this.handlePage();
                        },
                        10
                      ); // a small delay, so we are sure the angular parts in the page are settled enough
                    }
                  });
              }
            });
          }
          /**
           * @param {?} elm
           * @return {?}
           */
          getCSSId(elm) {
            return (
              elm.getAttributeNames().find(
                /**
                 * @param {?} a
                 * @return {?}
                 */
                a => a.startsWith('_ngcontent')
              ) || 'none_found'
            );
          }
          /**
           * @return {?}
           */
          ngOnDestroy() {}
        }
        ScullyContentComponent.ɵfac = function ScullyContentComponent_Factory(t) {
          return new (t || ScullyContentComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ElementRef']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](ScullyRoutesService),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router']
            )
          );
        };
        ScullyContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineComponent']({
          type: ScullyContentComponent,
          selectors: [['scully-content']],
          ngContentSelectors: _c0,
          decls: 1,
          vars: 0,
          template: function ScullyContentComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵprojectionDef']();
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵprojection'](0);
            }
          },
          styles: [
            '\n      :host {\n        display: none;\n      }\n      scully-content {\n        display: none;\n      }\n    ',
          ],
          encapsulation: 2,
          changeDetection: 0,
        });
        /** @nocollapse */
        ScullyContentComponent.ctorParameters = () => [
          {type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['ElementRef']},
          {type: ScullyRoutesService},
          {type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router']},
        ];
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            ScullyContentComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Component'],
                args: [
                  {
                    // tslint:disable-next-line: component-selector
                    selector: 'scully-content',
                    template: '<ng-content></ng-content>',
                    changeDetection:
                      _angular_core__WEBPACK_IMPORTED_MODULE_1__['ChangeDetectionStrategy'].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__['ViewEncapsulation'].None,
                    preserveWhitespaces: true,
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
                  },
                ],
              },
            ],
            function() {
              return [
                {type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['ElementRef']},
                {type: ScullyRoutesService},
                {type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router']},
              ];
            },
            null
          );
        })();
        if (false) {
        }

        /**
         * @fileoverview added by tsickle
         * Generated from: lib/scully-content/scully-content.module.ts
         * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
         */
        class ScullyContentModule {}
        ScullyContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineNgModule']({
          type: ScullyContentModule,
        });
        ScullyContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjector']({
          factory: function ScullyContentModule_Factory(t) {
            return new (t || ScullyContentModule)();
          },
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵsetNgModuleScope'](ScullyContentModule, {
              declarations: [ScullyContentComponent],
              exports: [ScullyContentComponent],
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            ScullyContentModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'],
                args: [
                  {
                    declarations: [ScullyContentComponent],
                    exports: [ScullyContentComponent],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();

        /**
         * @fileoverview added by tsickle
         * Generated from: lib/scully-lib.module.ts
         * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
         */
        class ScullyLibModule {
          /**
           * We use a little trick to get a working idle-service.
           * First, we separate out the component in a separate module to prevent a circulair injection
           * second we create a constuctor that activates the IdleMonitorService. as that is provided for 'root'
           * there will be only 1 instance in our app.
           * We don't need forRoot, as we are not configuring anything in here.
           * @param {?} idle
           */
          constructor(idle) {
            this.idle = idle;
          }
        }
        ScullyLibModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineNgModule']({
          type: ScullyLibModule,
        });
        ScullyLibModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjector']({
          factory: function ScullyLibModule_Factory(t) {
            return new (t || ScullyLibModule)(
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵinject'](IdleMonitorService)
            );
          },
          imports: [[ScullyContentModule], ScullyContentModule],
        });
        /** @nocollapse */
        ScullyLibModule.ctorParameters = () => [{type: IdleMonitorService}];
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵsetNgModuleScope'](ScullyLibModule, {
              imports: [ScullyContentModule],
              exports: [ScullyContentModule],
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            ScullyLibModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'],
                args: [
                  {
                    imports: [ScullyContentModule],
                    exports: [ScullyContentModule],
                  },
                ],
              },
            ],
            function() {
              return [{type: IdleMonitorService}];
            },
            null
          );
        })();
        if (false) {
        }

        /**
         * @fileoverview added by tsickle
         * Generated from: lib/utils/isScully.ts
         * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
         */
        // tslint:disable: no-string-literal
        /** @type {?} */
        const isScullyRunning
        /**
         * @return {?}
         */ = (() => window && window['ScullyIO'] === 'running');
        /** @type {?} */
        const isScullyGenerated
        /**
         * @return {?}
         */ = (() => window && window['ScullyIO'] === 'generated');

        /**
         * @fileoverview added by tsickle
         * Generated from: lib/transfer-state/transfer-state.service.ts
         * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
         */
        /** @type {?} */
        const SCULLY_SCRIPT_ID = `scully-transfer-state`;
        /** @type {?} */
        const SCULLY_STATE_START = `/** ___SCULLY_STATE_START___ */`;
        /** @type {?} */
        const SCULLY_STATE_END = `/** ___SCULLY_STATE_END___ */`;
        /**
         * @record
         */
        function State() {}
        // Adding this dynamic comment to suppress ngc error around Document as a DI token.
        // https://github.com/angular/angular/issues/20351#issuecomment-344009887
        /**
         * \@dynamic
         */
        class TransferStateService {
          /**
           * @param {?} document
           * @param {?} router
           */
          constructor(document, router) {
            this.document = document;
            this.router = router;
            this.isNavigatingBS = new rxjs__WEBPACK_IMPORTED_MODULE_3__['BehaviorSubject'](false);
            this.stateBS = new rxjs__WEBPACK_IMPORTED_MODULE_3__['BehaviorSubject']({});
            this.state$ = this.isNavigatingBS.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['switchMap'])(
                /**
                 * @param {?} isNav
                 * @return {?}
                 */
                isNav => (isNav ? rxjs__WEBPACK_IMPORTED_MODULE_3__['EMPTY'] : this.stateBS.asObservable())
              )
            );
            this.setupEnvForTransferState();
            this.setupNavStartDataFetching();
          }
          /**
           * @private
           * @return {?}
           */
          setupEnvForTransferState() {
            if (isScullyRunning()) {
              // In Scully puppeteer
              this.script = this.document.createElement('script');
              this.script.setAttribute('id', SCULLY_SCRIPT_ID);
              this.document.head.appendChild(this.script);
            } else if (isScullyGenerated()) {
              // On the client AFTER scully rendered it
              this.stateBS.next((window && window[SCULLY_SCRIPT_ID]) || {});
            }
          }
          /**
           * Getstate will return an observable that fires once and completes.
           * It does so right after the navigation for the page has finished.
           * @template T
           * @param {?} name The name of the state to
           * @return {?}
           */
          getState(name) {
            return this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['pluck'])(name));
          }
          /**
           * @template T
           * @param {?} name
           * @param {?} val
           * @return {?}
           */
          setState(name, val) {
            /** @type {?} */
            const newState = Object.assign(Object.assign({}, this.stateBS.value), {[name]: val});
            this.stateBS.next(newState);
            if (isScullyRunning()) {
              this.script.textContent = `window['${SCULLY_SCRIPT_ID}']=${SCULLY_STATE_START}${JSON.stringify(
                newState
              )}${SCULLY_STATE_END}`;
            }
          }
          /**
           * @return {?}
           */
          setupNavStartDataFetching() {
            /**
             * Each time the route changes, get the Scully state from the server-rendered page
             */
            if (!isScullyGenerated()) {
              return;
            }
            this.router.events
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['filter'])(
                  /**
                   * @param {?} e
                   * @return {?}
                   */
                  e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__['NavigationStart']
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['switchMap'])(
                  /**
                   * @param {?} e
                   * @return {?}
                   */
                  e => {
                    this.isNavigatingBS.next(true);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__['forkJoin'])([
                      /** prevent emitting before navigation to _this_ URL is done. */
                      this.router.events.pipe(
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['filter'])(
                          /**
                           * @param {?} ev
                           * @return {?}
                           */
                          ev =>
                            ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__['NavigationEnd'] &&
                            ev.url === e.url
                        ),
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['first'])()
                      ),
                      // Get the next route's page from the server
                      fetchHttp(e.url + '/index.html', 'text').catch(
                        /**
                         * @param {?} err
                         * @return {?}
                         */
                        err => {
                          console.warn('Failed transfering state from route', err);
                          return '';
                        }
                      ),
                    ]);
                  }
                ),
                /** parse out the relevant piece off text, and conver to json */
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['map'])(
                  /**
                   * @param {?} __0
                   * @return {?}
                   */
                  ([e, html]) => {
                    try {
                      /** @type {?} */
                      const newStateStr = html.split(SCULLY_STATE_START)[1].split(SCULLY_STATE_END)[0];
                      return JSON.parse(newStateStr);
                    } catch (_a) {
                      return null;
                    }
                  }
                ),
                /** prevent progressing in case anything went sour above */
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['filter'])(
                  /**
                   * @param {?} val
                   * @return {?}
                   */
                  val => val !== null
                ),
                /** activate the new state */
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['tap'])(
                  /**
                   * @param {?} newState
                   * @return {?}
                   */
                  newState => {
                    /** signal to send out update */
                    this.isNavigatingBS.next(false);
                    /** replace the state, so we don't leak memory on old state */
                    this.stateBS.next(newState);
                  }
                )
              )
              .subscribe();
          }
        }
        TransferStateService.ɵfac = function TransferStateService_Factory(t) {
          return new (t || TransferStateService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵinject'](
              _angular_common__WEBPACK_IMPORTED_MODULE_5__['DOCUMENT']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵinject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router']
            )
          );
        };
        /** @nocollapse */
        TransferStateService.ctorParameters = () => [
          {
            type: Document,
            decorators: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Inject'],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__['DOCUMENT']],
              },
            ],
          },
          {type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router']},
        ];
        /** @nocollapse */ TransferStateService.ɵprov = Object(
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjectable']
        )({
          factory: function TransferStateService_Factory() {
            return new TransferStateService(
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵinject'])(
                _angular_common__WEBPACK_IMPORTED_MODULE_5__['DOCUMENT']
              ),
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵinject'])(
                _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router']
              )
            );
          },
          token: TransferStateService,
          providedIn: 'root',
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            TransferStateService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'],
                args: [
                  {
                    providedIn: 'root',
                  },
                ],
              },
            ],
            function() {
              return [
                {
                  type: Document,
                  decorators: [
                    {
                      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Inject'],
                      args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__['DOCUMENT']],
                    },
                  ],
                },
                {type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router']},
              ];
            },
            null
          );
        })();
        if (false) {
        }

        /**
         * @fileoverview added by tsickle
         * Generated from: public-api.ts
         * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
         */

        /**
         * @fileoverview added by tsickle
         * Generated from: scullyio-ng-lib.ts
         * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
         */

        //# sourceMappingURL=scullyio-ng-lib.js.map

        /***/
      },

    /***/ './$$_lazy_route_resource lazy recursive':
      /*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function() {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }
        webpackEmptyAsyncContext.keys = function() {
          return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = './$$_lazy_route_resource lazy recursive';

        /***/
      },

    /***/ './src/app/app-routing.module.ts':
      /*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
      /*! exports provided: AppRoutingModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppRoutingModule',
          function() {
            return AppRoutingModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ '../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );

        const routes = [
          {
            path: 'about',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | about-about-module */ 'about-about-module')
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./about/about.module */ './src/app/about/about.module.ts'
                  )
                )
                .then(m => m.AboutModule),
          },
          {
            path: 'home',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | static-static-module */ 'static-static-module')
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./static/static.module */ './src/app/static/static.module.ts'
                  )
                )
                .then(m => m.StaticModule),
          },
          {
            path: 'blog',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | blog-blog-module */ 'blog-blog-module')
                .then(
                  __webpack_require__.bind(null, /*! ./blog/blog.module */ './src/app/blog/blog.module.ts')
                )
                .then(m => m.BlogModule),
          },
          {
            path: 'user',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | user-user-module */ 'user-user-module')
                .then(
                  __webpack_require__.bind(null, /*! ./user/user.module */ './src/app/user/user.module.ts')
                )
                .then(m => m.UserModule),
          },
          {
            path: 'demo',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | demo-demo-module */ 'demo-demo-module')
                .then(
                  __webpack_require__.bind(null, /*! ./demo/demo.module */ './src/app/demo/demo.module.ts')
                )
                .then(m => m.DemoModule),
          },
          {path: '', redirectTo: '/home', pathMatch: 'full'},
          {
            path: '**',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | pagenotfound-pagenotfound-module */ 'pagenotfound-pagenotfound-module')
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./pagenotfound/pagenotfound.module */ './src/app/pagenotfound/pagenotfound.module.ts'
                  )
                )
                .then(m => m.PagenotfoundModule),
          },
          {path: '', redirectTo: 'home', pathMatch: 'full'},
        ];
        class AppRoutingModule {}
        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: AppRoutingModule,
        });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          imports: [
            [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'],
          ],
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](AppRoutingModule, {
              imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
              exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AppRoutingModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ './src/app/app.component.ts':
      /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
      /*! exports provided: AppComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppComponent', function() {
          return AppComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @scullyio/ng-lib */ '../../dist/scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ '../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );

        const _c0 = function() {
          return ['/home'];
        };
        class AppComponent {
          constructor() {
            this.currentState = Object(_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__['isScullyRunning'])()
              ? 'rendering inside scully'
              : Object(_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__['isScullyGenerated'])()
              ? 'Loaded from static HTML'
              : 'SPA mode';
          }
        }
        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)();
        };
        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: AppComponent,
          selectors: [['app-root']],
          decls: 14,
          vars: 3,
          consts: [[3, 'routerLink']],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'header');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'h1');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2, ' Scully demo blog app! ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'small');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'a', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, '\uD83C\uDFE0');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'main');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](8, 'router-outlet');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'footer');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'h3');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](11, 'Made with \u2764\uFE0F ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'strong');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](13, '@HeroDevs');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.currentState);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'routerLink',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](2, _c0)
              );
            }
          },
          directives: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterLinkWithHref'],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterOutlet'],
          ],
          styles: [
            '[_nghost-%COMP%] {\n  display: grid;\n  height: 100vh;\n  grid-template-rows: 60px 1fr 60px;\n}\n\n[_nghost-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: grid;\n  background-color: royalblue;\n  color: whitesmoke;\n  margin: 0;\n  padding: 0px 10px;\n  grid-template-columns: 1fr 40px;\n  place-items: center center;\n}\n\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n[_nghost-%COMP%]    > footer[_ngcontent-%COMP%] {\n  display: grid;\n  background-color: royalblue;\n  color: whitesmoke;\n  margin: 0;\n  padding-right: 10px;\n  justify-content: right;\n  align-content: center;\n}\n\nmain[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  color: rgb(4, 12, 36);\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NhbXBsZUJsb2cvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsU0FBUztFQUNULGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFLFNBQVM7QUFDWDs7QUFDQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsYUFBYTtBQUNmIiwiZmlsZSI6InByb2plY3RzL3NhbXBsZUJsb2cvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmciA2MHB4O1xufVxuXG46aG9zdCA+IGhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQwcHg7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xufVxuXG5oZWFkZXIgaDEsXG5mb290ZXIgaDMge1xuICBtYXJnaW46IDA7XG59XG46aG9zdCA+IGZvb3RlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgY29sb3I6IHJnYig0LCAxMiwgMzYpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuIl19 */',
          ],
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AppComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.css'],
                  },
                ],
              },
            ],
            function() {
              return [];
            },
            null
          );
        })();

        /***/
      },

    /***/ './src/app/app.module.ts':
      /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
      /*! exports provided: AppModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppModule', function() {
          return AppModule;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/platform-browser */ '../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js'
        );
        /* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @scullyio/ng-lib */ '../../dist/scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js'
        );
        /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./app-routing.module */ './src/app/app-routing.module.ts'
        );
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./app.component */ './src/app/app.component.ts'
        );

        class AppModule {}
        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineNgModule']({
          type: AppModule,
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__['AppComponent']],
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjector']({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          imports: [
            [
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__['BrowserModule'],
              _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClientModule'],
              _app_routing_module__WEBPACK_IMPORTED_MODULE_4__['AppRoutingModule'],
              _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__['ScullyLibModule'],
            ],
          ],
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵsetNgModuleScope'](AppModule, {
              declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__['AppComponent']],
              imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__['BrowserModule'],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClientModule'],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__['AppRoutingModule'],
                _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__['ScullyLibModule'],
              ],
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            AppModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'],
                args: [
                  {
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__['AppComponent']],
                    imports: [
                      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__['BrowserModule'],
                      _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClientModule'],
                      _app_routing_module__WEBPACK_IMPORTED_MODULE_4__['AppRoutingModule'],
                      _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__['ScullyLibModule'],
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__['AppComponent']],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ './src/environments/environment.ts':
      /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
      /*! exports provided: environment */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'environment', function() {
          return environment;
        });
        // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.
        const environment = {
          production: false,
        };
        /*
         * For easier debugging in development mode, you can import the following file
         * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
         *
         * This import should be commented out in production mode because it will have a negative impact
         * on performance if an error is thrown.
         */
        // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

        /***/
      },

    /***/ './src/main.ts':
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./environments/environment */ './src/environments/environment.ts'
        );
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app/app.module */ './src/app/app.module.ts'
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/platform-browser */ '../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js'
        );

        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__['environment'].production) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['enableProdMode'])();
        }
        document.addEventListener('DOMContentLoaded', () => {
          _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__['platformBrowser']()
            .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__['AppModule'])
            .catch(err => console.error(err));
        });

        /***/
      },

    /***/ 0:
      /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /home/sander/Documents/werk/scully/projects/sampleBlog/src/main.ts */ './src/main.ts'
        );

        /***/
      },
  },
  [[0, 'runtime', 'vendor']],
]);
//# sourceMappingURL=main-es2015.js.map
