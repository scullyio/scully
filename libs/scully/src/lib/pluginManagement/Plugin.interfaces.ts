import { JSDOM } from 'jsdom';
import { HandledRoute } from '../routerPlugins/handledRoute.interface.js';
import { AlternateExtensionsForFilePlugin, configValidator, routeProcessPriority, priority } from './pluginRepository.js';
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
export type BeforeAllPlugin = { (): Promise<void | undefined | boolean>; [priority]?: number };
export type FilePlugin = { (html: string, route?: HandledRoute): Promise<string>; [AlternateExtensionsForFilePlugin]?: string[] };
export type ScullySystemPlugin = PluginFunction;
export type EnterprisePlugin = PluginFunction;

export interface Plugins {
  beforeAll: { [name: string]: BeforeAllPlugin };
  allDone: { [name: string]: AllDonePlugin };
  enterprise: { [name: string]: EnterprisePlugin };
  fileHandler: { [fileExtension: string]: FilePlugin };
  postProcessByDom: { [name: string]: postProcessByDomPlugin };
  postProcessByHtml: { [name: string]: postProcessByHtmlPlugin };
  render: { [name: string]: postProcessByHtmlPlugin };
  routeDiscoveryDone: { [name: string]: RouteDiscoveryPlugin };
  routeProcess: { [name: string]: RouteProcess };
  router: { [name: string]: RoutePlugin };
  scullySystem: { [name: string]: ScullySystemPlugin };
}
export interface PluginFuncs {
  beforeAll: BeforeAllPlugin;
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
