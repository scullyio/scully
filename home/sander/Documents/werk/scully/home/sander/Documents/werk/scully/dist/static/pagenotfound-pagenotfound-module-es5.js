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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['pagenotfound-pagenotfound-module'],
  {
    /***/
    './src/app/pagenotfound/pagenotfound-routing.module.ts':
      /*!*************************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfound-routing.module.ts ***!
    \*************************************************************/

      /*! exports provided: PagenotfoundRoutingModule */

      /***/
      function srcAppPagenotfoundPagenotfoundRoutingModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'PagenotfoundRoutingModule', function() {
          return PagenotfoundRoutingModule;
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
        /* harmony import */

        var _pagenotfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./pagenotfound.component */
          './src/app/pagenotfound/pagenotfound.component.ts'
        );

        var routes = [
          {
            path: '',
            component: _pagenotfound_component__WEBPACK_IMPORTED_MODULE_2__['PagenotfoundComponent'],
          },
        ];

        var PagenotfoundRoutingModule = function PagenotfoundRoutingModule() {
          _classCallCheck(this, PagenotfoundRoutingModule);
        };

        PagenotfoundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: PagenotfoundRoutingModule,
        });
        PagenotfoundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function PagenotfoundRoutingModule_Factory(t) {
            return new (t || PagenotfoundRoutingModule)();
          },
          imports: [
            [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'],
          ],
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](PagenotfoundRoutingModule, {
              imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
              exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PagenotfoundRoutingModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes)],
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
    './src/app/pagenotfound/pagenotfound.component.ts':
      /*!********************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
    \********************************************************/

      /*! exports provided: PagenotfoundComponent */

      /***/
      function srcAppPagenotfoundPagenotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'PagenotfoundComponent', function() {
          return PagenotfoundComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );

        var PagenotfoundComponent =
          /*#__PURE__*/
          (function() {
            function PagenotfoundComponent() {
              _classCallCheck(this, PagenotfoundComponent);
            }

            _createClass(PagenotfoundComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {},
              },
            ]);

            return PagenotfoundComponent;
          })();

        PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) {
          return new (t || PagenotfoundComponent)();
        };

        PagenotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: PagenotfoundComponent,
          selectors: [['app-pagenotfound']],
          decls: 2,
          vars: 0,
          template: function PagenotfoundComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'p');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, 'pagenotfound works!');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
          },
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zYW1wbGVCbG9nL3NyYy9hcHAvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQuY3NzIn0= */',
          ],
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PagenotfoundComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-pagenotfound',
                    templateUrl: './pagenotfound.component.html',
                    styleUrls: ['./pagenotfound.component.css'],
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
    './src/app/pagenotfound/pagenotfound.module.ts':
      /*!*****************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfound.module.ts ***!
    \*****************************************************/

      /*! exports provided: PagenotfoundModule */

      /***/
      function srcAppPagenotfoundPagenotfoundModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'PagenotfoundModule', function() {
          return PagenotfoundModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./pagenotfound-routing.module */
          './src/app/pagenotfound/pagenotfound-routing.module.ts'
        );
        /* harmony import */

        var _pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./pagenotfound.component */
          './src/app/pagenotfound/pagenotfound.component.ts'
        );

        var PagenotfoundModule = function PagenotfoundModule() {
          _classCallCheck(this, PagenotfoundModule);
        };

        PagenotfoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: PagenotfoundModule,
        });
        PagenotfoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function PagenotfoundModule_Factory(t) {
            return new (t || PagenotfoundModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_2__['PagenotfoundRoutingModule'],
            ],
          ],
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](PagenotfoundModule, {
              declarations: [_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__['PagenotfoundComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_2__['PagenotfoundRoutingModule'],
              ],
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PagenotfoundModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: [
                      _pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__['PagenotfoundComponent'],
                    ],
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_2__['PagenotfoundRoutingModule'],
                    ],
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
  },
]);
//# sourceMappingURL=pagenotfound-pagenotfound-module-es5.js.map
