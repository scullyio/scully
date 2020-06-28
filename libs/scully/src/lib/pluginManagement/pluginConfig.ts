// tslint:disable: no-shadowed-variable
import { Serializable } from 'puppeteer';
import { logError, yellow } from '../utils/log';
import {
  configData,
  plugins,
  PluginTypes,
  pluginTypes,
  accessPluginDirectly,
  scullySystem,
} from './pluginRepository';

export const backupData = configData + 'BackupData__';
export const routeConfigData = configData + 'Route_Config_Data__';
export const resetConfig = configData + 'resetData__';

export const setPluginConfig = (
  name: string,
  typeOrConfig: PluginTypes | Serializable,
  config?: Serializable
): void => {
  let type: string;
  // tslint:disable-next-line: no-angle-bracket-type-assertion
  if (
    (typeof typeOrConfig === 'string' || typeof typeOrConfig === 'symbol') &&
    pluginTypes.includes(<any>typeOrConfig)
  ) {
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

export function fetchPlugins(
  name: string | symbol,
  type?: string
): [string, unknown][] {
  const result = Object.entries(plugins)
    .map(([tname, pt]) => {
      if (type) {
        return Object.entries(pt).find(
          ([pluginName]) => pluginName === name && tname === type
        );
      }
      return Object.entries(pt).find(([pluginName]) => {
        return pluginName === name;
      });
    })
    .filter(Boolean);
  return result;
}

export function findPlugin(name: string | symbol, type?: string): any {
  const found = fetchPlugins(name, type);
  switch (found.length) {
    case 0:
      logError(
        `Plugin "${yellow(name)}" of type "${yellow(
          name
        )}" is not found, can not store config`
      );
      process.exit(15);
      break;
    case 1:
      // eslint-disable-next-line no-case-declarations
      const pl = found[0][1] as Function;
      // eslint-disable-next-line no-prototype-builtins
      return pl.hasOwnProperty(accessPluginDirectly)
        ? pl[accessPluginDirectly]
        : pl;
    default:
      logError(
        `Plugin "${yellow(
          name
        )}" has multiple types, please specify type to be able to store config`
      );
      process.exit(15);
  }
}

export function hasPlugin(name: string | symbol, type?: string): boolean {
  return fetchPlugins(name, type).length === 1;
}

export const getConfig = <T>(plugin: any): T => (plugin[configData] || {}) as T;

export const setConfig = (plugin: any, config: Serializable): void => {
  plugin[configData] = Object.assign({}, plugin[configData] || {}, config);
  plugin[backupData] = { ...plugin[configData] };
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
) => {
  let type: string;
  // tslint:disable-next-line: no-angle-bracket-type-assertion
  if (
    (typeof typeOrConfig === 'string' || typeof typeOrConfig === 'symbol') &&
    pluginTypes.includes(<any>typeOrConfig)
  ) {
    type = typeOrConfig;
  } else {
    config = (typeOrConfig as unknown) as Serializable;
  }
  const plugin = findPlugin(name, type);
  plugin[routeConfigData] = plugin[routeConfigData] || {};
  plugin[routeConfigData][route] = Object.assign(
    {},
    plugin[configData] || {},
    config
  );
  plugin[resetConfig] = () => {
    plugin[configData] = plugin[backupData];
  };
};
