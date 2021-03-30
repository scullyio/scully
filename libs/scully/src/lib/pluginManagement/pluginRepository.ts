import { logWarn, yellow } from '../utils/log';
import { ConfigValidator, PluginFuncs, Plugins, RegisterOptions } from './Plugin.interfaces';
import { hasPlugin } from './pluginConfig';
import { wrap } from './pluginWrap';

export const configValidator = Symbol('configValidator');
export const configData = `___Scully_config_for_plugin___`;
export const AlternateExtensionsForFilePlugin = Symbol('altfileextension');
export const accessPluginDirectly = Symbol('accessPluginDirectly');
export const routeProcessPriority = Symbol('routeProcessPriority');
export const scullySystem = `scullySystem`;

const postProcessByHtml = {};

export const plugins: Plugins = {
  allDone: {},
  enterprise: {},
  fileHandler: {},
  postProcessByDom: {},
  postProcessByHtml: postProcessByHtml,
  render: postProcessByHtml,
  routeDiscoveryDone: {},
  routeProcess: {},
  router: {},
  scullySystem: {},
};

export const pluginTypes = [
  'allDone',
  'enterprise',
  'fileHandler',
  'postProcessByDom',
  'postProcessByHtml',
  'render',
  'routeDiscoveryDone',
  'routeProcess',
  'router',
  'scullySystem',
] as const;

/** type helpers for registerPlugin */
export const registerPlugin = <T extends keyof PluginFuncs>(
  type: T,
  name: string | symbol,
  plugin: PluginFuncs[T],
  pluginOptions?: ConfigValidator | number | string[],
  { replaceExistingPlugin = false }: RegisterOptions = {}
): void => {
  const displayName = typeof name === 'string' ? name : name.description;
  switch (type) {
    case 'fileHandler':
      plugin[AlternateExtensionsForFilePlugin] = Array.isArray(pluginOptions) ? pluginOptions : [];
      break;
    case 'router':
      plugin[configValidator] = typeof pluginOptions === 'function' ? pluginOptions : () => [] as string[];
      break;
    case 'routeProcess':
      plugin[routeProcessPriority] = typeof pluginOptions === 'number' ? pluginOptions : 100;
      break;
    case 'render':
      logWarn(`Using deprecated plugin type:"${yellow('render')}"  use "${yellow('postProcessByHtml')}" instead`);
      break;
    case 'allDone':
    case 'enterprise':
    case 'postProcessByHtml':
    case 'postProcessByDom':
    case 'routeDiscoveryDone':
    case 'scullySystem':
      break;
    default:
      assertNeverForPluginType(type, displayName);
  }
  if (replaceExistingPlugin === false && hasPlugin(name, type)) {
    throw new Error(`Plugin ${displayName} already exists`);
  }

  const wrapper = ((...args) => wrap(type, name, plugin, args)) as PluginFuncs[T];
  /** keep a reference for future use. */
  wrapper[accessPluginDirectly] = plugin;

  // plugins[type][name] = wrapper;
  Object.assign(plugins[type], plugins[type], { [name]: wrapper });
};

//TODO: figure out why we need string type here.
function assertNeverForPluginType(type: never | string, name: string): never {
  throw new Error(`
  ----------------------------------------------------------------------------------------------
    Type "${yellow(type)}" is not a known plugin type for registering plugin "${yellow(name)}".
    The first parameter of registerPlugin needs to be one of:
    'fileHandler', 'router', 'render', 'postProcessByDom', 'routeProcess', 'allDone', 'enterprise', or 'routeDiscoveryDone'
  ----------------------------------------------------------------------------------------------
  `);
}
