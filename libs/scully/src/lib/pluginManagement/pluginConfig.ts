/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-case-declarations */
// tslint:disable: no-shadowed-variable
import { Serializable } from 'puppeteer';
import { logError, yellow } from '../utils/log';
import { PluginFunction, PluginTypes } from './Plugin.interfaces';
import { accessPluginDirectly, configData, plugins, pluginTypes } from './pluginRepository';

export const backupData = configData + 'BackupData__';
export const routeConfigData = configData + 'Route_Config_Data__';
export const resetConfig = configData + 'resetData__';

interface SetPluginConfig {
  <T>(name: string | symbol, configData: T): void;
  <T>(name: string | symbol, type: PluginTypes, configData: T): void;
  (name: string | symbol, configData: Serializable): void;
  (name: string | symbol, type: PluginTypes, configData: Serializable): void;
}
export const setPluginConfig: SetPluginConfig = <T>(
  name: string,
  typeOrConfig: PluginTypes | Serializable | T,
  config?: Serializable | T
): void => {
  let type: PluginTypes;
  // tslint:disable-next-line: no-angle-bracket-type-assertion
  if ((typeof typeOrConfig === 'string' || typeof typeOrConfig === 'symbol') && pluginTypes.includes(<any>typeOrConfig)) {
    type = (typeOrConfig as unknown) as PluginTypes;
  } else {
    config = (typeOrConfig as unknown) as Serializable;
  }
  const plugin = findPlugin(name, type);
  setConfig<T>(plugin, config);
};

export const getPluginConfig = <T>(name: string | symbol, type?: PluginTypes): T => {
  const plugin = findPlugin(name, type);
  return getConfig(plugin) as T;
};

export function fetchPlugins(name: string | symbol, type?: PluginTypes): Function[] {
  const result = Object.entries(plugins)
    /** filter out deprecated render name */
    .filter(([type]) => type !== 'render')
    /** only catch the type that is given, or all */
    .filter(([ofType]) => (!type ? true : ofType === type))
    .map(([_, typedPlugins]) => typedPlugins[name])
    .filter(Boolean);
  return result;
}

export function findPlugin(name: string | symbol, type?: PluginTypes, errorOnNotfound = true): Function {
  const found = fetchPlugins(name, type);
  const displayName = typeof name === 'string' ? name : name.description;
  switch (found.length) {
    case 0:
      if (errorOnNotfound) {
        logError(`Plugin "${yellow(displayName)}" of type "${yellow(type)}" is not found, can not store config`);
        process.exit(15);
      }
      return undefined;
      break;
    case 1:
      return found[0] as PluginFunction;
    default:
      if (errorOnNotfound) {
        logError(`Plugin "${yellow(displayName)}" has multiple types, please specify type to be able to store config`);
        process.exit(15);
      }
      return undefined;
  }
}

export function hasPlugin(name: string | symbol, type?: PluginTypes): boolean {
  return fetchPlugins(name, type).length === 1;
}

export const getConfig = <T>(plugin: any): T => {
  const target = plugin.hasOwnProperty(accessPluginDirectly) ? plugin[accessPluginDirectly] : plugin;
  return target[configData] || ({} as T);
};

export const setConfig = <T>(plugin: any, config: Serializable | T): void => {
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
  let type: PluginTypes;
  // tslint:disable-next-line: no-angle-bracket-type-assertion
  if ((typeof typeOrConfig === 'string' || typeof typeOrConfig === 'symbol') && pluginTypes.includes(<any>typeOrConfig)) {
    type = (typeOrConfig as unknown) as PluginTypes;
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
