import { performance } from 'perf_hooks';
import { findPlugin } from '../../pluginManagement/pluginConfig';
import { executePluginsForRoute } from '../../renderPlugins/executePlugins';
import { WriteToStorage } from '../../systemPlugins/writeToFs.plugin';
import { asyncPool } from '../asyncPool';
import { scullyConfig } from '../config';
import { logError } from '../log';
import { performanceIds } from '../performanceIds';

const writeToFs = findPlugin(WriteToStorage);

const reThrow = (e) => {
  throw new Error(e);
};

export async function renderParallel(dataRoutes: any[]): Promise<any[]> {
  const renderRoute = (route, tries = 0) =>
    executePluginsForRoute(route)
      .catch(async (e) => {
        logError('==============================================');
        logError(`  Try ${tries} failed with ${e}`);
        logError('==============================================');
        // await reLaunch();
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
