import { HandledRoute, registerPlugin, scullyConfig, ScullyConfig } from '@scullyio/scully';
import { removeScripts } from '@scullyio/scully-plugin-remove-scripts';
import '@scullyio/scully-plugin-extra';
import '@scullyio/scully-plugin-from-data';
import { basename, join } from 'path';

const defaultPostRenderers: string[] = [];// ['seoHrefOptimise'];

// globalThis.console.log = (...args) => { };

export const config: ScullyConfig = {
  projectName: 'universal-sample',
  outDir: './dist/static/universal-sample',
  defaultPostRenderers,
  spsModulePath: './apps/universal-sample/src/app/app.sps.module.ts',
  // maxRenderThreads: 512,
  maxRenderThreads: 2,
  routes: {
    '/demo/:id': {
      type: 'extra',
      numberOfPages: 2,
    },
    // '/docs/:slug': {
    //   type: 'contentFolder',
    //   slug: {
    //     folder: './docs',
    //   },
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

registerPlugin('allDone','done doing things', async (routes:HandledRoute[]) =>{
  // console.log('all done');
  // console.dir(scullyConfig)
  const { sourceRoot,homeFolder,spsModulePath} = scullyConfig
  const fullSps = join(homeFolder,spsModulePath);
  console.log(fullSps, basename(fullSps));
});
