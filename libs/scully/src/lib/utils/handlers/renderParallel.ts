import { performance } from 'perf_hooks';
import { executePluginsForRoute } from '../../renderPlugins/executePlugins';
import { WriteToStorage } from '../../systemPlugins/writeToFs.plugin';
import { asyncPool } from '../asyncPool';
import { scullyConfig } from '../config';
import { performanceIds } from '../performanceIds';
import { findPlugin } from '../../pluginManagement/pluginConfig';
import { logError } from '../log';
import { reLaunch } from '../../renderPlugins/launchedBrowser';

const writeToFs = findPlugin(WriteToStorage);

const reThrow = (e) => {
  throw new Error(e);
};

export async function renderParallel(dataRoutes: any[]) {
  const renderRoute = (route, tries = 0) =>
    executePluginsForRoute(route)
      .catch(async (e) => {
        logError(e);
        // await reLaunch();
        return tries < 3 ? renderRoute(route, tries + 1) : reThrow(e);
      })
      .then((html: string) => html && writeToFs(route.route, html));
  performance.mark('startRender');
  performanceIds.add('Render');
  try {
    // tslint:disable-next-line: no-var-keyword
    // eslint-disable-next-line no-var
    var renderPool = await asyncPool(
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
