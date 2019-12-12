import {HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
import {logError, yellow} from '../utils/log';

export const configValidator = Symbol('configValidator');

export type PluginHandler = (...args: any) => Promise<any>;
export interface Plugin {
  handler: PluginHandler;
}

export type ErrorString = string;
export type ConfigValidator = (HandledRoute) => ErrorString[]

export interface FilePlugin {
  alternateExtensions?: string[];
  handler: PluginHandler;
}

interface Plugins {
  render: {[html: string]: PluginHandler};
  router: {[path: string]: PluginHandler};
  fileHandler: {[fileExtension: string]: FilePlugin};
}

export const plugins: Plugins = {
  render: {},
  router: {},
  fileHandler: {},
};

export type PluginTypes = keyof Plugins;

export const registerPlugin = (type: PluginTypes, name: string, plugin: any) => {
  if (plugins[type][name]) {
    throw new Error(`Plugin ${name} already exists`);
  }
  if (type === 'router' && plugin[configValidator] === undefined) {
    logError(
      `Route plugin "${yellow(
        name
      )}" should have an config validator attached to the 'validate' symbol `
    );
  }
  plugins[type][name] = plugin;
};
