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
  ['demo-demo-module'],
  {
    /***/
    './src/app/demo/demo-routing.module.ts':
      /*!*********************************************!*\
    !*** ./src/app/demo/demo-routing.module.ts ***!
    \*********************************************/

      /*! exports provided: DemoRoutingModule */

      /***/
      function srcAppDemoDemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'DemoRoutingModule', function() {
          return DemoRoutingModule;
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

        var _demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./demo.component */
          './src/app/demo/demo.component.ts'
        );

        var routes = [
          {
            path: ':id',
            component: _demo_component__WEBPACK_IMPORTED_MODULE_2__['DemoComponent'],
          },
        ];

        var DemoRoutingModule = function DemoRoutingModule() {
          _classCallCheck(this, DemoRoutingModule);
        };

        DemoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: DemoRoutingModule,
        });
        DemoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function DemoRoutingModule_Factory(t) {
            return new (t || DemoRoutingModule)();
          },
          imports: [
            [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'],
          ],
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](DemoRoutingModule, {
              imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
              exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            DemoRoutingModule,
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
    './src/app/demo/demo.component.ts':
      /*!****************************************!*\
    !*** ./src/app/demo/demo.component.ts ***!
    \****************************************/

      /*! exports provided: DemoComponent */

      /***/
      function srcAppDemoDemoComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'DemoComponent', function() {
          return DemoComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */
          '../../node_modules/rxjs/_esm2015/operators/index.js'
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

        var _c0 = function _c0(a1) {
          return ['/demo', a1];
        };

        var DemoComponent =
          /*#__PURE__*/
          (function() {
            function DemoComponent(route) {
              var _this = this;

              _classCallCheck(this, DemoComponent);

              this.route = route;
              this.pageId = this.route.snapshot.params.id;
              this.pageId$ = this.route.params.pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['pluck'])('id'),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['tap'])(function(id) {
                  return (_this.pageId = id);
                })
              );
            }

            _createClass(DemoComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {},
              },
            ]);

            return DemoComponent;
          })();

        DemoComponent.ɵfac = function DemoComponent_Factory(t) {
          return new (t || DemoComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['ActivatedRoute']
            )
          );
        };

        DemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: DemoComponent,
          selectors: [['app-demo']],
          decls: 5,
          vars: 9,
          consts: [[3, 'routerLink']],
          template: function DemoComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'span');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](2, 'async');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'a', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](4, 'a', 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
                ' ',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](2, 3, ctx.pageId$),
                '\n'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'routerLink',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction1'](5, _c0, ctx.pageId - 0 - 1)
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'routerLink',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction1'](7, _c0, ctx.pageId - 0 + 1)
              );
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterLinkWithHref']],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__['AsyncPipe']],
          styles: [
            '[_nghost-%COMP%] {\n  height: 100%;\n  display: grid;\n  place-content: center center;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n}\n\nspan[_ngcontent-%COMP%] {\n  grid-area: 1/1/2/3;\n  text-align: center;\n  font-size: 80vw;\n  line-height: 85vh;\n}\n\na[_ngcontent-%COMP%] {\n  grid-area: 1/1/1/2;\n  display: block;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  cursor: w-resize;\n}\n\na[_ngcontent-%COMP%]:last-child {\n  grid-column: 2/3;\n  cursor: e-resize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NhbXBsZUJsb2cvc3JjL2FwcC9kZW1vL2RlbW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoicHJvamVjdHMvc2FtcGxlQmxvZy9zcmMvYXBwL2RlbW8vZGVtby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG59XG5cbnNwYW4ge1xuICBncmlkLWFyZWE6IDEvMS8yLzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA4MHZ3O1xuICBsaW5lLWhlaWdodDogODV2aDtcbn1cblxuYSB7XG4gIGdyaWQtYXJlYTogMS8xLzEvMjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogdy1yZXNpemU7XG59XG5cbmE6bGFzdC1jaGlsZCB7XG4gIGdyaWQtY29sdW1uOiAyLzM7XG4gIGN1cnNvcjogZS1yZXNpemU7XG59XG4iXX0= */',
          ],
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            DemoComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-demo',
                    templateUrl: './demo.component.html',
                    styleUrls: ['./demo.component.css'],
                  },
                ],
              },
            ],
            function() {
              return [
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
    './src/app/demo/demo.module.ts':
      /*!*************************************!*\
    !*** ./src/app/demo/demo.module.ts ***!
    \*************************************/

      /*! exports provided: DemoModule */

      /***/
      function srcAppDemoDemoModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'DemoModule', function() {
          return DemoModule;
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

        var _demo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./demo-routing.module */
          './src/app/demo/demo-routing.module.ts'
        );
        /* harmony import */

        var _demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./demo.component */
          './src/app/demo/demo.component.ts'
        );

        var DemoModule = function DemoModule() {
          _classCallCheck(this, DemoModule);
        };

        DemoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: DemoModule,
        });
        DemoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function DemoModule_Factory(t) {
            return new (t || DemoModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _demo_routing_module__WEBPACK_IMPORTED_MODULE_2__['DemoRoutingModule'],
            ],
          ],
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](DemoModule, {
              declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_3__['DemoComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _demo_routing_module__WEBPACK_IMPORTED_MODULE_2__['DemoRoutingModule'],
              ],
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            DemoModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_3__['DemoComponent']],
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _demo_routing_module__WEBPACK_IMPORTED_MODULE_2__['DemoRoutingModule'],
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
//# sourceMappingURL=demo-demo-module-es5.js.map
