import { performance } from 'perf_hooks';
import { findPlugin } from '../../pluginManagement/pluginConfig';
import { executePluginsForRoute } from '../../renderPlugins/executePlugins';
import { WriteToStorage } from '../../systemPlugins/writeToFs.plugin';
import { asyncPool } from '../asyncPool';
import { scullyConfig } from '../config';
import { logError, logWarn } from '../log';
import { performanceIds } from '../performanceIds';
import { waitForIt } from '../../renderPlugins/puppeteerRenderPlugin';

const writeToFs = findPlugin(WriteToStorage);

const reThrow = (e) => {
  throw new Error(e);
};

export async function renderParallel(dataRoutes: any[]): Promise<any[]> {
  const renderRoute = (route, tries = 0) =>
    Promise.race([
      executePluginsForRoute(route),
      /** sometimes puppeteer just dies without error or completing, this will kill the render after 1.5 minute (takes in account that some pages are _slow_) */
      waitForIt(90 * 1000).then(() => {
        throw new Error(`timeout on ${route.route}`);
      }),
    ])
      .catch(async (e) => {
        if (tries > 0) {
          /** don't log on first error, puppeteer is flakey, just retry without notifying dev  */
          logWarn(`  route: ${route.route}. Try ${tries} failed with ${e}`);
        }
        return tries < 3 ? renderRoute(route, tries + 1) : reThrow(e);
      })
      .then((html: string) => html && writeToFs(route.route, html));
  performance.mark('startRender');
  performanceIds.add('Render');
  let renderPool = [];
  try {
    renderPool = await asyncPool(
      scullyConfig.maxRenderThreads,
      dataRoutes,
      renderRoute
    );
  } catch (e) {
    console.log('oops during rendering?', e);
  }
  performance.mark('stopRender');
  return renderPool;
}
