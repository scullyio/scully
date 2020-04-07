import {plugins, PluginTypes, configData} from './pluginRepository';
import {yellow} from '../utils/log';
import {Serializable} from 'puppeteer';

export const backupData = configData + 'BackupData__';
export const routeConfigData = configData + 'Route_Config_Data__';
export const resetConfig = configData + 'resetData__';

export const setPluginConfig = (type: PluginTypes, name: string, config: Serializable) => {
  if (!plugins[type][name]) {
    throw new Error(`Plugin "${yellow(name)}" of type "${yellow(type)}" is not found, can not store config`);
  }
  plugins[type][name][configData] = config;
  plugins[type][name][backupData] = config;
};

export const getMyConfig = (plugin: any): Serializable => plugin[configData] && {};
export const setMyConfig = (plugin: any, config: Serializable): void => {
  plugin[configData] = config;
  plugin[backupData] = config;
};

export const getPluginConfig = (type: PluginTypes, name: string): Serializable => {
  if (!plugins[type][name]) {
    throw new Error(
      `Plugin "${yellow(name)}" of type "${yellow(type)}" is not found, can not retrieve config`
    );
  }
  // if (!plugins[type][name][configData]) {
  //   throw new Error(`Plugin "${yellow(name)}" of type "${yellow(type)}" has no stored config`);
  // }
  return (plugins[type][name] && plugins[type][name][configData]) || {};
};

/**
 * @param type
 * @param name
 * @param config
 */
export const setRouteCallPluginConfig = (
  type: PluginTypes,
  name: string,
  route: string,
  config: Serializable
) => {
  if (!plugins[type][name]) {
    throw new Error(`Plugin "${yellow(name)}" of type "${yellow(type)}" is not found, can not store config`);
  }
  const plugin = plugins[type][name];
  plugin[routeConfigData] = plugin[routeConfigData] || {};
  plugin[routeConfigData][route] = config;
  plugin[resetConfig] = () => {
    plugin[configData] = plugin[backupData];
  };
};
