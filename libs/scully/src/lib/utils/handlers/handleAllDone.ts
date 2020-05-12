import {performance} from 'perf_hooks';
import {plugins} from '../../pluginManagement/pluginRepository';
import {HandledRoute} from '../../routerPlugins/addOptionalRoutesPlugin';
import {deepClone} from '../deepClone';
import {performanceIds} from '../performanceIds';

export async function handleAllDone(handledRoutes: HandledRoute[]) {
  /** protect from unwanted behavior */
  performance.mark('startAllDonePlugins');
  performanceIds.add('AllDonePlugins');
  const clone = deepClone(handledRoutes);
  await Promise.all(Object.values(plugins.allDone).map(plugin => plugin(clone)));
  performance.mark('stopAllDonePlugins');
}
