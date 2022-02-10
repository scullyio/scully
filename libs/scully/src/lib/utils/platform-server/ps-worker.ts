// tslint:disable-next-line: ordered-imports
import '@angular/compiler';
import '@angular/platform-server/init';
import { DOCUMENT, Location, XhrFactory } from '@angular/common';
import { APP_INITIALIZER, Injectable, StaticProvider } from '@angular/core';
import { BEFORE_APP_SERIALIZED, INITIAL_CONFIG, renderModule } from '@angular/platform-server';
import * as domino from 'domino';
import { existsSync, readFileSync } from 'fs';
import { basename, join } from 'path';
import { findPlugin } from '../../pluginManagement/pluginConfig.js';
import { registerPlugin } from '../../pluginManagement/pluginRepository.js';
import { renderRoute } from '../../renderPlugins/executePlugins.js';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface.js';
import { WriteToStorage } from '../../systemPlugins/writeToFs.plugin.js';
import { loadConfig, scullyConfig } from '../config.js';
import { ScullyConfig } from '../interfacesandenums.js';
import { logError, logOk } from '../log.js';
import { startWorkerListener } from '../procesmanager/startWorkerListener.js';
import { Tasks } from '../procesmanager/tasks.interface.js';
import { readDotProperty } from '../scullydot.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { version } from '../version.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const xhr2 = require('xhr2');
const __dirname = dirname(fileURLToPath(import.meta.url));
// tslint:disable-next-line: ordered-imports
import 'zone.js/dist/zone-node.js';
// tslint:disable-next-line: ordered-imports
import 'zone.js/dist/task-tracking.js';

process.title = 'ScullyWorker';

let config: Promise<ScullyConfig>;
const globalSetup: {
  rawHtml?: string;
} = {};
const executePluginsForRoute = findPlugin(renderRoute);
const writeToFs = findPlugin(WriteToStorage);
const spsRenderRunner = 'spsRenderRunner' as const;

async function init(path) {
  const extraProviders: StaticProvider[] = [
    // { provide: APP_INITIALIZER, multi: true, useFactory: scullyReadyEventFiredFactory, deps: [DOCUMENT] },
  ];
  /** init std ScullyCOnfig */
  await loadConfig();
  // console.dir(scullyConfig.routes['/content/there'])
  // const { config: myConfig } = await import(path);
  // config = loadConfig(await myConfig);

  // const tmpConfig = await config;
  const persistentFolder = readDotProperty('pluginFolder') || './scully';
  const scullyPath = join(scullyConfig.homeFolder, persistentFolder);
  const fileName = basename(scullyConfig.spsModulePath);
  const modulePath = join(scullyPath, 'runtime', fileName).replace('.ts', '.js');
  const distPath = join(scullyConfig.homeFolder, scullyConfig.distFolder, 'index.html');
  if (!existsSync(distPath)) {
    logError('Could not find ${distPath}, aborting.');
    process.exit(15);
  }

  globalSetup.rawHtml = readFileSync(distPath).toString('utf-8');

  try {
    const lazyModule = await import(modulePath);
    const { default: userModule } = lazyModule;
    registerPlugin('scullySystem', spsRenderRunner, createSpsRenderPlugin(extraProviders, userModule));
  } catch (e) {
    logError(`Could not load angular app: ${e}`);
  }

  return 'init done ' + process.pid;
}

function createSpsRenderPlugin(extraProviders: StaticProvider[], userModule) {
  return async (route: HandledRoute) => {
    await config;
    try {
      const baseUrl = `http://localhost:1864`;
      /** need this to be able to render the root route */
      const currentRoute = route.route || '/';
      const url = `${baseUrl}${currentRoute}`;
      /** recreate 'window' for every render */
      const window = domino.createWindow(globalSetup.rawHtml, url);
      window.location.href = url;
      /** make sure 'document' is fresh */
      const document = window.document;

      /** extend the global so things are in place */
      globalThis.window = window as unknown as Window & typeof globalThis;
      globalThis.document = document as unknown as Document & typeof globalThis;
      globalThis.location = document.location;

      const options = {
        url,
        route: route.route,
        document: globalSetup.rawHtml,
        baseUrl,
        useAbsoluteUrl: true
      };
      /** add scully specifics to window. */
      window['scullyVersion'] = version();
      window['ScullyIO-exposed'] = undefined;
      window['ScullyIO-injected'] = undefined;
      if (route.config?.manualIdleCheck) {
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

      const routeProviders = [
        ...extraProviders,
        { provide: INITIAL_CONFIG, useValue: options },
        { provide: DOCUMENT, useValue: document },
        { provide: Location, useValue: document.location },
        {
          provide: BEFORE_APP_SERIALIZED,
          multi: true,
          useFactory: scullyReadyEventFiredFactory,
          deps: [DOCUMENT]
        }
      ];

      const result = await renderModule(userModule, {
        extraProviders: routeProviders
      }).catch(e => {
        return `Error while rendering: ${e}`;
      });
      return result;
    } catch (e) {
      console.log(e);
      return `Error while rendering: ${e}`;
    }
  };
}

if (process.env.SCULLY_WORKER === 'true') {
  const availableTasks: Tasks = {
    init,
    setHandledRoutes: async (routes: HandledRoute[]) => {
      findPlugin('storeAllRoutes')(routes);
    },
    render: async (ev: HandledRoute) => {
      try {
        ev.renderPlugin = spsRenderRunner;
        const html = await executePluginsForRoute(ev);
        await writeToFs(ev.route, html);
      } catch (e) {
        console.error(e);
        process.exit(15);
      }
    }
  } as const;

  startWorkerListener(availableTasks);
}

export function scullyReadyEventFiredFactory(doc: Document): () => Promise<void> {
  return () =>
    new Promise((resolve, _reject) => {
      doc.addEventListener('AngularReady', () => {
        resolve();
      });
    });
}

// Generated by https://quicktype.io

export interface User {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
