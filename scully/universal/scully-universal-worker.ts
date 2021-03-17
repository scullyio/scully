import { ɵCommonEngine as CommonEngine, ɵRenderOptions as RenderOptions } from '@nguniversal/common/engine';
import {
  findPlugin,
  HandledRoute,
  loadConfig,
  log,
  logError,
  registerPlugin,
  renderRoute,
  ScullyConfig,
  WriteToStorage,
} from '@scullyio/scully';
import { readFileSync } from 'fs';
import { JSDOM } from 'jsdom';
import { join } from 'path';
import 'zone.js/dist/zone-node';
// import { AppServerModule } from '../../src/main.universal';
import { AppUniversalModule } from '../../apps/sample-blog/src/main.universal';
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

  globalSetup.engine = new CommonEngine(AppUniversalModule, []);
  globalSetup.rawHtml = readFileSync(join(process.cwd(), './dist/apps/sample-blog/index.html')).toString();

  const dom = new JSDOM(globalSetup.rawHtml);
  globalThis.window = (dom.window as unknown) as Window & typeof globalThis;
  globalThis.window.dispatchEvent = (...x:any[]) => undefined;
  async function universalRenderPlugin(route: HandledRoute) {
    await config;
    try {
      const options: RenderOptions = {
        url: `http://localhost/${route.route}`,
        // documentFilePath: '/home/sander/Documents/temp/demo/dist/static/index.html',
        document: globalSetup.rawHtml,
        // publicPath: '/home/sander/Documents/temp/demo/dist/demo/browser',
      } as RenderOptions;
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
      log('render activated with', ev.route);
      ev.renderPlugin = universalRender
      // const html = await universalRenderPlugin(ev);
      const html = await executePluginsForRoute(ev);
      console.log(html);
      // await writeToFs(ev.route, html);
      // send(['ok',ev]);
    },
  } as const;

  startWorkerListener(availableTasks);
}
