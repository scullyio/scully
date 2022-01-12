# scully-plugin-playwright (Preview/Beta)

The playwright renderer is utilizing the [playwright](https://playwright.dev/) engine to render your pages.

To get started you need to install a few packages into your project.

```bash
npm i @scullyio/scully-plugin-playwright
```

Then next to your `scully.<project-name>.config.ts` and add the following imports
```ts
import '@scullyio/scully-plugin-playwright';
```

Now you can start the render process the same way as you are used too
```bash
   # first build your app, as Scully still needs the static artifacts
npx ng build
   # run Scully
npx scully
```

Our renderer will start rendering your the different routes and output a static site.