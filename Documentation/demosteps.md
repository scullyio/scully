# Demo run **trough**

```bash

ng new demo
cd demo

# start `ng build --prod --sourceMap --watch` in another terminal
# we are working with the build files

ng add @herodevs/scully-generate
# Lets make it look a bit better
# replace app-component.html with snippet-2
# add snippet-3 to styles.css

# Lets add a few routes to make it interesting
ng g m about --route about --module app.module
ng g m sponsoring --route sponsoring --module app.module

# hmm, perhaps we should make some index?
ng g m home --route home --module app.module
# paste snippet-4 into home.component.ts
# replace home.component.html with snippet-5

ng g @herodevs/scully-generate:blog
# the following steps should be done by the blog generator
# add snippet-1 to app-routing.module

ng build
npm run scully
# serve up the static site.
npm run scully serve 

```

Bonus round, json plugin demo
```bash
# create user route and component:
ng g m user --route user --module app.module
cd src/app/user
cd src/app/user

# open user-routing.module and add the route:
#  { path: ":userId", component: UserDetailComponent }

# open user-detail.component.ts, and pase in snippet-6


```



snippet-1:
```typescript
  {
    path: "blog",
    loadChildren: () =>
      import("./blog-module/blog.module").then(m => m.BlogModule)
  }
```

snippet-2:
```html
<style>
  :host {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 80px 1fr 80px;
  }
  :host>header,
  :host>footer {
    display: grid;
    place-items: center center;
    background-color: royalblue;
    color: whitesmoke;
    width: 100%;
    height:80px;
  }
  :host>footer {
    place-items: center right;
    margin-right: 30px;
  }
  main {
    background-color: whitesmoke;
    color: rgb(4, 12, 36);
    padding: 10px;
  }
</style>
<header><h1>Demo</h1></header>

<main>
  <router-outlet></router-outlet>
</main>

<footer><h3>with ♥ from Herodevs</h3></footer>
```

snippet-3
```css
body {
  padding: 0;
  margin: 0;
}
```

snippet-4
```typescript
  index$ = this.crs.available$;
  constructor(private crs: ScullyRoutesService) {}
  /** NTS: do not forget to add the import! **/
```

snippet-5
```html
<h1> All pages in my blog site</h1>

<dl>
  <dt *ngFor="let item of index$|async"> <a [routerLink]="[item.route]">{{item.route}}</a></dt>
</dl>
```

snippit-6
```typescript
  user$ = this.route.params.pipe(
    pluck('userId'),
    filter(Boolean),
    switchMap(id =>
      this.http.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(
        catchError(() =>
          of({
            id: 11,
            name: 'not found',
          })
        )
      )
    ),
    shareReplay(1)
  );


  id$ = this.user$.pipe(
    // tslint:disable-next-line: no-string-literal
    map(user => user.id),
    shareReplay(1)
  );
  next$ = this.id$.pipe(map(id => Math.min(+id + 1, 10)));
  prev$ = this.id$.pipe(map(id => Math.max(1, +id - 1)));

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  // NTS: check imports
  ```
