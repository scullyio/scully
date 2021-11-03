import { ScullyConfig, enableSpS } from '@scullyio/scully';
import '@scullyio/scully-plugin-extra';
import '@scullyio/scully-plugin-from-data';
import { cpus } from 'os';

const defaultPostRenderers: string[] = []// ['seoHrefOptimise'];

// globalThis.console.log = (...args) => { };


export const config: ScullyConfig = {
  projectName: 'sps-sample',
  outDir: './dist/static/sps-sample',
  defaultPostRenderers,
  spsModulePath: './apps/sps-sample/src/app/app.sps.module.ts',
  maxRenderThreads: 4,
  // maxRenderThreads: cpus().length*3,
  routes: {
    '/demo/:id': {
      type: 'extra',
      numberOfPages: 5,
    },
    // '/docs/:slug': {
    //   type: 'contentFolder',
    //   slug: {
    //     folder: './docs',
    //   },
    //   // postRenderers: ['seoHrefOptimise'],
    // },
    '/user/:id': {
      // Type is mandatory
      type: 'json',
      /**
       * Every parameter in the route must exist here
       */
      id: {
        url: 'http://localhost:8200/users',
        resultsHandler: (raw) => raw.filter((row) => row.id < 3),
        property: 'id',
      },
    },
  },
};


enableSpS();
