import { HandledRoute, RouteConfig } from '../routerPlugins/handledRoute.interface';
import { scullySystem } from './pluginRepository';
export type ScullySystem = `___Scully_system_plugins_Alter_at_own_RISK___`;

export type ErrorString = string;
export type ConfigValidator = (RouteConfig) => ErrorString[] | Promise<ErrorString[]>;
export type RoutePlugin = (route?: string, config?: any) => Promise<HandledRoute[]>;
export type RenderPlugin = (html?: string, route?: HandledRoute) => Promise<string>;
export type RouteProcess = (routes?: HandledRoute[]) => Promise<HandledRoute[]>;
export type RouteDiscoveryPlugin = (routes?: HandledRoute[]) => Promise<void>;
export type AllDonePlugin = (routes?: HandledRoute[]) => Promise<void>;
export type FilePlugin = (html: string, route?: HandledRoute) => Promise<string>;
export interface Plugins {
  render: { [name: string]: RenderPlugin };
  router: { [name: string]: RoutePlugin };
  routeProcess: { [name: string]: RouteProcess };
  routeDiscoveryDone: { [name: string]: RouteDiscoveryPlugin };
  allDone: { [name: string]: AllDonePlugin };
  fileHandler: { [fileExtension: string]: FilePlugin };
  [scullySystem]: { [pluginSymbol: string]: (...args: any[]) => unknown };
  enterprise: { [pluginSymbol: string]: (...args: any[]) => unknown };
}

export type PluginTypes = keyof Plugins;

export type PluginFunction = (...args: unknown[]) => unknown;
export interface RegisterOptions {
  replaceExistingPlugin?: boolean;
}
// Function overloads for registerPlugin to provide better/cleaner autocomplete help.
//TODO add jsondoc signatures on every type.
export interface Register {
  (
    type: 'router',
    name: string | symbol,
    plugin: RoutePlugin,
    validator?: ConfigValidator,
    registerOptions?: RegisterOptions
  ): void;
  (type: 'render', name: string | symbol, plugin: RenderPlugin, dummy?, registerOptions?: RegisterOptions): void;
  (type: 'allDone', name: string | symbol, plugin: AllDonePlugin, dummy?, registerOptions?: RegisterOptions): void;
  (
    type: 'routeDiscoveryDone',
    name: string | symbol,
    plugin: RouteDiscoveryPlugin,
    dummy?,
    registerOptions?: RegisterOptions
  ): void;
  (type: ScullySystem, name: symbol, plugin: PluginFunction, dummy?, registerOptions?: RegisterOptions): void;
  (type: 'enterprise', name: symbol, plugin: PluginFunction, dummy?, registerOptions?: RegisterOptions): void;
  (type: 'routeProcess', name: string | symbol, plugin: RouteProcess, priority?: number, registerOptions?: RegisterOptions): void;
  (type: 'fileHandler', name: string, plugin: FilePlugin, additionalTypes?: string[], registerOptions?: RegisterOptions): void;
}
