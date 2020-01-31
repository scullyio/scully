function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === '[object Arguments]')) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === '[object Arguments]')
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  }
  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main'],
  {
    /***/
    '../../dist/scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js':
      /*!********************************************************************************************************!*\
    !*** /home/sander/Documents/werk/scully/dist/scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js ***!
    \********************************************************************************************************/

      /*! exports provided: IdleMonitorService, ScullyContentComponent, ScullyContentModule, ScullyLibModule, ScullyRoutesService, TransferStateService, isScullyGenerated, isScullyRunning */

      /***/
      function distScullyioNgLib__ivy_ngcc__Fesm2015ScullyioNgLibJs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'IdleMonitorService', function() {
          return IdleMonitorService;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ScullyContentComponent', function() {
          return ScullyContentComponent;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ScullyContentModule', function() {
          return ScullyContentModule;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ScullyLibModule', function() {
          return ScullyLibModule;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ScullyRoutesService', function() {
          return ScullyRoutesService;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'TransferStateService', function() {
          return TransferStateService;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'isScullyGenerated', function() {
          return isScullyGenerated;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'isScullyRunning', function() {
          return isScullyRunning;
        });
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          '../../node_modules/tslib/tslib.es6.js'
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */
          '../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */

        var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs */
          '../../node_modules/rxjs/_esm2015/index.js'
        );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs/operators */
          '../../node_modules/rxjs/_esm2015/operators/index.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/common */
          '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /**
         * @fileoverview added by tsickle
         * Generated from: lib/idleMonitor/idle-monitor.service.ts
         * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
         */

        /**
         * @record
         */

        var _c0 = ['*'];

        function LocalState() {}

        if (false) {
        }

        var IdleMonitorService =
          /*#__PURE__*/
          (function() {
            /**
             * @param {?} zone
             * @param {?} router
             */
            function IdleMonitorService(zone, router) {
              var _this = this;

              _classCallCheck(this, IdleMonitorService);

              this.zone = zone;
              this.router = router;
              this.imState = new rxjs__WEBPACK_IMPORTED_MODULE_3__['BehaviorSubject']({
                idle: false,
                timeOut: 5 * 1000,
              });
              this.idle$ = this.imState.pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['pluck'])('idle')
              );
              this.initApp = new Event('AngularInitialized', {
                bubbles: true,
                cancelable: false,
              });
              this.appReady = new Event('AngularReady', {
                bubbles: true,
                cancelable: false,
              });
              this.appTimeout = new Event('AngularTimeout', {
                bubbles: true,
                cancelable: false,
              });

              if (window) {
                window.dispatchEvent(this.initApp);
                this.router.events
                  .pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['filter'])(
                      /**
                       * @param {?} ev
                       * @return {?}
                       */
                      function(ev) {
                        return (
                          ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__['NavigationEnd'] &&
                          ev.urlAfterRedirects !== undefined
                        );
                      }
                    ),
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['tap'])(
                      /**
                       * @return {?}
                       */
                      function() {
                        return _this.zoneIdleCheck();
                      }
                    )
                  )
                  .subscribe();
              }
            }
            /**
             * @return {?}
             */

            _createClass(IdleMonitorService, [
              {
                key: 'init',
                value: function init() {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
                    this,
                    void 0,
                    void 0,
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee() {
                      return regeneratorRuntime.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                return _context.abrupt(
                                  'return',
                                  this.idle$
                                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['take'])(1))
                                    .toPromise()
                                );

                              case 1:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        this
                      );
                    })
                  );
                },
                /**
                 * @private
                 * @return {?}
                 */
              },
              {
                key: 'zoneIdleCheck',
                value: function zoneIdleCheck() {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
                    this,
                    void 0,
                    void 0,
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee2() {
                      var _this2 = this;

                      var taskTrackingZone;
                      return regeneratorRuntime.wrap(
                        function _callee2$(_context2) {
                          while (1) {
                            switch ((_context2.prev = _context2.next)) {
                              case 0:
                                if (!(Zone === undefined)) {
                                  _context2.next = 2;
                                  break;
                                }

                                return _context2.abrupt('return', this.simpleTimeout());

                              case 2:
                                /** @type {?} */
                                taskTrackingZone = Zone.current.get('TaskTrackingZone');

                                if (!(taskTrackingZone === undefined)) {
                                  _context2.next = 5;
                                  break;
                                }

                                return _context2.abrupt('return', this.simpleTimeout());

                              case 5:
                                if (!this.imState.value.idle) {
                                  _context2.next = 8;
                                  break;
                                }

                                _context2.next = 8;
                                return this.setState('idle', false);

                              case 8:
                                /** run the actual check for 'idle' outsides zone, otherwise it will never come to an end. */
                                this.zone.runOutsideAngular(
                                  /**
                                   * @return {?}
                                   */
                                  function() {
                                    /** @type {?} */
                                    var tCancel;
                                    /** @type {?} */

                                    var count = 0;
                                    /** @type {?} */

                                    var startTime = Date.now();
                                    /** @type {?} */

                                    var monitor =
                                      /**
                                       * @return {?}
                                       */
                                      function monitor() {
                                        clearTimeout(tCancel); // console.table(taskTrackingZone.macroTasks);

                                        if (Date.now() - startTime > 30 * 1000) {
                                          /** bail out after 30 seconds. */
                                          window.dispatchEvent(_this2.appTimeout);
                                          return;
                                        }

                                        if (
                                          (taskTrackingZone.macroTasks.length > 0 &&
                                            taskTrackingZone.macroTasks.find(
                                              /**
                                               * @param {?} z
                                               * @return {?}
                                               */
                                              function(z) {
                                                return z.source.includes('XMLHttpRequest');
                                              }
                                            ) !== undefined) ||
                                          count < 1 // make sure it runs at least once!
                                        ) {
                                          tCancel = setTimeout(
                                            /**
                                             * @return {?}
                                             */
                                            function() {
                                              count += 1;
                                              monitor();
                                            },
                                            50
                                          );
                                          return;
                                        }

                                        window.dispatchEvent(_this2.appReady);

                                        _this2.setState('idle', true);
                                      };

                                    monitor();
                                  }
                                );

                              case 9:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        },
                        _callee2,
                        this
                      );
                    })
                  );
                },
                /**
                 * @private
                 * @return {?}
                 */
              },
              {
                key: 'simpleTimeout',
                value: function simpleTimeout() {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
                    this,
                    void 0,
                    void 0,
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee3() {
                      var _this3 = this;

                      return regeneratorRuntime.wrap(
                        function _callee3$(_context3) {
                          while (1) {
                            switch ((_context3.prev = _context3.next)) {
                              case 0:
                                /** zone not available, use a timeout instead. */
                                console.warn('Scully is using timeouts, add the needed polyfills instead!');
                                _context3.next = 3;
                                return new Promise(
                                  /**
                                   * @param {?} r
                                   * @return {?}
                                   */
                                  function(r) {
                                    return setTimeout(r, _this3.imState.value.timeOut);
                                  }
                                );

                              case 3:
                                window.dispatchEvent(this.appReady);

                              case 4:
                              case 'end':
                                return _context3.stop();
                            }
                          }
                        },
                        _callee3,
                        this
                      );
                    })
                  );
                },
                /**
                 * @param {?} milliseconds
                 * @return {?}
                 */
              },
              {
                key: 'setPupeteerTimoutValue',
                value: function setPupeteerTimoutValue(milliseconds) {
                  this.imState.next(
                    Object.assign(Object.assign({}, this.imState.value), {
                      timeOut: milliseconds,
                    })
                  );
                },
                /**
                 * @private
                 * @param {?} key
                 * @param {?} value
                 * @return {?}
                 */
              },
              {
                key: 'setState',
                value: function setState(key, value) {
                  this.imState.next(
                    Object.assign(Object.assign({}, this.imState.value), _defineProperty({}, key, value))
                  );
                },
              },
            ]);

            return IdleMonitorService;
          })();

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

        IdleMonitorService.ctorParameters = function() {
          return [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgZone'],
            },
            {
              type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router'],
            },
          ];
        };
        /** @nocollapse */

        IdleMonitorService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjectable'])({
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
        /*@__PURE__*/

        (function() {
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
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgZone'],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router'],
                },
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

        function fetchHttp(url) {
          var responseType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';
          return new Promise(
            /**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function(resolve, reject) {
              /** @type {?} */
              var xhr = new XMLHttpRequest();
              xhr.responseType = responseType;
              xhr.addEventListener(
                'load',
                /**
                 * @param {?} ev
                 * @return {?}
                 */
                function(ev) {
                  return resolve(xhr.response);
                }
              );
              xhr.addEventListener(
                'error',
                /**
                 * @param {...?} err
                 * @return {?}
                 */
                function() {
                  for (var _len = arguments.length, err = new Array(_len), _key = 0; _key < _len; _key++) {
                    err[_key] = arguments[_key];
                  }

                  return reject(err);
                }
              );
              xhr.open('get', url, true);
              xhr.send();
            }
          );
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

        var ScullyRoutesService =
          /*#__PURE__*/
          (function() {
            function ScullyRoutesService() {
              _classCallCheck(this, ScullyRoutesService);

              this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__['ReplaySubject'](1);
              this.allRoutes$ = this.refresh.pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['switchMap'])(
                  /**
                   * @return {?}
                   */
                  function() {
                    return fetchHttp('/assets/scully-routes.json');
                  }
                ),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['catchError'])(
                  /**
                   * @return {?}
                   */
                  function() {
                    console.warn(
                      'Scully routes file not found, are you running the Scully generated version of your site?'
                    );
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__['of'])(
                      /** @type {?} */
                      []
                    );
                  }
                ),
                /** filter out all non-array results */
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['filter'])(
                  /**
                   * @param {?} routes
                   * @return {?}
                   */
                  function(routes) {
                    return Array.isArray(routes);
                  }
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
                  function(list) {
                    return list.filter(
                      /**
                       * @param {?} r
                       * @return {?}
                       */
                      function(r) {
                        return r.hasOwnProperty('published') ? r.published !== false : true;
                      }
                    );
                  }
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
                  function(list) {
                    return list.filter(
                      /**
                       * @param {?} r
                       * @return {?}
                       */
                      function(r) {
                        return r.hasOwnProperty('published') ? r.published === false : false;
                      }
                    );
                  }
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
                  function(routes) {
                    return routes.filter(
                      /**
                       * @param {?} r
                       * @return {?}
                       */
                      function(r) {
                        return !r.route.slice(1).includes('/');
                      }
                    );
                  }
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

            _createClass(ScullyRoutesService, [
              {
                key: 'getCurrent',
                value: function getCurrent() {
                  if (!location) {
                    /** probably not in a browser, no current location available */
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__['of'])();
                  }
                  /** @type {?} */

                  var curLocation = location.pathname.trim();
                  return this.available$.pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['map'])(
                      /**
                       * @param {?} list
                       * @return {?}
                       */
                      function(list) {
                        return list.find(
                          /**
                           * @param {?} r
                           * @return {?}
                           */
                          function(r) {
                            return (
                              curLocation === r.route.trim() ||
                              (r.slugs &&
                                Array.isArray(r.slugs) &&
                                r.slugs.find(
                                  /**
                                   * @param {?} slug
                                   * @return {?}
                                   */
                                  function(slug) {
                                    return curLocation.endsWith(slug.trim());
                                  }
                                ))
                            );
                          }
                        );
                      }
                    )
                  );
                },
                /**
                 * @param {?} routes
                 * @return {?}
                 */
              },
              {
                key: 'cleanDups',
                value: function cleanDups(routes) {
                  /** @type {?} */
                  var m = new Map();
                  routes.forEach(
                    /**
                     * @param {?} r
                     * @return {?}
                     */
                    function(r) {
                      return m.set(r.sourceFile || r.route, r);
                    }
                  );
                  return _toConsumableArray(m.values());
                },
                /**
                 * @return {?}
                 */
              },
              {
                key: 'reload',
                value: function reload() {
                  this.refresh.next();
                },
              },
            ]);

            return ScullyRoutesService;
          })();

        ScullyRoutesService.ɵfac = function ScullyRoutesService_Factory(t) {
          return new (t || ScullyRoutesService)();
        };
        /** @nocollapse */

        ScullyRoutesService.ctorParameters = function() {
          return [];
        };
        /** @nocollapse */

        ScullyRoutesService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjectable'])({
          factory: function ScullyRoutesService_Factory() {
            return new ScullyRoutesService();
          },
          token: ScullyRoutesService,
          providedIn: 'root',
        });
        /*@__PURE__*/

        (function() {
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
          var comments = []; // Fourth argument, which is actually obsolete according to the DOM4 standard, seems required in IE 11

          /** @type {?} */

          var iterator = document.createNodeIterator(
            rootElem,
            NodeFilter.SHOW_COMMENT,
            {
              acceptNode:
                /**
                 * @param {?} node
                 * @return {?}
                 */
                function acceptNode(node) {
                  // Logic to determine whether to accept, reject or skip node
                  // In this case, only accept nodes that have content
                  // that is containing our searchText, by rejecting any other nodes.
                  if (searchText && node.nodeValue && !node.nodeValue.includes(searchText)) {
                    return NodeFilter.FILTER_REJECT;
                  }

                  return NodeFilter.FILTER_ACCEPT;
                },
            } // , false // IE-11 support requires this parameter.
          );
          /** @type {?} */

          var curNode; // tslint:disable-next-line: no-conditional-assignment

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

        var scullyBegin = '<!--scullyContent-begin-->';
        /** @type {?} */

        var scullyEnd = '<!--scullyContent-end-->';

        var ScullyContentComponent =
          /*#__PURE__*/
          (function() {
            /**
             * @param {?} elmRef
             * @param {?} srs
             * @param {?} router
             */
            function ScullyContentComponent(elmRef, srs, router) {
              _classCallCheck(this, ScullyContentComponent);

              this.elmRef = elmRef;
              this.srs = srs;
              this.router = router;
              this.elm =
                /** @type {?} */
                this.elmRef.nativeElement;
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

            _createClass(ScullyContentComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {
                  // /** make sure the idle-check is loaded. */
                  // this.idle.init();
                  if (this.elm) {
                    /** this will only fire in a browser environment */
                    this.handlePage();
                  }
                },
                /**
                 * Loads the static content from scully into the view
                 * Will fetch the content from sibling links with xmlHTTPrequest
                 * @private
                 * @return {?}
                 */
              },
              {
                key: 'handlePage',
                value: function handlePage() {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
                    this,
                    void 0,
                    void 0,
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee4() {
                      var template, currentCssId, htmlString, curPage, parent, begin, end;
                      return regeneratorRuntime.wrap(
                        function _callee4$(_context4) {
                          while (1) {
                            switch ((_context4.prev = _context4.next)) {
                              case 0:
                                /** @type {?} */
                                template = document.createElement('template');
                                /** @type {?} */

                                currentCssId = this.getCSSId(this.elm);

                                if (!window.scullyContent) {
                                  _context4.next = 7;
                                  break;
                                }

                                /**
                                 * upgrade existing static content
                                 * @type {?}
                                 */
                                htmlString = window.scullyContent.html;

                                if (currentCssId !== window.scullyContent.cssId) {
                                  /** replace the angular cssId */
                                  template.innerHTML = htmlString
                                    .split(window.scullyContent.cssId)
                                    .join(currentCssId);
                                } else {
                                  template.innerHTML = htmlString;
                                }

                                _context4.next = 10;
                                break;

                              case 7:
                                /** @type {?} */
                                curPage = location.href;
                                /**
                                 *   NOTE
                                 * when updateting the texts for the errors, make sure you leave the
                                 *  `id="___scully-parsing-error___"`
                                 * in there. That way users can detect rendering errors in their CI
                                 * on a reliable way.
                                 */

                                _context4.next = 10;
                                return fetchHttp(curPage, 'text')
                                  .then(
                                    /**
                                     * @param {?} html
                                     * @return {?}
                                     */
                                    function(html) {
                                      try {
                                        /** @type {?} */
                                        var _htmlString = html.split(scullyBegin)[1].split(scullyEnd)[0];

                                        if (_htmlString.includes('_ngcontent')) {
                                          /**
                                           * update the angular cssId
                                           * @type {?}
                                           */
                                          var atr =
                                            '_ngcontent' + _htmlString.split('_ngcontent')[1].split('=')[0];

                                          template.innerHTML = _htmlString.split(atr).join(currentCssId);
                                        }
                                      } catch (e) {
                                        template.innerHTML =
                                          '<h2 id="___scully-parsing-error___">Sorry, could not parse static page content</h2>\n            <p>This might happen if you are not using the static generated pages.</p>';
                                      }
                                    }
                                  )
                                  ['catch'](
                                    /**
                                     * @param {?} e
                                     * @return {?}
                                     */
                                    function(e) {
                                      template.innerHTML =
                                        '<h2 id="___scully-parsing-error___">Sorry, could not load static page content</h2>';
                                      console.error('problem during loading static scully content', e);
                                    }
                                  );

                              case 10:
                                /**
                                 * insert the whole thing just before the `<scully-content>` element
                                 * @type {?}
                                 */
                                parent = this.elm.parentElement || document.body;
                                /** @type {?} */

                                begin = document.createComment('scullyContent-begin');
                                /** @type {?} */

                                end = document.createComment('scullyContent-end');
                                parent.insertBefore(begin, this.elm);
                                parent.insertBefore(template.content, this.elm);
                                parent.insertBefore(end, this.elm);
                                /** upgrade all hrefs to simulated routelinks  */

                                document
                                  .querySelectorAll('[href]')
                                  .forEach(this.upgradeToRoutelink.bind(this));

                              case 17:
                              case 'end':
                                return _context4.stop();
                            }
                          }
                        },
                        _callee4,
                        this
                      );
                    })
                  );
                },
                /**
                 * upgrade a **href** attributes to links that respect the Angular router
                 * and don't do a full page reload. Only works on links that are found in the
                 * Scully route config file.
                 * @param {?} elm the element containing the **hrefs**
                 * @return {?}
                 */
              },
              {
                key: 'upgradeToRoutelink',
                value: function upgradeToRoutelink(elm) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
                    this,
                    void 0,
                    void 0,
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee6() {
                      var _this4 = this;

                      var routes, lnk, route;
                      return regeneratorRuntime.wrap(
                        function _callee6$(_context6) {
                          while (1) {
                            switch ((_context6.prev = _context6.next)) {
                              case 0:
                                _context6.next = 2;
                                return this.routes;

                              case 2:
                                routes = _context6.sent;

                                /** @type {?} */
                                lnk = elm.getAttribute('href').toLowerCase();
                                /** @type {?} */

                                route = routes.find(
                                  /**
                                   * @param {?} r
                                   * @return {?}
                                   */
                                  function(r) {
                                    return r.route.toLowerCase() === lnk;
                                  }
                                );
                                /** only upgrade routes known by scully. */

                                if (lnk && route) {
                                  elm.onclick =
                                    /**
                                     * @param {?} ev
                                     * @return {?}
                                     */
                                    function(ev) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
                                        _this4,
                                        void 0,
                                        void 0,
                                        /*#__PURE__*/
                                        regeneratorRuntime.mark(function _callee5() {
                                          var _this5 = this;

                                          var splitRoute, curSplit, routed;
                                          return regeneratorRuntime.wrap(
                                            function _callee5$(_context5) {
                                              while (1) {
                                                switch ((_context5.prev = _context5.next)) {
                                                  case 0:
                                                    /** @type {?} */
                                                    splitRoute = route.route.split('/');
                                                    /** @type {?} */

                                                    curSplit = location.pathname.split('/'); // loose last "part" of route

                                                    curSplit.pop();
                                                    ev.preventDefault();
                                                    /** @type {?} */

                                                    _context5.next = 6;
                                                    return this.router.navigate(splitRoute)['catch'](
                                                      /**
                                                       * @param {?} e
                                                       * @return {?}
                                                       */
                                                      function(e) {
                                                        console.error('routing error', e);
                                                        return false;
                                                      }
                                                    );

                                                  case 6:
                                                    routed = _context5.sent;

                                                    if (routed) {
                                                      _context5.next = 9;
                                                      break;
                                                    }

                                                    return _context5.abrupt('return');

                                                  case 9:
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
                                                        function(part, i) {
                                                          return splitRoute[i] === part;
                                                        }
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
                                                        function() {
                                                          /** @type {?} */
                                                          var p = _this5.elm.parentElement;
                                                          /** @type {?} */

                                                          var cur =
                                                            /** @type {?} */
                                                            findComments(p, 'scullyContent-begin')[0];
                                                          /** @type {?} */

                                                          var next;

                                                          do {
                                                            next = cur.nextSibling;
                                                            p.removeChild(cur);
                                                            cur = next;
                                                          } while (next && next !== _this5.elm); // tslint:disable-next-line: no-string-literal

                                                          _this5.handlePage();
                                                        },
                                                        10
                                                      ); // a small delay, so we are sure the angular parts in the page are settled enough
                                                    }

                                                  case 11:
                                                  case 'end':
                                                    return _context5.stop();
                                                }
                                              }
                                            },
                                            _callee5,
                                            this
                                          );
                                        })
                                      );
                                    };
                                }

                              case 6:
                              case 'end':
                                return _context6.stop();
                            }
                          }
                        },
                        _callee6,
                        this
                      );
                    })
                  );
                },
                /**
                 * @param {?} elm
                 * @return {?}
                 */
              },
              {
                key: 'getCSSId',
                value: function getCSSId(elm) {
                  return (
                    elm.getAttributeNames().find(
                      /**
                       * @param {?} a
                       * @return {?}
                       */
                      function(a) {
                        return a.startsWith('_ngcontent');
                      }
                    ) || 'none_found'
                  );
                },
                /**
                 * @return {?}
                 */
              },
              {
                key: 'ngOnDestroy',
                value: function ngOnDestroy() {},
              },
            ]);

            return ScullyContentComponent;
          })();

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

        ScullyContentComponent.ctorParameters = function() {
          return [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['ElementRef'],
            },
            {
              type: ScullyRoutesService,
            },
            {
              type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router'],
            },
          ];
        };
        /*@__PURE__*/

        (function() {
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
                      '\n      :host {\n        display: none;\n      }\n      scully-content {\n        display: none;\n      }\n    ',
                    ],
                  },
                ],
              },
            ],
            function() {
              return [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['ElementRef'],
                },
                {
                  type: ScullyRoutesService,
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router'],
                },
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

        var ScullyContentModule = function ScullyContentModule() {
          _classCallCheck(this, ScullyContentModule);
        };

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
        /*@__PURE__*/

        (function() {
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

        var ScullyLibModule =
          /**
           * We use a little trick to get a working idle-service.
           * First, we separate out the component in a separate module to prevent a circulair injection
           * second we create a constuctor that activates the IdleMonitorService. as that is provided for 'root'
           * there will be only 1 instance in our app.
           * We don't need forRoot, as we are not configuring anything in here.
           * @param {?} idle
           */
          function ScullyLibModule(idle) {
            _classCallCheck(this, ScullyLibModule);

            this.idle = idle;
          };

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

        ScullyLibModule.ctorParameters = function() {
          return [
            {
              type: IdleMonitorService,
            },
          ];
        };

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵsetNgModuleScope'](ScullyLibModule, {
              imports: [ScullyContentModule],
              exports: [ScullyContentModule],
            });
        })();
        /*@__PURE__*/

        (function() {
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
              return [
                {
                  type: IdleMonitorService,
                },
              ];
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

        var isScullyRunning =
          /**
           * @return {?}
           */
          function isScullyRunning() {
            return window && window['ScullyIO'] === 'running';
          };
        /** @type {?} */

        var isScullyGenerated =
          /**
           * @return {?}
           */
          function isScullyGenerated() {
            return window && window['ScullyIO'] === 'generated';
          };
        /**
         * @fileoverview added by tsickle
         * Generated from: lib/transfer-state/transfer-state.service.ts
         * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
         */

        /** @type {?} */

        var SCULLY_SCRIPT_ID = 'scully-transfer-state';
        /** @type {?} */

        var SCULLY_STATE_START = '/** ___SCULLY_STATE_START___ */';
        /** @type {?} */

        var SCULLY_STATE_END = '/** ___SCULLY_STATE_END___ */';
        /**
         * @record
         */

        function State() {} // Adding this dynamic comment to suppress ngc error around Document as a DI token.
        // https://github.com/angular/angular/issues/20351#issuecomment-344009887

        /**
         * \@dynamic
         */

        var TransferStateService =
          /*#__PURE__*/
          (function() {
            /**
             * @param {?} document
             * @param {?} router
             */
            function TransferStateService(document, router) {
              var _this6 = this;

              _classCallCheck(this, TransferStateService);

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
                  function(isNav) {
                    return isNav ? rxjs__WEBPACK_IMPORTED_MODULE_3__['EMPTY'] : _this6.stateBS.asObservable();
                  }
                )
              );
              this.setupEnvForTransferState();
              this.setupNavStartDataFetching();
            }
            /**
             * @private
             * @return {?}
             */

            _createClass(TransferStateService, [
              {
                key: 'setupEnvForTransferState',
                value: function setupEnvForTransferState() {
                  if (isScullyRunning()) {
                    // In Scully puppeteer
                    this.script = this.document.createElement('script');
                    this.script.setAttribute('id', SCULLY_SCRIPT_ID);
                    this.document.head.appendChild(this.script);
                  } else if (isScullyGenerated()) {
                    // On the client AFTER scully rendered it
                    this.stateBS.next((window && window[SCULLY_SCRIPT_ID]) || {});
                  }
                },
                /**
                 * Getstate will return an observable that fires once and completes.
                 * It does so right after the navigation for the page has finished.
                 * @template T
                 * @param {?} name The name of the state to
                 * @return {?}
                 */
              },
              {
                key: 'getState',
                value: function getState(name) {
                  return this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['pluck'])(name));
                },
                /**
                 * @template T
                 * @param {?} name
                 * @param {?} val
                 * @return {?}
                 */
              },
              {
                key: 'setState',
                value: function setState(name, val) {
                  /** @type {?} */
                  var newState = Object.assign(
                    Object.assign({}, this.stateBS.value),
                    _defineProperty({}, name, val)
                  );
                  this.stateBS.next(newState);

                  if (isScullyRunning()) {
                    this.script.textContent = "window['"
                      .concat(SCULLY_SCRIPT_ID, "']=")
                      .concat(SCULLY_STATE_START)
                      .concat(JSON.stringify(newState))
                      .concat(SCULLY_STATE_END);
                  }
                },
                /**
                 * @return {?}
                 */
              },
              {
                key: 'setupNavStartDataFetching',
                value: function setupNavStartDataFetching() {
                  var _this7 = this;

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
                        function(e) {
                          return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__['NavigationStart'];
                        }
                      ),
                      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['switchMap'])(
                        /**
                         * @param {?} e
                         * @return {?}
                         */
                        function(e) {
                          _this7.isNavigatingBS.next(true);

                          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__['forkJoin'])([
                            /** prevent emitting before navigation to _this_ URL is done. */
                            _this7.router.events.pipe(
                              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['filter'])(
                                /**
                                 * @param {?} ev
                                 * @return {?}
                                 */
                                function(ev) {
                                  return (
                                    ev instanceof
                                      _angular_router__WEBPACK_IMPORTED_MODULE_2__['NavigationEnd'] &&
                                    ev.url === e.url
                                  );
                                }
                              ),
                              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['first'])()
                            ), // Get the next route's page from the server
                            fetchHttp(e.url + '/index.html', 'text')['catch'](
                              /**
                               * @param {?} err
                               * @return {?}
                               */
                              function(err) {
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
                        function(_ref) {
                          var _ref2 = _slicedToArray(_ref, 2),
                            e = _ref2[0],
                            html = _ref2[1];

                          try {
                            /** @type {?} */
                            var newStateStr = html.split(SCULLY_STATE_START)[1].split(SCULLY_STATE_END)[0];
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
                        function(val) {
                          return val !== null;
                        }
                      ),
                      /** activate the new state */
                      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['tap'])(
                        /**
                         * @param {?} newState
                         * @return {?}
                         */
                        function(newState) {
                          /** signal to send out update */
                          _this7.isNavigatingBS.next(false);
                          /** replace the state, so we don't leak memory on old state */

                          _this7.stateBS.next(newState);
                        }
                      )
                    )
                    .subscribe();
                },
              },
            ]);

            return TransferStateService;
          })();

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

        TransferStateService.ctorParameters = function() {
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
            {
              type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router'],
            },
          ];
        };
        /** @nocollapse */

        TransferStateService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjectable'])(
          {
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
          }
        );
        /*@__PURE__*/

        (function() {
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
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router'],
                },
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

    /***/
    './$$_lazy_route_resource lazy recursive':
      /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

      /*! no static exports found */

      /***/
      function $$_lazy_route_resourceLazyRecursive(module, exports) {
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

    /***/
    './src/app/app-routing.module.ts':
      /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

      /*! exports provided: AppRoutingModule */

      /***/
      function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'AppRoutingModule', function() {
          return AppRoutingModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */
          '../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );

        var routes = [
          {
            path: 'about',
            loadChildren: function loadChildren() {
              return __webpack_require__
                .e(
                  /*! import() | about-about-module */
                  'about-about-module'
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./about/about.module */
                    './src/app/about/about.module.ts'
                  )
                )
                .then(function(m) {
                  return m.AboutModule;
                });
            },
          },
          {
            path: 'home',
            loadChildren: function loadChildren() {
              return __webpack_require__
                .e(
                  /*! import() | static-static-module */
                  'static-static-module'
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./static/static.module */
                    './src/app/static/static.module.ts'
                  )
                )
                .then(function(m) {
                  return m.StaticModule;
                });
            },
          },
          {
            path: 'blog',
            loadChildren: function loadChildren() {
              return __webpack_require__
                .e(
                  /*! import() | blog-blog-module */
                  'blog-blog-module'
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./blog/blog.module */
                    './src/app/blog/blog.module.ts'
                  )
                )
                .then(function(m) {
                  return m.BlogModule;
                });
            },
          },
          {
            path: 'user',
            loadChildren: function loadChildren() {
              return __webpack_require__
                .e(
                  /*! import() | user-user-module */
                  'user-user-module'
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./user/user.module */
                    './src/app/user/user.module.ts'
                  )
                )
                .then(function(m) {
                  return m.UserModule;
                });
            },
          },
          {
            path: 'demo',
            loadChildren: function loadChildren() {
              return __webpack_require__
                .e(
                  /*! import() | demo-demo-module */
                  'demo-demo-module'
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./demo/demo.module */
                    './src/app/demo/demo.module.ts'
                  )
                )
                .then(function(m) {
                  return m.DemoModule;
                });
            },
          },
          {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full',
          },
          {
            path: '**',
            loadChildren: function loadChildren() {
              return __webpack_require__
                .e(
                  /*! import() | pagenotfound-pagenotfound-module */
                  'pagenotfound-pagenotfound-module'
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./pagenotfound/pagenotfound.module */
                    './src/app/pagenotfound/pagenotfound.module.ts'
                  )
                )
                .then(function(m) {
                  return m.PagenotfoundModule;
                });
            },
          },
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
          },
        ];

        var AppRoutingModule = function AppRoutingModule() {
          _classCallCheck(this, AppRoutingModule);
        };

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
        /*@__PURE__*/

        (function() {
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

    /***/
    './src/app/app.component.ts':
      /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

      /*! exports provided: AppComponent */

      /***/
      function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'AppComponent', function() {
          return AppComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @scullyio/ng-lib */
          '../../dist/scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js'
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */
          '../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );

        var _c0 = function _c0() {
          return ['/home'];
        };

        var AppComponent = function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.currentState = Object(_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__['isScullyRunning'])()
            ? 'rendering inside scully'
            : Object(_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__['isScullyGenerated'])()
            ? 'Loaded from static HTML'
            : 'SPA mode';
        };

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
        /*@__PURE__*/

        (function() {
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

    /***/
    './src/app/app.module.ts':
      /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

      /*! exports provided: AppModule */

      /***/
      function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'AppModule', function() {
          return AppModule;
        });
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */
          '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js'
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/platform-browser */
          '../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js'
        );
        /* harmony import */

        var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @scullyio/ng-lib */
          '../../dist/scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js'
        );
        /* harmony import */

        var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./app-routing.module */
          './src/app/app-routing.module.ts'
        );
        /* harmony import */

        var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./app.component */
          './src/app/app.component.ts'
        );

        var AppModule = function AppModule() {
          _classCallCheck(this, AppModule);
        };

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
        /*@__PURE__*/

        (function() {
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

    /***/
    './src/environments/environment.ts':
      /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

      /*! exports provided: environment */

      /***/
      function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'environment', function() {
          return environment;
        }); // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.

        var environment = {
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

    /***/
    './src/main.ts':
      /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

      /*! no exports provided */

      /***/
      function srcMainTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./environments/environment */
          './src/environments/environment.ts'
        );
        /* harmony import */

        var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app/app.module */
          './src/app/app.module.ts'
        );
        /* harmony import */

        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/platform-browser */
          '../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js'
        );

        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__['environment'].production) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['enableProdMode'])();
        }

        document.addEventListener('DOMContentLoaded', function() {
          _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__['platformBrowser']()
            .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__['AppModule'])
            ['catch'](function(err) {
              return console.error(err);
            });
        });
        /***/
      },

    /***/
    0:
      /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

      /*! no static exports found */

      /***/
      function _(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /home/sander/Documents/werk/scully/projects/sampleBlog/src/main.ts */
          './src/main.ts'
        );
        /***/
      },
  },
  [[0, 'runtime', 'vendor']],
]);
//# sourceMappingURL=main-es5.js.map
