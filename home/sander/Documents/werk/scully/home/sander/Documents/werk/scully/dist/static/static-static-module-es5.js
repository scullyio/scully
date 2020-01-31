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
  ['static-static-module'],
  {
    /***/
    './src/app/static/static-routing.module.ts':
      /*!*************************************************!*\
    !*** ./src/app/static/static-routing.module.ts ***!
    \*************************************************/

      /*! exports provided: StaticRoutingModule */

      /***/
      function srcAppStaticStaticRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'StaticRoutingModule', function() {
          return StaticRoutingModule;
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

        var _static_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./static.component */
          './src/app/static/static.component.ts'
        );

        var routes = [
          {
            path: ':topLevel',
            component: _static_component__WEBPACK_IMPORTED_MODULE_2__['StaticComponent'],
          },
          {
            path: '',
            component: _static_component__WEBPACK_IMPORTED_MODULE_2__['StaticComponent'],
            pathMatch: 'full',
          },
        ];

        var StaticRoutingModule = function StaticRoutingModule() {
          _classCallCheck(this, StaticRoutingModule);
        };

        StaticRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: StaticRoutingModule,
        });
        StaticRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function StaticRoutingModule_Factory(t) {
            return new (t || StaticRoutingModule)();
          },
          imports: [
            [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'],
          ],
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](StaticRoutingModule, {
              imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
              exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            StaticRoutingModule,
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
    './src/app/static/static.component.ts':
      /*!********************************************!*\
    !*** ./src/app/static/static.component.ts ***!
    \********************************************/

      /*! exports provided: StaticComponent */

      /***/
      function srcAppStaticStaticComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'StaticComponent', function() {
          return StaticComponent;
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
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */
          '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        var _c0 = function _c0() {
          return ['/home', ''];
        };

        function StaticComponent_a_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'a', 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, 'Top level routes only');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'routerLink',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](1, _c0)
            );
          }
        }

        var _c1 = function _c1() {
          return ['/home', 'all'];
        };

        function StaticComponent_a_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'a', 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, 'All routes');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'routerLink',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](1, _c1)
            );
          }
        }

        var _c2 = function _c2() {
          return ['/home', 'unpublished'];
        };

        function StaticComponent_a_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'a', 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, 'Unpublished routes');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'routerLink',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](1, _c2)
            );
          }
        }

        var _c3 = function _c3(a0) {
          return [a0];
        };

        function StaticComponent_li_11_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'li');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'a', 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'a', 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var r_r4 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'routerLink',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction1'](4, _c3, r_r4.route)
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](r_r4.title || r_r4.route);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'href',
              r_r4.route,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](r_r4.title || r_r4.route);
          }
        }

        var StaticComponent =
          /*#__PURE__*/
          (function() {
            function StaticComponent(srs, route) {
              _classCallCheck(this, StaticComponent);

              this.srs = srs;
              this.route = route;
              this.toplevelOnly = true;
              this.unPublished = false;
              this.available$ = this.srs.available$;
              this.topLevel$ = this.srs.topLevel$;
            }

            _createClass(StaticComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {
                  var _this = this;

                  this.route.params.subscribe(function(params) {
                    _this.toplevelOnly = params.topLevel !== 'all';
                    _this.unPublished = params.topLevel === 'unpublished';
                  });
                },
              },
              {
                key: 'routes',
                get: function get() {
                  return this.unPublished
                    ? this.srs.unPublished$
                    : this.toplevelOnly
                    ? this.topLevel$
                    : this.available$;
                },
              },
            ]);

            return StaticComponent;
          })();

        StaticComponent.ɵfac = function StaticComponent_Factory(t) {
          return new (t || StaticComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__['ScullyRoutesService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['ActivatedRoute']
            )
          );
        };

        StaticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: StaticComponent,
          selectors: [['app-static']],
          decls: 13,
          vars: 6,
          consts: [
            ['class', 'btn', 3, 'routerLink', 4, 'ngIf'],
            [4, 'ngFor', 'ngForOf'],
            [1, 'btn', 3, 'routerLink'],
            [3, 'routerLink'],
            [3, 'href'],
          ],
          template: function StaticComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'h1');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, 'Available routes');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                StaticComponent_a_2_Template,
                2,
                2,
                'a',
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                3,
                StaticComponent_a_3_Template,
                2,
                2,
                'a',
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                4,
                StaticComponent_a_4_Template,
                2,
                2,
                'a',
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'ul');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'li');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'strong');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8, 'routelink');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'strong');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](10, 'full page reload');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                11,
                StaticComponent_li_11_Template,
                5,
                6,
                'li',
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](12, 'async');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                !ctx.toplevelOnly || ctx.unPublished
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.toplevelOnly || ctx.unPublished
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', !ctx.unPublished);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngForOf',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](12, 4, ctx.routes)
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgForOf'],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterLinkWithHref'],
          ],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__['AsyncPipe']],
          styles: [
            'li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 200px 200px;\n}\n\na.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px;\n  margin: 10px 3px;\n  width: 200px;\n  height: 40px;\n  border-radius: 4px;\n  background-color: royalblue;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\na.btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22);\n}\n\na.btn[_ngcontent-%COMP%]:active {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NhbXBsZUJsb2cvc3JjL2FwcC9zdGF0aWMvc3RhdGljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdFQUF3RTtFQUN4RSxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSx3RUFBd0U7QUFDMUUiLCJmaWxlIjoicHJvamVjdHMvc2FtcGxlQmxvZy9zcmMvYXBwL3N0YXRpYy9zdGF0aWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAyMDBweDtcbn1cblxuYS5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAzcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbn1cblxuYS5idG46aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbn1cblxuYS5idG46YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuIl19 */',
          ],
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            StaticComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-static',
                    templateUrl: './static.component.html',
                    styleUrls: ['./static.component.css'],
                  },
                ],
              },
            ],
            function() {
              return [
                {
                  type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__['ScullyRoutesService'],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['ActivatedRoute'],
                },
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/static/static.module.ts':
      /*!*****************************************!*\
    !*** ./src/app/static/static.module.ts ***!
    \*****************************************/

      /*! exports provided: StaticModule */

      /***/
      function srcAppStaticStaticModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'StaticModule', function() {
          return StaticModule;
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

        var _static_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./static-routing.module */
          './src/app/static/static-routing.module.ts'
        );
        /* harmony import */

        var _static_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./static.component */
          './src/app/static/static.component.ts'
        );

        var StaticModule = function StaticModule() {
          _classCallCheck(this, StaticModule);
        };

        StaticModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: StaticModule,
        });
        StaticModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function StaticModule_Factory(t) {
            return new (t || StaticModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _static_routing_module__WEBPACK_IMPORTED_MODULE_2__['StaticRoutingModule'],
            ],
          ],
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](StaticModule, {
              declarations: [_static_component__WEBPACK_IMPORTED_MODULE_3__['StaticComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _static_routing_module__WEBPACK_IMPORTED_MODULE_2__['StaticRoutingModule'],
              ],
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            StaticModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: [_static_component__WEBPACK_IMPORTED_MODULE_3__['StaticComponent']],
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _static_routing_module__WEBPACK_IMPORTED_MODULE_2__['StaticRoutingModule'],
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
//# sourceMappingURL=static-static-module-es5.js.map
