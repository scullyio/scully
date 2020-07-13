/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-case-declarations */
// tslint:disable: no-shadowed-variable
import { Serializable } from 'puppeteer';
import { logError, yellow } from '../utils/log';
import { accessPluginDirectly, configData, plugins, pluginTypes } from './pluginRepository';
import { PluginTypes, PluginFunction } from './Plugin.interfaces';

export const backupData = configData + 'BackupData__';
export const routeConfigData = configData + 'Route_Config_Data__';
export const resetConfig = configData + 'resetData__';

interface SetPluginConfig {
  (name: string | symbol, configData: Serializable): void;
  (name: string | symbol, type: PluginTypes, configData: Serializable): void;
}
export const setPluginConfig: SetPluginConfig = (
  name: string,
  typeOrConfig: PluginTypes | Serializable,
  config?: Serializable
): void => {
  let type: string;
  // tslint:disable-next-line: no-angle-bracket-type-assertion
  if ((typeof typeOrConfig === 'string' || typeof typeOrConfig === 'symbol') && pluginTypes.includes(<any>typeOrConfig)) {
    type = typeOrConfig;
  } else {
    config = (typeOrConfig as unknown) as Serializable;
  }
  const plugin = findPlugin(name, type);
  setConfig(plugin, config);
};

export const getPluginConfig = <T>(name: string | symbol, type?: string): T => {
  const plugin = findPlugin(name, type);
  return getConfig(plugin) as T;
};

export function fetchPlugins(name: string | symbol, type?: string): Function[] {
  const result = Object.entries(plugins)
    .filter(([ofType]) => (!type ? true : ofType === type))
    .map(([_, typedPlugins]) => typedPlugins[name])
    .filter(Boolean);
  return result;
}

export function findPlugin(name: string | symbol, type?: string): Function {
  const found = fetchPlugins(name, type);
  const displayName = typeof name === 'string' ? name : name.description;
  switch (found.length) {
    case 0:
      logError(`Plugin "${yellow(displayName)}" of type "${yellow(type)}" is not found, can not store config`);
      process.exit(15);
      break;
    case 1:
      return found[0] as PluginFunction;
    default:
      logError(`Plugin "${yellow(displayName)}" has multiple types, please specify type to be able to store config`);
      process.exit(15);
  }
}

export function hasPlugin(name: string | symbol, type?: string): boolean {
  return fetchPlugins(name, type).length === 1;
}

export const getConfig = <T>(plugin: any): T => {
  const target = plugin.hasOwnProperty(accessPluginDirectly) ? plugin[accessPluginDirectly] : plugin;
  return target[configData] || ({} as T);
};

export const setConfig = (plugin: any, config: Serializable): void => {
  const target = plugin.hasOwnProperty(accessPluginDirectly) ? plugin[accessPluginDirectly] : plugin;
  target[configData] = Object.assign({}, target[configData] || {}, config);
  target[backupData] = { ...target[configData] };
};

/**
 * @param type
 * @param name
 * @param config
 */
export const routePluginConfig = (
  route: string,
  name: string,
  typeOrConfig: PluginTypes | Serializable,
  config?: Serializable
): void => {
  let type: string;
  // tslint:disable-next-line: no-angle-bracket-type-assertion
  if ((typeof typeOrConfig === 'string' || typeof typeOrConfig === 'symbol') && pluginTypes.includes(<any>typeOrConfig)) {
    type = typeOrConfig;
  } else {
    config = (typeOrConfig as unknown) as Serializable;
  }
  const plugin = findPlugin(name, type);
  plugin[routeConfigData] = plugin[routeConfigData] || {};
  plugin[routeConfigData][route] = Object.assign({}, plugin[configData] || {}, config);
  plugin[resetConfig] = () => {
    plugin[configData] = plugin[backupData];
  };
};
