import {HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
import {logError, yellow} from '../utils/log';
import {wrap} from './pluginWrap';

// export const configValidator = Symbol('configValidator');
export const configValidator = `___Scully_Validate_config_plugin___`;
export const configData = `___Scully_config_for_plugin___`;
export const AlternateExtensionsForFilePlugin = Symbol('altfileextension');

export type ErrorString = string;
export type ConfigValidator = (HandledRoute) => ErrorString[];

type RoutePlugin = (route: string, config: any) => Promise<HandledRoute[]>;
type RenderPlugin = (html: string, route: HandledRoute) => Promise<string>;
type RouteDiscoveryPlugin = (routes: HandledRoute[]) => Promise<void>;
type AllDonePlugin = (routes: HandledRoute[]) => Promise<void>;
export type FilePlugin = (html: string, route: HandledRoute) => Promise<string>;

interface Plugins {
  render: {[name: string]: RenderPlugin};
  router: {[name: string]: RoutePlugin};
  routeDiscoveryDone: {[name: string]: RouteDiscoveryPlugin};
  allDone: {[name: string]: AllDonePlugin};
  fileHandler: {[fileExtension: string]: FilePlugin};
}

export const plugins: Plugins = {
  render: {},
  router: {},
  fileHandler: {},
  routeDiscoveryDone: {},
  allDone: {},
};

export type PluginTypes = keyof Plugins;

export const registerPlugin = (
  type: PluginTypes,
  name: string,
  plugin: any,
  pluginOptions: any = async (config?: any) => [],
  {replaceExistingPlugin = false} = {}
) => {
  if (!['router', 'render', 'fileHandler', 'allDone', 'routeDiscoveryDone'].includes(type)) {
    throw new Error(`
--------------
  Type "${yellow(type)}" is not a known plugin type for registering plugin "${yellow(name)}".
  The first parameter of registerPlugin needs to be one of:
     'fileHandler', 'router', 'render', 'allDone', or 'routeDiscoveryDone'
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
      pluginOptions = async () => [];
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
  if (type === 'router') {
    plugins[type][name][configValidator] = pluginOptions;
  }
};
