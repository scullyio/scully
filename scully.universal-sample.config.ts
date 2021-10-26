import { ScullyConfig } from '@scullyio/scully';
import { removeScripts } from '@scullyio/scully-plugin-remove-scripts';
import '@scullyio/scully-plugin-extra';
import '@scullyio/scully-plugin-from-data';

const defaultPostRenderers: string[] = [];// ['seoHrefOptimise'];

// globalThis.console.log = (...args) => { };

export const config: ScullyConfig = {
  projectName: 'universal-sample',
  outDir: './dist/static/universal-sample',
  defaultPostRenderers,
  maxRenderThreads: 96,
  // maxRenderThreads: 4,
  routes: {
    '/demo/:id': {
      type: 'extra',
      numberOfPages: 200,
    },
    '/docs/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './docs',
      },
    },
    '/user/:id': {
      // Type is mandatory
      type: 'json',
      /**
       * Every parameter in the route must exist here
       */
      id: {
        url: 'http://localhost:8200/users',
        // resultsHandler: (raw) => raw.filter((row) => row.id < 3),
        property: 'id',
      },
    },
  },
};
