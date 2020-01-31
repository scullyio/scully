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
  ['blog-blog-module'],
  {
    /***/
    './src/app/blog/blog-list/blog-list.component.ts':
      /*!*******************************************************!*\
    !*** ./src/app/blog/blog-list/blog-list.component.ts ***!
    \*******************************************************/

      /*! exports provided: BlogListComponent */

      /***/
      function srcAppBlogBlogListBlogListComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'BlogListComponent', function() {
          return BlogListComponent;
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

        var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @scullyio/ng-lib */
          '../../dist/scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */
          '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/router */
          '../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );

        var _c0 = function _c0(a0) {
          return [a0];
        };

        function BlogListComponent_a_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'a', 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'article');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'h3');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'h4');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](6, 'date');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'p');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var blog_r6 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'routerLink',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction1'](7, _c0, blog_r6.route)
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](blog_r6.title || blog_r6.route);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind2'](6, 4, blog_r6.published, 'shortDate')
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](blog_r6.description);
          }
        }

        var BlogListComponent =
          /*#__PURE__*/
          (function() {
            function BlogListComponent(srs) {
              _classCallCheck(this, BlogListComponent);

              this.srs = srs;
              this.blogs$ = this.srs.available$.pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['map'])(function(routeList) {
                  return routeList.filter(function(route) {
                    return route.route.startsWith('/blog/');
                  });
                }),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['map'])(function(blogs) {
                  return blogs.sort(function(a, b) {
                    return a.date < b.date ? -1 : 1;
                  });
                })
              );
            }

            _createClass(BlogListComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {},
              },
            ]);

            return BlogListComponent;
          })();

        BlogListComponent.ɵfac = function BlogListComponent_Factory(t) {
          return new (t || BlogListComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__['ScullyRoutesService']
            )
          );
        };

        BlogListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: BlogListComponent,
          selectors: [['app-blog-list']],
          decls: 4,
          vars: 3,
          consts: [
            [3, 'routerLink', 4, 'ngFor', 'ngForOf'],
            [3, 'routerLink'],
          ],
          template: function BlogListComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'h1');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, 'Overview of blog posts');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                BlogListComponent_a_2_Template,
                9,
                9,
                'a',
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](3, 'async');
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngForOf',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](3, 1, ctx.blogs$)
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgForOf'],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__['RouterLinkWithHref'],
          ],
          pipes: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['AsyncPipe'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['DatePipe'],
          ],
          styles: [
            '[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%]:first-child {\n  grid-column: span 3;\n  text-align: center;\n}\n\narticle[_ngcontent-%COMP%] {\n  background-color: royalblue;\n  padding: 5px;\n  border-radius: 5px;\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NhbXBsZUJsb2cvc3JjL2FwcC9ibG9nL2Jsb2ctbGlzdC9ibG9nLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJwcm9qZWN0cy9zYW1wbGVCbG9nL3NyYy9hcHAvYmxvZy9ibG9nLWxpc3QvYmxvZy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdhcDogMTBweDtcbn1cblxuOmhvc3QgaDE6Zmlyc3QtY2hpbGQge1xuICBncmlkLWNvbHVtbjogc3BhbiAzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmFydGljbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbiJdfQ== */',
          ],
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            BlogListComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-blog-list',
                    templateUrl: './blog-list.component.html',
                    styleUrls: ['./blog-list.component.css'],
                  },
                ],
              },
            ],
            function() {
              return [
                {
                  type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__['ScullyRoutesService'],
                },
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/blog/blog-routing.module.ts':
      /*!*********************************************!*\
    !*** ./src/app/blog/blog-routing.module.ts ***!
    \*********************************************/

      /*! exports provided: BlogRoutingModule */

      /***/
      function srcAppBlogBlogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'BlogRoutingModule', function() {
          return BlogRoutingModule;
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

        var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./blog-list/blog-list.component */
          './src/app/blog/blog-list/blog-list.component.ts'
        );
        /* harmony import */

        var _blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./blog.component */
          './src/app/blog/blog.component.ts'
        );

        var routes = [
          {
            path: '',
            component: _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_2__['BlogListComponent'],
          },
          {
            path: ':slug',
            component: _blog_component__WEBPACK_IMPORTED_MODULE_3__['BlogComponent'],
          },
        ];

        var BlogRoutingModule = function BlogRoutingModule() {
          _classCallCheck(this, BlogRoutingModule);
        };

        BlogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: BlogRoutingModule,
        });
        BlogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function BlogRoutingModule_Factory(t) {
            return new (t || BlogRoutingModule)();
          },
          imports: [
            [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'],
          ],
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](BlogRoutingModule, {
              imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
              exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            BlogRoutingModule,
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
    './src/app/blog/blog.component.ts':
      /*!****************************************!*\
    !*** ./src/app/blog/blog.component.ts ***!
    \****************************************/

      /*! exports provided: BlogComponent */

      /***/
      function srcAppBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'BlogComponent', function() {
          return BlogComponent;
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

        var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @scullyio/ng-lib */
          '../../dist/scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js'
        );

        var BlogComponent =
          /*#__PURE__*/
          (function() {
            function BlogComponent(router, route) {
              _classCallCheck(this, BlogComponent);

              this.router = router;
              this.route = route;
            }

            _createClass(BlogComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {
                  // if (window && !window.PrismLoading) {
                  //   window.PrismLoading = true;
                  //   if (window.Prism) {
                  //     /** already loaded nothing to do here.. */
                  //     return;
                  //   }
                  //   /** load prism to do syntax highlighting */
                  //   const lnk = document.createElement('link');
                  //   lnk.href = 'https://cdn.jsdelivr.net/npm/prismjs@1.19.0/themes/prism-twilight.css';
                  //   lnk.rel = 'stylesheet';
                  //   document.head.appendChild(lnk);
                  //   const prism = document.createElement('script');
                  //   prism.src = 'https://cdn.jsdelivr.net/npm/prismjs@1.19.0/prism.min.js';
                  //   document.head.appendChild(prism);
                  //   const prismLoad = document.createElement('script');
                  //   prismLoad.src = 'https://cdn.jsdelivr.net/npm/prismjs@1.19.0/prism.min.js';
                  //   document.head.appendChild(prismLoad);
                  // }
                },
              },
            ]);

            return BlogComponent;
          })();

        BlogComponent.ɵfac = function BlogComponent_Factory(t) {
          return new (t || BlogComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_1__['ActivatedRoute']
            )
          );
        };

        BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: BlogComponent,
          selectors: [['app-blog']],
          decls: 13,
          vars: 0,
          template: function BlogComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'h3');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, 'Scully blog content');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2, '\n');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'hr');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4, '\n\n');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5, '\n');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](6, 'scully-content');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](7, '\n\n');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](8, 'hr');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](9, '\n');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'h4');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](11, 'End of blog content');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](12, '\n');
            }
          },
          directives: [_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__['ScullyContentComponent']],
          styles: [
            'h1[_ngcontent-%COMP%] {\n  color: rgb(51, 6, 37);\n  background-color: rgb(248, 211, 236);\n  padding: 5px;\n  border-radius: 5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NhbXBsZUJsb2cvc3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJwcm9qZWN0cy9zYW1wbGVCbG9nL3NyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIGNvbG9yOiByZ2IoNTEsIDYsIDM3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjExLCAyMzYpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuIl19 */',
          ],
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            BlogComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-blog',
                    templateUrl: './blog.component.html',
                    styleUrls: ['./blog.component.css'],
                    preserveWhitespaces: true,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewEncapsulation'].Emulated,
                  },
                ],
              },
            ],
            function() {
              return [
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router'],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__['ActivatedRoute'],
                },
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/blog/blog.module.ts':
      /*!*************************************!*\
    !*** ./src/app/blog/blog.module.ts ***!
    \*************************************/

      /*! exports provided: BlogModule */

      /***/
      function srcAppBlogBlogModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'BlogModule', function() {
          return BlogModule;
        });
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common */
          '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @scullyio/ng-lib */
          '../../dist/scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js'
        );
        /* harmony import */

        var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./blog-list/blog-list.component */
          './src/app/blog/blog-list/blog-list.component.ts'
        );
        /* harmony import */

        var _blog_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./blog-routing.module */
          './src/app/blog/blog-routing.module.ts'
        );
        /* harmony import */

        var _blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./blog.component */
          './src/app/blog/blog.component.ts'
        );

        var BlogModule = function BlogModule() {
          _classCallCheck(this, BlogModule);
        };

        BlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineNgModule']({
          type: BlogModule,
        });
        BlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjector']({
          factory: function BlogModule_Factory(t) {
            return new (t || BlogModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule'],
              _blog_routing_module__WEBPACK_IMPORTED_MODULE_4__['BlogRoutingModule'],
              _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__['ScullyLibModule'],
            ],
          ],
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵsetNgModuleScope'](BlogModule, {
              declarations: [
                _blog_component__WEBPACK_IMPORTED_MODULE_5__['BlogComponent'],
                _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_3__['BlogListComponent'],
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule'],
                _blog_routing_module__WEBPACK_IMPORTED_MODULE_4__['BlogRoutingModule'],
                _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__['ScullyLibModule'],
              ],
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            BlogModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'],
                args: [
                  {
                    declarations: [
                      _blog_component__WEBPACK_IMPORTED_MODULE_5__['BlogComponent'],
                      _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_3__['BlogListComponent'],
                    ],
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule'],
                      _blog_routing_module__WEBPACK_IMPORTED_MODULE_4__['BlogRoutingModule'],
                      _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__['ScullyLibModule'],
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
//# sourceMappingURL=blog-blog-module-es5.js.map
