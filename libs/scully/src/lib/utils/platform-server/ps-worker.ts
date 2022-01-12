process.title = 'ScullyWorker';
// tslint:disable-next-line: ordered-imports
import '@angular/platform-server/init';
import { DOCUMENT } from '@angular/common';
import { APP_INITIALIZER, StaticProvider } from '@angular/core';
import { INITIAL_CONFIG, renderModule } from '@angular/platform-server';
import * as domino from 'domino';
import { existsSync, readFileSync } from 'fs';
import { jsonc } from 'jsonc';
import { basename, join } from 'path';
import {
  findPlugin,
  HandledRoute,
  loadConfig,
  registerPlugin,
  renderRoute,
  scullyConfig,
  ScullyConfig,
  startWorkerListener,
  Tasks,
  WriteToStorage
} from '../../../';

import { readDotProperty } from '../scullydot';
import { Deferred, logError, logOk } from '..';

// tslint:disable-next-line: ordered-imports
import 'zone.js/node';
// tslint:disable-next-line: ordered-imports
import 'zone.js/dist/task-tracking';
// const test = new XMLHttpRequest();

let config: Promise<ScullyConfig>;
const globalSetup: {
  rawHtml?: string;
} = {};
const executePluginsForRoute = findPlugin(renderRoute);
const writeToFs = findPlugin(WriteToStorage);
const spsRenderRunner = 'spsRenderRunner' as const;

async function init(path) {
  let version = '0.0.0';
  try {
    const pkg = join(__dirname, '../../../package.json');
    // console.log(pkg)
    version = jsonc.parse(readFileSync(pkg).toString()).version || '0.0.0';
  } catch (e) {
    // this is only for internals builds
    // version = jsonc.parse(readFileSync(join(__dirname, '../../../package.json')).toString()).version || '0.0.0';
  }
  const extraProviders: StaticProvider[] = [
    { provide: APP_INITIALIZER, multi: true, useFactory: domContentLoadedFactory, deps: [DOCUMENT] },
  ];
  /** init std ScullyCOnfig */
  await loadConfig();
  // console.dir(scullyConfig.routes['/content/there'])
  // const { config: myConfig } = await import(path);
  // config = loadConfig(await myConfig);

  // const tmpConfig = await config;
  const persistentFolder = readDotProperty('pluginFolder') || './scully';
  const scullyPath = join(scullyConfig.homeFolder, persistentFolder);
  const fileName = basename(scullyConfig.spsModulePath)
  const modulePath = join(scullyPath, 'runtime', fileName).replace('.ts', '.js');
  const distPath = join(scullyConfig.homeFolder, scullyConfig.distFolder, 'index.html')
  if (!existsSync(distPath)) {
    logError('Could not find ${distPath}, aborting.')
    process.exit(15)
  }

  globalSetup.rawHtml = readFileSync(distPath).toString('utf-8');

  try {
    const lazyModule = await import(modulePath);
    const { default: userModule } = lazyModule
    registerPlugin('scullySystem', spsRenderRunner, createSpsRenderPlugin(version, extraProviders, userModule));
  } catch (e) {
    logError(`Could not load angular app: ${e}`)
  }


  return 'init done ' + process.pid;
}

function createSpsRenderPlugin(version: string, extraProviders: StaticProvider[], userModule) {
  return async (route: HandledRoute) => {
    await config;
    try {
      const baseUrl = `http://localhost:1864`
      /** need this to be able to render the root route */
      const currentRoute = route.route || '/';
      const url = `${baseUrl}${currentRoute}`;
      /** recreate 'window' for every render */
      const window = domino.createWindow(globalSetup.rawHtml, url);
      /** make sure 'document' is fresh */
      const document = window.document;
      /** extend the global so thienks are in place */
      globalThis.window = window as unknown as Window & typeof globalThis;
      globalThis.document = document as unknown as Document & typeof globalThis;
      globalThis.location = window.location;

      const options = {
        url,
        document: globalSetup.rawHtml,
        baseUrl,
        useAbsoluteUrl: true,
      };
      /** add scully specifics to window. */
      window['scullyVersion'] = version;
      window['ScullyIO-exposed'] = undefined;
      window['ScullyIO-injected'] = undefined;
      if (route.config && route.config.manualIdleCheck) {
        route.exposeToPage = route.exposeToPage || {};
        route.exposeToPage.manualIdle = true;
      }

      if (scullyConfig.inlineStateOnly) {
        route.injectToPage = route.injectToPage || {};
        route.injectToPage.inlineStateOnly = true;
      }

      if (route.exposeToPage !== undefined) {
        window['ScullyIO-exposed'] = route.exposeToPage;
      }
      if (route.injectToPage !== undefined) {
        window['ScullyIO-injected'] = route.injectToPage;
      }
      window['ScullyIO'] = 'running';

      const routeProviders = [...extraProviders, { provide: INITIAL_CONFIG, useValue: options }];

      const result = await renderModule(userModule, {
        extraProviders: routeProviders
      }).catch(e => {
        return `Error while rendering: ${e}`
      });
      return result;
    } catch (e) {
      console.log(e);
      return `Error while rendering: ${e}`
    }
  }
}


export async function start() {}
  if (process.env.SCULLY_WORKER === 'true') {
    const availableTasks: Tasks = {
      init,
      setHandledRoutes: async (routes: HandledRoute[]) => {
        findPlugin('storeAllRoutes')(routes)
      },
      render: async (ev: HandledRoute) => {
        try {
          ev.renderPlugin = spsRenderRunner;
          const html = await executePluginsForRoute(ev);
          await writeToFs(ev.route, html);
        } catch (e) {
          console.error(e)
          process.exit(15)
        }
      },
    } as const;

    startWorkerListener(availableTasks);
  }

export function domContentLoadedFactory(doc: Document): () => Promise<void> {
  return () =>
    new Promise((resolve, _reject) => {
      if (doc.readyState === 'complete' || doc.readyState === 'interactive') {
        resolve();

        return;
      }

      const contentLoaded = () => {
        doc.removeEventListener('DOMContentLoaded', contentLoaded);
        resolve();
      };

      doc.addEventListener('DOMContentLoaded', contentLoaded);
    });
}
