(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['about-about-module'],
  {
    /***/ './src/app/about/about-routing.module.ts':
      /*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
      /*! exports provided: AboutRoutingModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AboutRoutingModule',
          function() {
            return AboutRoutingModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ '../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./about.component */ './src/app/about/about.component.ts'
        );

        const routes = [
          {path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_2__['AboutComponent']},
        ];
        class AboutRoutingModule {}
        AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: AboutRoutingModule,
        });
        AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function AboutRoutingModule_Factory(t) {
            return new (t || AboutRoutingModule)();
          },
          imports: [
            [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'],
          ],
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](AboutRoutingModule, {
              imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
              exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AboutRoutingModule,
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

    /***/ './src/app/about/about.component.ts':
      /*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
      /*! exports provided: AboutComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AboutComponent',
          function() {
            return AboutComponent;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ '../../node_modules/tslib/tslib.es6.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ '../../node_modules/rxjs/_esm2015/operators/index.js'
        );
        /* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @scullyio/ng-lib */ '../../dist/scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js'
        );

        class AboutComponent {
          constructor(srs) {
            this.srs = srs;
          }
          ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(this, void 0, void 0, function*() {
              const cur = yield this.srs
                .getCurrent()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['take'])(1))
                .toPromise();
              console.log(cur);
            });
          }
        }
        AboutComponent.ɵfac = function AboutComponent_Factory(t) {
          return new (t || AboutComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__['ScullyRoutesService']
            )
          );
        };
        AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineComponent']({
          type: AboutComponent,
          selectors: [['app-about']],
          decls: 2,
          vars: 0,
          template: function AboutComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](0, 'p');
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtext'](1, 'about works!');
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
            }
          },
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zYW1wbGVCbG9nL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */',
          ],
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            AboutComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Component'],
                args: [
                  {
                    selector: 'app-about',
                    templateUrl: './about.component.html',
                    styleUrls: ['./about.component.css'],
                  },
                ],
              },
            ],
            function() {
              return [{type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__['ScullyRoutesService']}];
            },
            null
          );
        })();

        /***/
      },

    /***/ './src/app/about/about.module.ts':
      /*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
      /*! exports provided: AboutModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AboutModule', function() {
          return AboutModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./about-routing.module */ './src/app/about/about-routing.module.ts'
        );
        /* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./about.component */ './src/app/about/about.component.ts'
        );

        class AboutModule {}
        AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: AboutModule,
        });
        AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function AboutModule_Factory(t) {
            return new (t || AboutModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _about_routing_module__WEBPACK_IMPORTED_MODULE_2__['AboutRoutingModule'],
            ],
          ],
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](AboutModule, {
              declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__['AboutComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _about_routing_module__WEBPACK_IMPORTED_MODULE_2__['AboutRoutingModule'],
              ],
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AboutModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__['AboutComponent']],
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _about_routing_module__WEBPACK_IMPORTED_MODULE_2__['AboutRoutingModule'],
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
//# sourceMappingURL=about-about-module-es2015.js.map
