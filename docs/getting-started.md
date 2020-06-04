---
title: Getting Started
order: 200
lang: en
---

# Getting Started with Scully

Welcome to Scully!

Before getting started, please read the [Prerequisites](pre-requisites.md).

**_All about Scully in one video_** : [Building the Fastest Angular Apps Possible](https://thinkster.io/tutorials/scully-webinar-building-the-fastest-angular-apps-possible)

This getting started guide covers the following topics:

1. [Installation](#installation)
2. [Building](#build)

## Installation

First, open an Angular application's path in your terminal and run the following command:

```bash
ng add @scullyio/init
```

After a successful installation the following message will be displayed:

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

## Generating a Blog

Run the following command to generate a blog module.

[more info here](blog.md)

```bash
ng generate @scullyio/init:blog
```

Now, remove the `app.component.html` file's content just leave the `<router-outlet></router-outlet>` tag.

[more info here](blog.md)

### Creating the Application's Entry Point (Home Page)

Create a _Home Module_ with routes configured and with a _Home Component_ with the following command:

```bash
ng generate module home --route=home --module=app-routing
```

**Scully depends on the _route entry point_.**

### Configuring the Home Module as the Project's Root

Open the `app-routing.module.ts` file and set an empty path attribute for the home route as shown below:

```typescript
const routes: Routes = [
  // ...
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];
```

### Injecting Scully's Route Service

Scully provides a service for accessing generated routes with ease.

Open the `home.component.ts` file and add the following code:

```typescript
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

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

**NOTE:** If Scully's route service is not added, it does not pre-render pages.

## Building the Scully Application

At this point, the Angular project with Scully is ready.

Fist, build the Angular application by running the following command:

```bash
ng build
```

Now, build Scully and turn the Angular app into a pre-rendered static site.

```bash
npm run scully
```

Congratulations! You have turned your Angular application into a wicked fast pre-rendered one thanks to Scully.

The built version of the static site is located in the `./dist/static` folder. It contains all the static pages.

**NOTE:** In case of any errors or warnings during the build process, please follow the instructions in the errors/warnings section or [submit an issue](https://github.com/scullyio/scully/issues/new/choose).

## Serving the Static Site

Serve the content of the static site by running:

```bash
npm run scully serve
```

The above command creates two web servers, one for the Angular app and one for the Scully app.

### Disabling JS

**Extra**: While serving the Scully app, [disable JavaScript](https://developers.google.com/web/tools/chrome-devtools/javascript/disable)
and the site's navigation still works. More importantly, most parts of the site still work even though JS has been disabled.

### Debugging the Scully App

**Extra**: In order to debug the Scully application with ngServe, make sure to run:

```bash
npm run scully
```

Then, start the server:

```bash
npm run scully:serve
```

Scully will use the generated HTML to fill in the `ng serve`'s session content.
