import {Serializable} from 'puppeteer';
import {logError, yellow} from '../utils/log';
import {configData, plugins, PluginTypes, pluginTypes} from './pluginRepository';

export const backupData = configData + 'BackupData__';
export const routeConfigData = configData + 'Route_Config_Data__';
export const resetConfig = configData + 'resetData__';

export const setPluginConfig = (
  name: string,
  typeOrConfig: PluginTypes | Serializable,
  config?: Serializable
) => {
  let type: string;
  // tslint:disable-next-line: no-angle-bracket-type-assertion
  if (typeof typeOrConfig === 'string' && pluginTypes.includes(<any>typeOrConfig)) {
    type = typeOrConfig;
  } else {
    config = typeOrConfig;
  }
  const plugin = findPlugin(name, type);
  plugin[configData] = config;
  plugin[backupData] = config;
};

export const getPluginConfig = (
  name: string,
  typeOrConfig: PluginTypes | Serializable,
  config?: Serializable
) => {
  let type: string;
  // tslint:disable-next-line: no-angle-bracket-type-assertion
  if (typeof typeOrConfig === 'string' && pluginTypes.includes(<any>typeOrConfig)) {
    type = typeOrConfig;
  } else {
    config = typeOrConfig;
  }
  const plugin = findPlugin(name, type);
  return plugin[configData];
};

function findPlugin(name: string, type?: string) {
  const found = Object.entries(plugins)
    .map(([tname, pt]) => {
      if (type) {
        return Object.entries(pt).find(([pluginName]) => pluginName === name && tname === type);
      }
      return Object.entries(pt).find(([pluginName]) => pluginName === name);
    })
    .filter(Boolean);

  switch (found.length) {
    case 0:
      logError(`Plugin "${yellow(name)}" of type "${yellow(type)}" is not found, can not store config`);
      process.exit(15);
      break;
    case 1:
      return found[0][1];
    default:
      logError(`Plugin "${yellow(name)}" has multiple types, please specify type to be able to store config`);
      process.exit(15);
  }
}

export const getMyConfig = (plugin: any): Serializable => plugin[configData] && {};
export const setMyConfig = (plugin: any, config: Serializable): void => {
  plugin[configData] = config;
  plugin[backupData] = config;
};

/**
 * @param type
 * @param name
 * @param config
 */
export const setRouteCallPluginConfig = (
  route: string,
  name: string,
  typeOrConfig: PluginTypes | Serializable,
  config?: Serializable
) => {
  let type: string;
  // tslint:disable-next-line: no-angle-bracket-type-assertion
  if (typeof typeOrConfig === 'string' && pluginTypes.includes(<any>typeOrConfig)) {
    type = typeOrConfig;
  } else {
    config = typeOrConfig;
  }
  const plugin = findPlugin(name, type);
  plugin[routeConfigData] = plugin[routeConfigData] || {};
  plugin[routeConfigData][route] = config;
  plugin[resetConfig] = () => {
    plugin[configData] = plugin[backupData];
  };
};
