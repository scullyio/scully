---
title: Using blog data in an Angular template
published: true
lang: en
position: 100
---

# Using blog data in an Angular template

## Injecting Scully's [Route Service](docs/Reference/ngLib/scully-routes-service)

Scully provides a service for accessing generated routes with ease. To use it, open the `home.component.ts` file we made earlier and add the following code:

```typescript
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component()
//...
export class HomeComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scully.available$;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {
    // debug current pages
    this.links$.subscribe((links) => {
      console.log(links);
    });
  }
}
```

We can see `ScullyRoutesService.available$` returns an Observable of an array of [`ScullyRoute`](https://github.com/scullyio/scully/blob/main/libs/ng-lib/src/lib/route-service/scully-routes.service.ts)s, the interface of which looks like this:

```typescript
export interface ScullyRoute {
  route: string;
  title?: string;
  slugs?: string[];
  published?: boolean;
  slug?: string;
  sourceFile?: string;
  lang?: string;
  [prop: string]: any;
}
```

To extract data from the available `links$` Scully has rendered, we can loop through them inside the template by opening the `home.component.html` file and adding the following code:

```html
<p>home works!</p>

<ul>
  <li *ngFor="let page of links$ | async">{{ page.route }}</li>
</ul>
```

**NOTE:** If you don't add any route, Scully will pre-render 0 pages.

## Adding metadata to ScullyRoutes

At the very top of each `.md` blog post file, between the opening and closing `---` indicators, each line of text corresponds to a property we can pull out of `ScullyRoutesService.available$`.

For example, a `.md` file beginning with:

```
---
title: blog title
description: blog description
published: true
arbitraryValue: single value
arbitraryArray: [first item, second item]
---
```

... lets us use these values in our template like this:

```html
<ul>
  <li *ngFor="let page of links$ | async">
    {{ page.route }} {{ page.arbitraryValue }}
    <span *ngFor="let arrayItem of page.arbitraryArray">
      {{ arrayItem }}
    </span>
  </li>
</ul>
```
