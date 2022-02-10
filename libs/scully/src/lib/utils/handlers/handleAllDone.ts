import { performance } from 'perf_hooks';
import { plugins } from '../../pluginManagement/pluginRepository.js';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface.js';
import { deepClone } from '../deepClone.js';
import { performanceIds } from '../performanceIds.js';

export async function handleAllDone(handledRoutes: HandledRoute[]) {
  /** protect from unwanted behavior */
  performance.mark('startAllDonePlugins');
  performanceIds.add('AllDonePlugins');
  const clone = deepClone(handledRoutes);
  await Promise.all(Object.values(plugins.allDone).map(plugin => plugin(clone)));
  performance.mark('stopAllDonePlugins');
}
