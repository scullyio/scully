import { performance } from 'perf_hooks';
import { accessPluginDirectly, plugins, priority } from '../../pluginManagement';
import { logError } from '../log';
import { performanceIds } from '../performanceIds';

export async function handleBeforeAll() {
  /** protect from unwanted behavior */
  performance.mark('startBeforeAllPlugins');
  performanceIds.add('BeforeAllPlugins');
  const orderedPlugins = Object.values(plugins.beforeAll)
    .sort((a, b) => (a[accessPluginDirectly][priority] < b[accessPluginDirectly][priority] ? -1 : 1))

  for (const plugin of orderedPlugins) {
    try {
      await plugin();
    } catch (e) {
      logError(e);
    }
  }

  performance.mark('stopBeforeAllPlugins');
}
