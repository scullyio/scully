import { registerPlugin, scullySystem } from '../../pluginManagement';
import { launchedBrowser } from '../../renderPlugins/launchedBrowser';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface';
import { printProgress } from '../log';
import { renderParallel } from './renderParallel';


export const renderPlugin = Symbol('renderPlugin');
registerPlugin(scullySystem, renderPlugin, defaultRenderPlugin);
async function defaultRenderPlugin(handledRoutes: HandledRoute[]) {
  /** update progress to show what's going on  */
  printProgress(false, 'Starting puppeteer');
  /** launch the browser, its shared among renderers */
  await launchedBrowser();
  /** start handling each route, works in chunked parallel mode  */
  await renderParallel(handledRoutes);
}
