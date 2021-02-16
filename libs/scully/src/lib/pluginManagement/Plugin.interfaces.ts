import { JSDOM } from 'jsdom';
import { HandledRoute } from '../routerPlugins/handledRoute.interface';
import { AlternateExtensionsForFilePlugin, configValidator, routeProcessPriority } from './pluginRepository';
export type ScullySystem = `scullySystem`;

export type ErrorString = string;
export type ConfigValidator = (RouteConfig) => ErrorString[] | Promise<ErrorString[]>;

export type RoutePlugin = {
  (route?: string, config?: any): Promise<HandledRoute[]>;
  [configValidator]?: ConfigValidator | undefined;
};
export type postProcessByDomPlugin = (dom?: JSDOM, route?: HandledRoute) => Promise<JSDOM>;
export type RenderPlugin = (html?: string, route?: HandledRoute) => Promise<string>;
export type RouteProcess = { (routes?: HandledRoute[]): Promise<HandledRoute[]>; [routeProcessPriority]?: number };
export type RouteDiscoveryPlugin = (routes?: HandledRoute[]) => Promise<void>;
export type AllDonePlugin = (routes?: HandledRoute[]) => Promise<void>;
export type FilePlugin = { (html: string, route?: HandledRoute): Promise<string>; [AlternateExtensionsForFilePlugin]?: string[] };
export type ScullySystemPlugin = (...args: unknown[]) => Promise<unknown>;
export type EnterprisePlugin = (...args: unknown[]) => Promise<unknown>;

export interface Plugins {
  allDone: { [name: string]: AllDonePlugin };
  enterprise: { [pluginSymbol: string]: (...args: unknown[]) => unknown };
  fileHandler: { [fileExtension: string]: FilePlugin };
  postProcessByDom: { [name: string]: postProcessByDomPlugin };
  postProcessByHtml: { [name: string]: RenderPlugin };
  render: { [name: string]: RenderPlugin };
  routeDiscoveryDone: { [name: string]: RouteDiscoveryPlugin };
  routeProcess: { [name: string]: RouteProcess };
  router: { [name: string]: RoutePlugin };
  scullySystem: { [pluginSymbol: string]: (...args: unknown[]) => unknown };
}
export interface PluginFuncs {
  allDone: AllDonePlugin;
  enterprise: (...args: unknown[]) => unknown;
  fileHandler: FilePlugin;
  postProcessByDom: postProcessByDomPlugin;
  postProcessByHtml: RenderPlugin;
  render: RenderPlugin;
  routeDiscoveryDone: RouteDiscoveryPlugin;
  routeProcess: RouteProcess;
  router: RoutePlugin;
  scullySystem: (...args: unknown[]) => unknown;
}
export type PluginTypes = keyof Plugins;

export type PluginFunction = (...args: unknown[]) => unknown;
export interface RegisterOptions {
  replaceExistingPlugin?: boolean;
}
