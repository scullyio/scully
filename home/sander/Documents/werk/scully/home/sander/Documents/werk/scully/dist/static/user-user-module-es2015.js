(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['user-user-module'],
  {
    /***/ './src/app/user/post/post.component.ts':
      /*!*********************************************!*\
  !*** ./src/app/user/post/post.component.ts ***!
  \*********************************************/
      /*! exports provided: PostComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PostComponent',
          function() {
            return PostComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ '../../node_modules/rxjs/_esm2015/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ '../../node_modules/rxjs/_esm2015/operators/index.js'
        );
        /* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @scullyio/ng-lib */ '../../dist/scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/router */ '../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/common/http */ '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/common */ '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function PostComponent_section_0_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'section');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'h4');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'p');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const post_r12 = ctx.ngIf;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](post_r12.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](post_r12.body);
          }
        }
        class PostComponent {
          constructor(route, http, transferState) {
            this.route = route;
            this.http = http;
            this.transferState = transferState;
            this.postId$ = this.route.params.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['pluck'])('post'),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['filter'])(
                val => ![undefined, null].includes(val)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(val => parseInt(val, 10)),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['shareReplay'])(1)
            );
            this.apiPosts$ = this.postId$.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['switchMap'])(id =>
                this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError'])(() =>
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['of'])({
                      id,
                      title: 'not found',
                    })
                  )
                )
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['shareReplay'])(1)
            );
            // This is an example of using TransferState
            this.post$ = Object(_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__['isScullyGenerated'])()
              ? this.transferState.getState('post')
              : this.apiPosts$.pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['tap'])(post =>
                    this.transferState.setState('post', post)
                  )
                );
            console.log('post inits');
          }
          ngOnInit() {}
        }
        PostComponent.ɵfac = function PostComponent_Factory(t) {
          return new (t || PostComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_4__['ActivatedRoute']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_5__['HttpClient']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__['TransferStateService']
            )
          );
        };
        PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: PostComponent,
          selectors: [['app-post']],
          decls: 2,
          vars: 3,
          consts: [[4, 'ngIf']],
          template: function PostComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                0,
                PostComponent_section_0_Template,
                5,
                2,
                'section',
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](1, 'async');
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](1, 1, ctx.post$)
              );
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__['NgIf']],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__['AsyncPipe']],
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zYW1wbGVCbG9nL3NyYy9hcHAvdXNlci9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyJ9 */',
          ],
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PostComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-post',
                    templateUrl: './post.component.html',
                    styleUrls: ['./post.component.css'],
                  },
                ],
              },
            ],
            function() {
              return [
                {type: _angular_router__WEBPACK_IMPORTED_MODULE_4__['ActivatedRoute']},
                {type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__['HttpClient']},
                {type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__['TransferStateService']},
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ './src/app/user/posts/posts.component.ts':
      /*!***********************************************!*\
  !*** ./src/app/user/posts/posts.component.ts ***!
  \***********************************************/
      /*! exports provided: PostsComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PostsComponent',
          function() {
            return PostsComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @scullyio/ng-lib */ '../../dist/scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */ '../../node_modules/rxjs/_esm2015/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ '../../node_modules/rxjs/_esm2015/operators/index.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/router */ '../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/common/http */ '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/common */ '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        const _c0 = function(a1) {
          return ['post', a1];
        };
        function PostsComponent_section_2_li_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'li');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'a', 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const post_r10 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'routerLink',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction1'](2, _c0, post_r10.id)
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](post_r10.title);
          }
        }
        function PostsComponent_section_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'section');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'ul');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              2,
              PostsComponent_section_2_li_2_Template,
              3,
              4,
              'li',
              1
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const posts_r8 = ctx.ngIf;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', posts_r8);
          }
        }
        class PostsComponent {
          constructor(route, http, transferState) {
            this.route = route;
            this.http = http;
            this.transferState = transferState;
            this.userId$ = this.route.params.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['pluck'])('userId'),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['filter'])(
                val => ![undefined, null].includes(val)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(val => parseInt(val, 10)),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['shareReplay'])(1)
            );
            this.apiPosts$ = this.userId$.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['switchMap'])(id =>
                this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['catchError'])(() =>
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['of'])({
                      id,
                      title: 'not found',
                    })
                  )
                )
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['shareReplay'])(1)
            );
            // This is an example of using TransferState
            this.posts$ = Object(_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__['isScullyGenerated'])()
              ? this.transferState.getState('posts')
              : this.apiPosts$.pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['tap'])(posts =>
                    this.transferState.setState('posts', posts)
                  )
                );
          }
          ngOnInit() {}
        }
        PostsComponent.ɵfac = function PostsComponent_Factory(t) {
          return new (t || PostsComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_4__['ActivatedRoute']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_5__['HttpClient']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__['TransferStateService']
            )
          );
        };
        PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: PostsComponent,
          selectors: [['app-posts']],
          decls: 4,
          vars: 3,
          consts: [
            [4, 'ngIf'],
            [4, 'ngFor', 'ngForOf'],
            [3, 'routerLink'],
          ],
          template: function PostsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'h4');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, 'User posts');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                PostsComponent_section_2_Template,
                3,
                1,
                'section',
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](3, 'async');
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](3, 1, ctx.posts$)
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__['NgForOf'],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__['RouterLinkWithHref'],
          ],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__['AsyncPipe']],
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zYW1wbGVCbG9nL3NyYy9hcHAvdXNlci9wb3N0cy9wb3N0cy5jb21wb25lbnQuY3NzIn0= */',
          ],
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PostsComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-posts',
                    templateUrl: './posts.component.html',
                    styleUrls: ['./posts.component.css'],
                  },
                ],
              },
            ],
            function() {
              return [
                {type: _angular_router__WEBPACK_IMPORTED_MODULE_4__['ActivatedRoute']},
                {type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__['HttpClient']},
                {type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__['TransferStateService']},
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ './src/app/user/user-routing.module.ts':
      /*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
      /*! exports provided: UserRoutingModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UserRoutingModule',
          function() {
            return UserRoutingModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ '../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./user.component */ './src/app/user/user.component.ts'
        );
        /* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./users/users.component */ './src/app/user/users/users.component.ts'
        );
        /* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./posts/posts.component */ './src/app/user/posts/posts.component.ts'
        );
        /* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./post/post.component */ './src/app/user/post/post.component.ts'
        );

        const routes = [
          {path: '', component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__['UsersComponent']},
          {
            path: ':userId',
            component: _user_component__WEBPACK_IMPORTED_MODULE_2__['UserComponent'],
            children: [
              {
                path: '',
                component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__['PostsComponent'],
                pathMatch: 'full',
              },
              {
                path: 'friend/:friendCode',
                component: _user_component__WEBPACK_IMPORTED_MODULE_2__['UserComponent'],
              },
              {
                path: 'post/:postId',
                component: _post_post_component__WEBPACK_IMPORTED_MODULE_5__['PostComponent'],
              },
            ],
          },
        ];
        class UserRoutingModule {}
        UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: UserRoutingModule,
        });
        UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function UserRoutingModule_Factory(t) {
            return new (t || UserRoutingModule)();
          },
          imports: [
            [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'],
          ],
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](UserRoutingModule, {
              imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
              exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            UserRoutingModule,
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

    /***/ './src/app/user/user.component.ts':
      /*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
      /*! exports provided: UserComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UserComponent',
          function() {
            return UserComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @scullyio/ng-lib */ '../../dist/scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */ '../../node_modules/rxjs/_esm2015/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ '../../node_modules/rxjs/_esm2015/operators/index.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/router */ '../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/common/http */ '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/common */ '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function UserComponent_section_0_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'section');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'h4');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2, 'User Data');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'section', 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'label');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5, 'Id');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'p');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'label');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](9, 'Name');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'p');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'label');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](13, 'email');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'p');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](16, 'label');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](17, 'company');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](18, 'p');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](20, 'strong');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const user_r16 = ctx.ngIf;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](user_r16.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](user_r16.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](user_r16.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](user_r16.company.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](user_r16.company.catchPhrase);
          }
        }
        function UserComponent_ng_template_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'section');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, ' Loading ... ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }
        const _c0 = function(a0) {
          return [a0];
        };
        class UserComponent {
          constructor(route, http, transferState) {
            this.route = route;
            this.http = http;
            this.transferState = transferState;
            this.userId$ = this.route.params.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['pluck'])('userId'),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['filter'])(
                val => ![undefined, null].includes(val)
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(val => parseInt(val, 10)),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['shareReplay'])(1)
            );
            this.next$ = this.userId$.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(id => Math.min(+id + 1, 10))
            );
            this.prev$ = this.userId$.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(id => Math.max(1, +id - 1))
            );
            this.apiUser$ = this.userId$.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['switchMap'])(id =>
                this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['catchError'])(() =>
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['of'])({
                      id: id,
                      name: 'not found',
                    })
                  )
                )
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['shareReplay'])(1)
            );
            // This is an example of using TransferState
            this.user$ = Object(_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__['isScullyGenerated'])()
              ? this.transferState.getState('user')
              : this.apiUser$.pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['tap'])(user =>
                    this.transferState.setState('user', user)
                  )
                );
          }
          ngOnInit() {}
        }
        UserComponent.ɵfac = function UserComponent_Factory(t) {
          return new (t || UserComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_4__['ActivatedRoute']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_5__['HttpClient']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__['TransferStateService']
            )
          );
        };
        UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: UserComponent,
          selectors: [['app-user']],
          decls: 15,
          vars: 20,
          consts: [
            [4, 'ngIf', 'ngIfElse'],
            ['loading', ''],
            [3, 'routerLink'],
            ['id', 'sub'],
            ['id', 'user'],
          ],
          template: function UserComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                0,
                UserComponent_section_0_Template,
                22,
                5,
                'section',
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](1, 'async');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                UserComponent_ng_template_2_Template,
                2,
                0,
                'ng-template',
                null,
                1,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'a', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](5, 'async');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](7, 'async');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'a', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](9, 'async');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](10);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](11, 'async');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](12, 'hr');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'section', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](14, 'router-outlet');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
            if (rf & 2) {
              const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](1, 6, ctx.user$)
              )('ngIfElse', _r14);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'routerLink',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction1'](
                  16,
                  _c0,
                  '/user/' + _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](5, 8, ctx.prev$)
                )
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
                'Previous (',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](7, 10, ctx.prev$),
                ')'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'routerLink',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction1'](
                  18,
                  _c0,
                  '/user/' + _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](9, 12, ctx.next$)
                )
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
                'Next (',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](11, 14, ctx.next$),
                ')'
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__['NgIf'],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__['RouterLinkWithHref'],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__['RouterOutlet'],
          ],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__['AsyncPipe']],
          styles: [
            'a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px;\n  margin: 10px 3px;\n  width: 100px;\n  border-radius: 4px;\n  background-color: royalblue;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\na[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\na[_ngcontent-%COMP%]:active {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NhbXBsZUJsb2cvc3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdFQUF3RTtFQUN4RSxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSx3RUFBd0U7QUFDMUUiLCJmaWxlIjoicHJvamVjdHMvc2FtcGxlQmxvZy9zcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDEwcHggM3B4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xufVxuXG5hOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbn1cblxuYTphY3RpdmUge1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG4iXX0= */',
            "#user[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 10rem 1fr;\n    grid-template-rows: repeat(4, 1rem);\n  }\n\n  #user[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n\n  #user[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]::after {\n    content: ':';\n  }\n\n  strong[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 5px;\n    border-radius: 5px;\n    background-color: #afafaf;\n    margin: 10px;\n  }\n  #sub[_ngcontent-%COMP%] {\n    padding: 20px;\n  }",
          ],
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            UserComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-user',
                    templateUrl: './user.component.html',
                    styleUrls: ['./user.component.css'],
                  },
                ],
              },
            ],
            function() {
              return [
                {type: _angular_router__WEBPACK_IMPORTED_MODULE_4__['ActivatedRoute']},
                {type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__['HttpClient']},
                {type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__['TransferStateService']},
              ];
            },
            null
          );
        })();

        /***/
      },

    /***/ './src/app/user/user.module.ts':
      /*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
      /*! exports provided: UserModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'UserModule', function() {
          return UserModule;
        });
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common */ '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./post/post.component */ './src/app/user/post/post.component.ts'
        );
        /* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./posts/posts.component */ './src/app/user/posts/posts.component.ts'
        );
        /* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./user-routing.module */ './src/app/user/user-routing.module.ts'
        );
        /* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./user.component */ './src/app/user/user.component.ts'
        );
        /* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./users/users.component */ './src/app/user/users/users.component.ts'
        );

        class UserModule {}
        UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineNgModule']({type: UserModule});
        UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjector']({
          factory: function UserModule_Factory(t) {
            return new (t || UserModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule'],
              _user_routing_module__WEBPACK_IMPORTED_MODULE_4__['UserRoutingModule'],
            ],
          ],
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵsetNgModuleScope'](UserModule, {
              declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_5__['UserComponent'],
                _users_users_component__WEBPACK_IMPORTED_MODULE_6__['UsersComponent'],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__['PostsComponent'],
                _post_post_component__WEBPACK_IMPORTED_MODULE_2__['PostComponent'],
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule'],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_4__['UserRoutingModule'],
              ],
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            UserModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'],
                args: [
                  {
                    declarations: [
                      _user_component__WEBPACK_IMPORTED_MODULE_5__['UserComponent'],
                      _users_users_component__WEBPACK_IMPORTED_MODULE_6__['UsersComponent'],
                      _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__['PostsComponent'],
                      _post_post_component__WEBPACK_IMPORTED_MODULE_2__['PostComponent'],
                    ],
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule'],
                      _user_routing_module__WEBPACK_IMPORTED_MODULE_4__['UserRoutingModule'],
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

    /***/ './src/app/user/users/users.component.ts':
      /*!***********************************************!*\
  !*** ./src/app/user/users/users.component.ts ***!
  \***********************************************/
      /*! exports provided: UsersComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UsersComponent',
          function() {
            return UsersComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ '../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @scullyio/ng-lib */ '../../dist/scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */ '../../node_modules/rxjs/_esm2015/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ '../../node_modules/rxjs/_esm2015/operators/index.js'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common/http */ '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/common */ '../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/router */ '../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );

        function UsersComponent_section_2_tr_8_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'tr');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'td');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'td');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'a', 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const user_r20 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](user_r20.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('routerLink', user_r20.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', user_r20.name, '');
          }
        }
        function UsersComponent_section_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'section');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'table');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'thead');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'th');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4, 'Id');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'th');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, 'Username');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'tbody');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              8,
              UsersComponent_section_2_tr_8_Template,
              6,
              3,
              'tr',
              1
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const users_r18 = ctx.ngIf;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', users_r18);
          }
        }
        class UsersComponent {
          constructor(http, transferState) {
            this.http = http;
            this.transferState = transferState;
            this.apiUsers$ = this.http.get(`https://jsonplaceholder.typicode.com/users`).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['catchError'])(() =>
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['of'])([])
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['shareReplay'])(1)
            );
            // This is an example of using TransferState
            this.users$ = Object(_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__['isScullyGenerated'])()
              ? this.transferState.getState('users')
              : this.apiUsers$.pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['tap'])(user =>
                    this.transferState.setState('users', user)
                  )
                );
          }
          ngOnInit() {}
        }
        UsersComponent.ɵfac = function UsersComponent_Factory(t) {
          return new (t || UsersComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_4__['HttpClient']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__['TransferStateService']
            )
          );
        };
        UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: UsersComponent,
          selectors: [['app-users']],
          decls: 4,
          vars: 3,
          consts: [
            [4, 'ngIf'],
            [4, 'ngFor', 'ngForOf'],
            [3, 'routerLink'],
          ],
          template: function UsersComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'h1');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, 'Users');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                UsersComponent_section_2_Template,
                9,
                1,
                'section',
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](3, 'async');
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](3, 1, ctx.users$)
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__['NgForOf'],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__['RouterLinkWithHref'],
          ],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__['AsyncPipe']],
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zYW1wbGVCbG9nL3NyYy9hcHAvdXNlci91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIn0= */',
          ],
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            UsersComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-users',
                    templateUrl: './users.component.html',
                    styleUrls: ['./users.component.css'],
                  },
                ],
              },
            ],
            function() {
              return [
                {type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__['HttpClient']},
                {type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_1__['TransferStateService']},
              ];
            },
            null
          );
        })();

        /***/
      },
  },
]);
//# sourceMappingURL=user-user-module-es2015.js.map
