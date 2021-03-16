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
export type PluginFunction = (...args: any[]) => any;
export type postProcessByDomPlugin = (dom?: JSDOM, route?: HandledRoute) => Promise<JSDOM>;
export type postProcessByHtmlPlugin = (html?: string, route?: HandledRoute) => Promise<string>;
export type RouteProcess = { (routes?: HandledRoute[]): Promise<HandledRoute[]>; [routeProcessPriority]?: number };
export type RouteDiscoveryPlugin = (routes?: HandledRoute[]) => Promise<void>;
export type AllDonePlugin = (routes?: HandledRoute[]) => Promise<void>;
export type FilePlugin = { (html: string, route?: HandledRoute): Promise<string>; [AlternateExtensionsForFilePlugin]?: string[] };
export type ScullySystemPlugin = PluginFunction;
export type EnterprisePlugin = PluginFunction;

export interface Plugins {
  allDone: { [name: string]: AllDonePlugin };
  enterprise: { [pluginSymbol: string]: EnterprisePlugin };
  fileHandler: { [fileExtension: string]: FilePlugin };
  postProcessByDom: { [name: string]: postProcessByDomPlugin };
  postProcessByHtml: { [name: string]: postProcessByHtmlPlugin };
  render: { [name: string]: postProcessByHtmlPlugin };
  routeDiscoveryDone: { [name: string]: RouteDiscoveryPlugin };
  routeProcess: { [name: string]: RouteProcess };
  router: { [name: string]: RoutePlugin };
  scullySystem: { [pluginSymbol: string]: ScullySystemPlugin };
}
export interface PluginFuncs {
  allDone: AllDonePlugin;
  enterprise: EnterprisePlugin;
  fileHandler: FilePlugin;
  postProcessByDom: postProcessByDomPlugin;
  postProcessByHtml: postProcessByHtmlPlugin;
  render: postProcessByHtmlPlugin;
  routeDiscoveryDone: RouteDiscoveryPlugin;
  routeProcess: RouteProcess;
  router: RoutePlugin;
  scullySystem: ScullySystemPlugin;
}
export type PluginTypes = keyof Plugins;

export interface RegisterOptions {
  replaceExistingPlugin?: boolean;
}
