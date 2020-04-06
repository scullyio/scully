import {performance} from 'perf_hooks';
import {routeContentRenderer} from '../../renderPlugins/routeContentRenderer';
import {writeToFs} from '../../systemPlugins/writeToFs.plugin';
import {asyncPool} from '../asyncPool';
import {scullyConfig} from '../config';
import {performanceIds} from '../performanceIds';

export async function renderParallel(dataRoutes) {
  const renderRoute = route =>
    routeContentRenderer(route).then((html: string) => writeToFs(route.route, html));
  performance.mark('startRender');
  performanceIds.add('Render');
  const renderPool = await asyncPool(scullyConfig.maxRenderThreads, dataRoutes, renderRoute);
  performance.mark('stopRender');
  return renderPool;
}
