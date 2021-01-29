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
export type rendererDomPlugin = (dom?: JSDOM, route?: HandledRoute) => Promise<JSDOM>;
export type RenderPlugin = (html?: string, route?: HandledRoute) => Promise<string>;
export type RouteProcess = { (routes?: HandledRoute[]): Promise<HandledRoute[]>; [routeProcessPriority]?: number };
export type RouteDiscoveryPlugin = (routes?: HandledRoute[]) => Promise<void>;
export type AllDonePlugin = (routes?: HandledRoute[]) => Promise<void>;
export type FilePlugin = { (html: string, route?: HandledRoute): Promise<string>; [AlternateExtensionsForFilePlugin]?: string[] };
export type ScullySystemPlugin = (...args: unknown[]) => Promise<unknown>;
export type EnterprisePlugin = (...args: unknown[]) => Promise<unknown>;

export interface Plugins {
  render: { [name: string]: RenderPlugin };
  rendererHtml: { [name: string]: RenderPlugin };
  rendererDom: { [name: string]: rendererDomPlugin };
  router: { [name: string]: RoutePlugin };
  routeProcess: { [name: string]: RouteProcess };
  routeDiscoveryDone: { [name: string]: RouteDiscoveryPlugin };
  allDone: { [name: string]: AllDonePlugin };
  fileHandler: { [fileExtension: string]: FilePlugin };
  scullySystem: { [pluginSymbol: string]: (...args: unknown[]) => unknown };
  enterprise: { [pluginSymbol: string]: (...args: unknown[]) => unknown };
}
export interface PluginFuncs {
  rendererDom: rendererDomPlugin;
  rendererHtml: RenderPlugin;
  render: RenderPlugin;
  router: RoutePlugin;
  routeProcess: RouteProcess;
  routeDiscoveryDone: RouteDiscoveryPlugin;
  allDone: AllDonePlugin;
  fileHandler: FilePlugin;
  scullySystem: (...args: unknown[]) => unknown;
  enterprise: (...args: unknown[]) => unknown;
}
export type PluginTypes = keyof Plugins;

export type PluginFunction = (...args: unknown[]) => unknown;
export interface RegisterOptions {
  replaceExistingPlugin?: boolean;
}
