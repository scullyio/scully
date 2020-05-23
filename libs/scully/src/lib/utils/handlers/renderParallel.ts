import { performance } from 'perf_hooks';
import { executePluginsForRoute } from '../../renderPlugins/executePlugins';
import { writeToFs } from '../../systemPlugins/writeToFs.plugin';
import { asyncPool } from '../asyncPool';
import { scullyConfig } from '../config';
import { performanceIds } from '../performanceIds';

export async function renderParallel(dataRoutes) {
  const renderRoute = route =>
    executePluginsForRoute(route).then(
      (html: string) => html && writeToFs(route.route, html)
    );
  performance.mark('startRender');
  performanceIds.add('Render');
  const renderPool = await asyncPool(
    scullyConfig.maxRenderThreads,
    dataRoutes,
    renderRoute
  );
  performance.mark('stopRender');
  return renderPool;
}
