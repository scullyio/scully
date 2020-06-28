import { HandledRoute } from '../routerPlugins/addOptionalRoutesPlugin';
import { logError, yellow } from '../utils/log';
import { hasPlugin } from './pluginConfig';
import { wrap } from './pluginWrap';

// export const configValidator = Symbol('configValidator');
export const configValidator = `___Scully_Validate_config_plugin___`;
export const configData = `___Scully_config_for_plugin___`;
export const AlternateExtensionsForFilePlugin = Symbol('altfileextension');
export const accessPluginDirectly = Symbol('accessPluginDirectly');
export const scullySystem = `___Scully_system_plugins_Alter_at_own_RISK___`;

export type ErrorString = string;
export type ConfigValidator = (HandledRoute) => ErrorString[];

type RoutePlugin = (route: string, config: any) => Promise<HandledRoute[]>;
type RenderPlugin = (html: string, route: HandledRoute) => Promise<string>;
type RouteDiscoveryPlugin = (routes: HandledRoute[]) => Promise<void>;
type AllDonePlugin = (routes: HandledRoute[]) => Promise<void>;
export type FilePlugin = (html: string, route: HandledRoute) => Promise<string>;

interface Plugins {
  render: { [name: string]: RenderPlugin };
  router: { [name: string]: RoutePlugin };
  routeDiscoveryDone: { [name: string]: RouteDiscoveryPlugin };
  allDone: { [name: string]: AllDonePlugin };
  fileHandler: { [fileExtension: string]: FilePlugin };
  [scullySystem]: { [pluginSymbol: string]: Function };
}

export const plugins: Plugins = {
  render: {},
  router: {},
  fileHandler: {},
  routeDiscoveryDone: {},
  allDone: {},
  [scullySystem]: {},
};

export type PluginTypes = keyof Plugins;
export const pluginTypes = [
  'router',
  'render',
  'fileHandler',
  'allDone',
  'routeDiscoveryDone',
  scullySystem,
] as const;

// eslint-disable @typescript-eslint/no-explicit-any
export const registerPlugin = (
  type: PluginTypes,
  name: string | symbol,
  plugin: any,
  pluginOptions: any = async (config?: any) => [],
  { replaceExistingPlugin = false } = {}
): void => {
  const displayName = typeof name === 'string' ? name : name.description;
  if (!pluginTypes.includes(type)) {
    throw new Error(`
--------------
  Type "${yellow(
    type
  )}" is not a known plugin type for registering plugin "${yellow(name)}".
  The first parameter of registerPlugin needs to be one of:
     'fileHandler', 'router', 'render', 'allDone', or 'routeDiscoveryDone'
--------------
`);
  }
  if (replaceExistingPlugin === false && hasPlugin(name, type)) {
    throw new Error(`Plugin ${displayName} already exists`);
  }
  if (type === 'router') {
    if (typeof pluginOptions !== 'function') {
      logError(`
---------------
   Route plugin "${yellow(
     displayName
   )}" validator needs to be of type function not "${yellow(
        typeof pluginOptions
      )}"'
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
  const wrapper = (...args) => wrap(type, name, plugin, args);
  /** keep a reference for future use. */
  wrapper[accessPluginDirectly] = plugin;
  if (type === 'router') {
    plugin[configValidator] = pluginOptions;
    wrapper[configValidator] = pluginOptions;
  }
  // plugins[type][name] = wrapper;
  Object.assign(plugins[type], plugins[type], { [name]: wrapper });
};
