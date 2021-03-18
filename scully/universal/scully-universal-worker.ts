import { ɵCommonEngine as CommonEngine, ɵRenderOptions as RenderOptions } from '@nguniversal/common/engine';
import {
  findPlugin,
  HandledRoute,
  loadConfig,
  log,
  logError,
  registerPlugin,
  renderRoute,
  scullyConfig,
  ScullyConfig,
  WriteToStorage,
} from '@scullyio/scully';
import { readFileSync } from 'fs';
import { JSDOM } from 'jsdom';
import { join } from 'path';
import { version } from 'yargs';
import 'zone.js/dist/zone-node';
// import { AppServerModule } from '../../src/main.universal';
// import { AppUniversalModule } from '../../apps/sample-blog/src/main.universal';
import { AppUniversalModule } from '../../apps/universal-sample/src/main.universal';
import { startWorkerListener, Tasks } from './tasks';
let config: Promise<ScullyConfig>;
const globalSetup: {
  engine?: CommonEngine;
  rawHtml?: string;
} = {};
const executePluginsForRoute = findPlugin(renderRoute);
const writeToFs = findPlugin(WriteToStorage);
const universalRender = Symbol('universalRender');

async function init(path) {
  const { config: myConfig } = await import(path);
  config = loadConfig(await myConfig);
  global.console.log = (first, ...args) => log(typeof first === 'string' ? first.slice(0, 120) : first, ...args);
  global.console.error = (first, ...args) => logError(String(first).slice(0, 60));

  // const {AppUniversalModule} = await import('../../apps/universal-sample/src/main.universal')

  globalSetup.engine = new CommonEngine(AppUniversalModule, []);
  globalSetup.rawHtml = readFileSync(join(process.cwd(), './dist/apps/universal-sample/index.html')).toString();

  const dom = new JSDOM(globalSetup.rawHtml);
  globalThis.window = (dom.window as unknown) as Window & typeof globalThis;
  globalThis.window.dispatchEvent = (...x: any[]) => undefined;

  async function universalRenderPlugin(route: HandledRoute) {
    await config;
    try {
      const window = globalThis.window;
      const options: RenderOptions = {
        url: `http://localhost/${route.route}`,
        // documentFilePath: '/home/sander/Documents/temp/demo/dist/static/index.html',
        document: globalSetup.rawHtml,
        // publicPath: '/home/sander/Documents/temp/demo/dist/demo/browser',
      } as RenderOptions;
      window['scullyVersion'] = version;
      window['ScullyIO-exposed'] = undefined;
      window['ScullyIO-injected'] = undefined;
      globalThis.document = window.document;
      if (route.config && route.config.manualIdleCheck) {
        // windowSet(page, 'ScullyIO-ManualIdle', true);
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
      // window['ScullyIO'] = 'running';

      const result = await globalSetup.engine!.render(options);
      // console.log(result);
      // log('renderDone')
      return result;
    } catch (e) {
      console.log(e);
    }
    return 'oops';
  }
  registerPlugin('scullySystem', universalRender, universalRenderPlugin);
  return 'init done ' + process.pid;
}

// globalThis.document = dom.window.document;

// registerPlugin('scullySystem', puppeteerRender, universalRenderPlugin, undefined, { replaceExistingPlugin: true });

if (typeof process.send === 'function') {
  const availableTasks: Tasks = {
    init,
    render: async (ev: HandledRoute) => {
      ev.renderPlugin = universalRender;
      // const html = await universalRenderPlugin(ev);
      const html = await executePluginsForRoute(ev);
      await writeToFs(ev.route, html);
      // send(['ok',ev]);
    },
  } as const;

  startWorkerListener(availableTasks);
}


