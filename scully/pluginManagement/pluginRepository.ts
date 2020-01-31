import {performance} from 'perf_hooks';
import {HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
import {logError, yellow} from '../utils/log';
import {performanceIds} from '../utils/performanceIds';

// export const configValidator = Symbol('configValidator');
export const configValidator = `___Scully_Validate_config_plugin___`;
export const AlternateExtensionsForFilePlugin = Symbol('altfileextension');

export type ErrorString = string;
export type ConfigValidator = (HandledRoute) => ErrorString[];

type RoutePlugin = (route: string, config: any) => Promise<HandledRoute[]>;
type RenderPlugin = (html: string, route: HandledRoute) => Promise<string>;
type FilePlugin = (html: string) => Promise<string>;

interface Plugins {
  render: {[name: string]: RenderPlugin};
  router: {[name: string]: RoutePlugin};
  fileHandler: {[fileExtension: string]: FilePlugin};
}

export const plugins: Plugins = {
  render: {},
  router: {},
  fileHandler: {},
};

export type PluginTypes = keyof Plugins;

export const registerPlugin = (
  type: PluginTypes,
  name: string,
  plugin: any,
  pluginOptions: any = async (config?: any) => [],
  {replaceExistingPlugin = false} = {}
) => {
  if (!['router', 'render', 'fileHandler'].includes(type)) {
    throw new Error(`
--------------
  Type "${yellow(type)}" is not a known plugin type for registering plugin "${yellow(name)}".
  The first parameter of registerPlugin needs to be one of: 'fileHandler', 'router', 'render'
--------------
`);
  }
  if (replaceExistingPlugin === false && plugins[type][name]) {
    throw new Error(`Plugin ${name} already exists`);
  }
  if (type === 'router') {
    if (typeof pluginOptions !== 'function') {
      logError(`
---------------
   Route plugin "${yellow(name)}" should have an config validator attached to '${plugin.name}'
---------------
`);
      plugin[configValidator] = async () => [];
    } else {
      plugin[configValidator] = pluginOptions;
    }
  }
  if (type === 'fileHandler') {
    if (pluginOptions && Array.isArray(pluginOptions)) {
      plugin[AlternateExtensionsForFilePlugin] = pluginOptions;
    } else {
      plugin[AlternateExtensionsForFilePlugin] = [];
    }
  }
  plugins[type][name] = (...args) => wrap(type, name, plugin, args);
};

async function wrap(type: string, name: string, plugin: (...args) => any | FilePlugin, args: any) {
  let id = `plugin-${type}:${name}-`;
  if (type === 'router') {
    id += args[0];
  }
  if (type === 'render') {
    id += args[1].route;
  }
  if (type === 'fileHandler') {
    plugin;
  }
  performance.mark('start' + id);
  const result = await plugin(...args);
  performance.mark('stop' + id);
  performanceIds.add(id);
  return result;
}
