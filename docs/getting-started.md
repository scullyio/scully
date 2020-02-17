# Scully - Getting Started

[Español](getting-started_es.md)

## Prerequisites

The first thing you need to get started with Scully is a working Angular app using **Angular 8.x.x** or **9.x.x** and **Node 12.x.x**

You can create a new Angular 9 app using the following command:

```bash
npx -p @angular/cli ng new my-scully-app
```

If that fails, you can install the Angular CLI globally and create a new app with that version.

```
npm install -g @angular/cli
ng new my-scully-app
```

Find more info here [👉 angular.io/cli](https://angular.io/cli)

**NOTE:** Scully will use Chromium. Make sure your Operating System (and its restrictions by your administrator) allow installing and executing Chromium.

This getting started doc covers the three steps to adding Scully into your project.

1. [Installation](#installation)
2. [Build](#build)
3. [Test](#test)

## Installation

To install Scully, execute the following command from the root directory of your Angular project (in a terminal window):

```bash
ng add @scullyio/init
```

The command above installs dependencies and configures the files needed to start building with Scully (_we will further elaborate on this in upcoming releases_).

If the installation was successful a message similar to this one will be displayed:

```bash
Installed packages for tooling via yarn.
✔ Added dependency
✔ Import HttpClientModule into root module
UPDATE package.json (1447 bytes)
UPDATE src/app/app.module.ts (472 bytes)
UPDATE src/polyfills.ts (3035 bytes)
UPDATE src/app/app.component.ts (325 bytes)
  ✔ Packages installed successfully.
  ✔ Update package.json
CREATE scully.config.js (65 bytes)
UPDATE package.json (1507 bytes)
```

#### IMPORTANT: _Scully requires the router to be present in your application, don't forget to add it._

#### IMPORTANT: _Scully requires the distribution files to be in a subfolder of `./dist`_

If you have an angular app, that outputs the distribution files directly into to root of `./dist` Scully can't copy all of the dist files. This is an OS file-system issue. We can't copy recursively into a subfolder of dist. The solution is set the option `architect->build->options->outputPath` to a subfolder.

## ng g @scullyio/init:blog

This command will generate a blog module. [more info here](https://github.com/scullyio/scully/blob/master/docs/blog.md)

Once it's generated you can open the default `app.component.html` created by angular-cli and remove the whole placeholder leaving only the router outlet tag `<router-outlet></router-outlet>`

### Home page

Since the default template from angular-cli doesn't ship an entry point for route, it might be confusing to get scully working on the very first shot

```ts
ng g m home --route=home --module=app-routing
```

This command will generate the new home page module plus a new component with a route configured

### Configure home as root

Open `app-routing.module.ts` and let the path attribute empty for the home route

```ts
const routes: Routes = [
  // ...
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
];
```

### Inject route service

Scully provides a service to easy get access on generated routes. To list these in your template open `home.component.ts` by adding the following code

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

and then loop inside `home.component.html`

```html
<p>home works!</p>

<ul>
  <li *ngFor="let page of links$ | async">{{ page.route }}</li>
</ul>
```

## Build

By now you should have your Angular project with Scully successfully installed, so let us run a Scully build and turn your site into a
pre-rendered Angular app.

Since Scully runs based on a build of your app, the first step is to build your Angular project (with added routes), subsequently running the Scully build.

```bash
ng build
npm run scully
```

That's it, you're done! In your project directory, you should now have a `/dist/static` folder containing the built version
of your app.

**NOTE:** If you had any errors or warnings during the build phase, please follow the instructions in the errors/warnings
(if applicable) or [submit an issue](https://github.com/scullyio/scully/issues/new/choose).

**NOTE:** If you don't add any route, scully will pre-render 0 pages.

## Test

Now that your project has been pre-rendered, you can validate the build by either:

#### Serving the contents

By utilizing something like [http-server](https://www.npmjs.com/package/http-server) you can serve the contents of your
`dist/static` folder. All of the routes in your non-pre-rendered Angular app should still work. Not all apps are
capable of running without

[//]: # 'Missing text for the line above'

**Extra Credit**: While serving your app, [disable JavaScript](https://developers.google.com/web/tools/chrome-devtools/javascript/disable)
and make sure that it still works. This is the goal for your app, to run with JavaScript disabled. Most parts of your app should still work without JS enabled.

#### Browsing the contents

Browse the contents of your `dist/static` directory and make sure that all of your pages were pre-rendered and saved to
HTML correctly.

---

[Full Documentation ➡️](scully.md)
