import { yellow } from '../utils/log';
import { ConfigValidator, PluginFunction, Plugins, Register, RegisterOptions, PluginTypes } from './Plugin.interfaces';
import { hasPlugin } from './pluginConfig';
import { wrap } from './pluginWrap';

// export const configValidator = Symbol('configValidator');
export const configValidator = `___Scully_Validate_config_plugin___`;
export const configData = `___Scully_config_for_plugin___`;
export const AlternateExtensionsForFilePlugin = Symbol('altfileextension');
export const accessPluginDirectly = Symbol('accessPluginDirectly');
export const routeProcessPriority = Symbol('routeProcessPriority');
export const scullySystem = `___Scully_system_plugins_Alter_at_own_RISK___`;
export const plugins: Plugins = {
  render: {},
  router: {},
  fileHandler: {},
  routeProcess: {},
  routeDiscoveryDone: {},
  allDone: {},
  [scullySystem]: {},
};

export const pluginTypes = [
  'router',
  'render',
  'routeProcess',
  'fileHandler',
  'allDone',
  'routeDiscoveryDone',
  scullySystem,
] as const;

/** type helpers for registerPlugin */

// eslint-disable @typescript-eslint/no-explicit-any
export const registerPlugin: Register = (
  type: PluginTypes,
  name: string | symbol,
  plugin: PluginFunction,
  pluginOptions?: ConfigValidator | number | string[],
  { replaceExistingPlugin = false }: RegisterOptions = {}
): void => {
  const displayName = typeof name === 'string' ? name : name.description;
  if (!pluginTypes.includes(type)) {
    throw new Error(`
----------------------------------------------------------------------------------------------
  Type "${yellow(type)}" is not a known plugin type for registering plugin "${yellow(name)}".
  The first parameter of registerPlugin needs to be one of:
  'fileHandler', 'router', 'render', 'routeProcess', 'allDone', or 'routeDiscoveryDone'
----------------------------------------------------------------------------------------------
`);
  }
  if (replaceExistingPlugin === false && hasPlugin(name, type)) {
    throw new Error(`Plugin ${displayName} already exists`);
  }
  switch (type) {
    case 'router':
      plugin[configValidator] = typeof pluginOptions === 'function' ? pluginOptions : () => [] as string[];
      break;
    case 'fileHandler':
      plugin[AlternateExtensionsForFilePlugin] = Array.isArray(pluginOptions) ? pluginOptions : [];
      break;
    case 'routeProcess':
      plugin[routeProcessPriority] = typeof pluginOptions === 'number' ? pluginOptions : 100;
      break;
  }

  const wrapper = (...args) => wrap(type, name, plugin, args);
  /** keep a reference for future use. */
  wrapper[accessPluginDirectly] = plugin;

  // plugins[type][name] = wrapper;
  Object.assign(plugins[type], plugins[type], { [name]: wrapper });
};
