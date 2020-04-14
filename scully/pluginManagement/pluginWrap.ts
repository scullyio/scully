import {performance} from 'perf_hooks';
import {logError, yellow} from '../utils/log';
import {performanceIds} from '../utils/performanceIds';
import {backupData, routeConfigData} from './pluginConfig';
import {configData, FilePlugin} from './pluginRepository';

let typeId = 0;
/**
 * Wrapper function. Runs all plugins in a wrapper, so we can do a try-catch, and do tme measurements.
 * @param type
 * @param name
 * @param plugin
 * @param args
 */
export async function wrap(type: string, name: string, plugin: (...args) => any | FilePlugin, args: any) {
  let id = `plugin-${type}:${name}-`;
  let currentRoute = '';
  // tslint:disable: no-switch-case-fall-through
  switch (type) {
    case 'router':
      id += args[0];
      currentRoute = args[0];
    case 'render':
      id += args[1].route;
      currentRoute = args[1].route;
    case 'fileHandler':
      id += args[0].templateFile || '';
      currentRoute = args[1].route;
    default:
      id += typeId++;
  }
  performance.mark('start' + id);
  let result;
  let customConfig = false;
  try {
    if (plugin[routeConfigData] && plugin[routeConfigData][currentRoute]) {
      plugin[configData] = plugin[routeConfigData][currentRoute];
      customConfig = true;
    }
    result = await plugin(...args);
  } catch (e) {
    logError(` The ${type} plugin "${yellow(name)} has thrown the below error, results are ignored.`);
    console.error(e);
  } finally {
    if (customConfig) {
      plugin[configData] = plugin[backupData];
    }
  }
  performance.mark('stop' + id);
  performanceIds.add(id);
  // tslint:disable-next-line: no-unused-expression
  return result;
}
