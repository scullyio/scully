import { registerPlugin, scullySystem } from '../../pluginManagement/pluginRepository.js';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface';
import { renderParallel } from './renderParallel.js';

export const renderPlugin = 'renderPlugin' as const;
registerPlugin(scullySystem, renderPlugin, defaultRenderPlugin);
async function defaultRenderPlugin(handledRoutes: HandledRoute[]) {
  /** start handling each route, works in chunked parallel mode  */
  await renderParallel(handledRoutes);
}
