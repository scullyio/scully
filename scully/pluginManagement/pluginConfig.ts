import {plugins, PluginTypes, configData} from './pluginRepository';
import {yellow} from '@scullyio/scully';
import {Serializable} from 'puppeteer';

const backupData = configData + 'BackupData__';
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
 * this is not exported yet, as we firsts need to solve the concurrency issue.
 * @param type
 * @param name
 * @param config
 */
export const setNextCallPluginConfig = (type: PluginTypes, name: string, config: Serializable) => {
  if (!plugins[type][name]) {
    throw new Error(`Plugin "${yellow(name)}" of type "${yellow(type)}" is not found, can not store config`);
  }
  plugins[type][name][configData] = config;
  plugins[type][name][resetConfig] = () => {
    plugins[type][name][configData] = plugins[type][name][backupData];
    plugins[type][name][resetConfig] = undefined;
  };
};
