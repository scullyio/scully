---
title: Getting Started
order: 200
lang: en
---

# Getting Started with Scully

Welcome to Scully!

Before getting started, please read the [Prerequisites](pre-requisites.md).

**_All about Scully in one video_** : [Building the Fastest Angular Apps Possible](https://thinkster.io/tutorials/scully-webinar-building-the-fastest-angular-apps-possible)

This getting started guide covers topics:

1. [Installation](#installation)
2. [Building](#build)

## Installation

First, open in your terminal in the path of your Angular application and run the following command:

```bash
ng add @scullyio/init
```

This scheme installs and generates everything you need to start using Scully.
Once the installation finishes the following message will be displayed:

```bash
Installing packages for tooling via npm.
Installed packages for tooling via npm.
    Install ng-lib for Angular v9
    ✅️ Added dependency
UPDATE src/app/app.module.ts (466 bytes)
UPDATE src/polyfills.ts (3031 bytes)
UPDATE package.json (1378 bytes)
√ Packages installed successfully.
    ✅️ Update package.json
    ✅️ Created scully configuration file in scully.{{yourApp}}.config.js
CREATE scully.{{yourApp}}.config.js (109 bytes)
UPDATE package.json (1438 bytes)
```

## Generate blog

```bash
ng generate @scullyio/init:blog
```

This command will generate a blog module. [more info here](blog.md)

Once it is generated remove all the content in the `app.component.html` file, and add only the router outlet tag `<router-outlet></router-outlet>`.

### Home page

**It is necessary to create a _route entry point_ because the Angular CLI does not create one by default.**

Create a _Home Module_ with a _Home Component_ and its routes already configured with the following command:

```bash
ng generate module home --route=home --module=app-routing
```

### Configuring the home module as root

Open the `app-routing.module.ts` file and set an empty path attribute for the home route as shown below:

```ts
const routes: Routes = [
  // ...
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
];
```

### Inject the route service

Scully provides a service for accessing generated routes with ease. To use it, open the `home.component.ts` file and add the following code:

```ts
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';

@Component()
//...
export class HomeComponent implements OnInit {
  links$: Observable<any> = this.scully.available$;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {
    // debug current pages
    this.links$.subscribe(links => {
      console.log(links);
    });
  }
}
```

Now, it is possible to loop through the links inside the template by opening the `home.component.html` file and adding the following code:

```html
<p>home works!</p>

<ul>
  <li *ngFor="let page of links$ | async">{{ page.route }}</li>
</ul>
```

**NOTE:** If you don't add any route, scully will pre-render 0 pages.

## Build

At this point, you have your Angular project with Scully successfully installed.

#### IMPORTANT:

_Scully requires the distribution files in the `./dist/my-scully-app` folder._

**NOTE:** If the angular application outputs the distribution files directly into the root folder `./dist`. Scully is not able to copy all files. This is an OS file-system issue.

Build the application in order to generate the distribution files:

```bash
ng build
```

Now, lets build Scully and turn your Angular app into a pre-rendered static site.

```bash
npm run scully
```

Congratulations! You have turned your Angular application into a wicked fast pre-rendered one thanks to Scully.

The built version is in the `./dist/static` folder. This folder contains all the pages in the site.

**NOTE:** In case of any errors or warnings during the build process, please follow the instructions in the errors/warnings section or [submit an issue](https://github.com/scullyio/scully/issues/new/choose).

#### Serving the content

Use `npm run scully serve` for serve your content.
Scully serve is an option for create two web servers, one for your angular app and the other for the scully build.

**Extra Credit**: While serving the static app, [disable JavaScript](https://developers.google.com/web/tools/chrome-devtools/javascript/disable)
and make sure that the site's navigation still works and most parts of it should still work without JS enabled.

**Extra credits**: If you want to debug your blog page using ngServe, make sure you do a full run off `npm run scully` and then start `npm run scully:serve`. Then scully will use the generated HTML to fill in the content in your `ng serve` session.
