import { HandledRoute } from '../routerPlugins/handledRoute.interface';
import { scullySystem } from './pluginRepository';
export type ScullySystem = `___Scully_system_plugins_Alter_at_own_RISK___`;

export type ErrorString = string;
export type ConfigValidator = (HandledRoute) => ErrorString[] | Promise<ErrorString[]>;
type RoutePlugin = (route: string, config: any) => Promise<HandledRoute[]>;
type RenderPlugin = (html: string, route: HandledRoute) => Promise<string>;
type RouteProcess = (routes: HandledRoute[]) => Promise<HandledRoute[]>;
type RouteDiscoveryPlugin = (routes: HandledRoute[]) => Promise<void>;
type AllDonePlugin = (routes: HandledRoute[]) => Promise<void>;
export type FilePlugin = (html: string, route: HandledRoute) => Promise<string>;
export interface Plugins {
  render: { [name: string]: RenderPlugin };
  router: { [name: string]: RoutePlugin };
  routeProcess: { [name: string]: RouteProcess };
  routeDiscoveryDone: { [name: string]: RouteDiscoveryPlugin };
  allDone: { [name: string]: AllDonePlugin };
  fileHandler: { [fileExtension: string]: FilePlugin };
  [scullySystem]: { [pluginSymbol: string]: (...args: unknown[]) => unknown };
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
    plugin: PluginFunction,
    validator?: ConfigValidator,
    registerOptions?: RegisterOptions
  ): void;
  (
    type: 'render' | 'allDone' | 'routeDiscoveryDone',
    name: string | symbol,
    plugin: PluginFunction,
    dummy?,
    registerOptions?: RegisterOptions
  ): void;
  (type: ScullySystem, name: symbol, plugin: PluginFunction, dummy?, registerOptions?: RegisterOptions): void;
  (type: 'routeProcess', name: string | symbol, plugin: PluginFunction, priority?: number, registerOptions?: RegisterOptions): void;
  (type: 'fileHandler', name: string, plugin: PluginFunction, additionalTypes?: string[], registerOptions?: RegisterOptions): void;
}
