import { getConfig, setConfig } from './lib/pluginManagement/pluginConfig';
import './lib/pluginManagement/systemPlugins.js';
import './lib/utils/exitHandler.js';
import { configValidator, registerPlugin } from './lib/pluginManagement/pluginRepository';
import './lib/pluginManagement/systemPlugins';
import { ContentMetaData } from './lib/renderPlugins/content-render-utils/readFileAndCheckPrePublishSlug';
import { renderRoute } from './lib/renderPlugins/executePlugins';
import { ContentTextRoute, HandledRoute, RouteConfig } from './lib/routerPlugins/handledRoute.interface';
import { WriteToStorage } from './lib/systemPlugins/writeToFs.plugin';
import { loadConfig, routeRenderer, scullyConfig, updateScullyConfig } from './lib/utils/config';
import { findPlugin, getPluginConfig, setPluginConfig, setPluginPriority } from './lib/pluginManagement/pluginConfig.js';
import './lib/utils/exitHandler';
import { handleTravesal } from './lib/utils/handlers/handleTravesal';
import { routeDiscovery } from './lib/utils/handlers/routeDiscovery';
import { httpGetJson } from './lib/utils/httpGetJson';
import { RouteTypes, ScullyConfig } from './lib/utils/interfacesandenums';
import { replaceFirstRouteParamWithVal } from './lib/utils/replaceFirstRouteParamWithVal';
import { routeSplit } from './lib/utils/routeSplit';
import { staticServer } from './lib/utils/serverstuff/staticServer';
import { title404 } from './lib/utils/serverstuff/title404';
import { getHandledRoutes } from './lib/utils/services/routeStorage';

export * from './lib/utils/log.js';
export { enableSPS } from './lib/utils/platform-server/startupSpS.js';
export { Deferred } from './lib/utils/platform-server/deferred.js';
export { SPSRouteRenderer } from './lib/utils/platform-server/serverPlatformRender';
export * from './lib/utils/log';
export { waitForIt } from './lib/utils/waitForIt';
import { createFolderFor } from './lib/utils/createFolderFor.js';
import { startScully } from './lib/utils/startup/startup';
import * as cliOptions from './lib/utils/cli-options.js';

export {
  title404,
  routeRenderer,
  configValidator,
  cliOptions,
  ContentMetaData,
  ContentTextRoute,
  createFolderFor,
  findPlugin,
  getPluginConfig,
  setPluginConfig,
  setPluginPriority,
  getHandledRoutes,
  HandledRoute,
  httpGetJson,
  registerPlugin,
  replaceFirstRouteParamWithVal,
  RouteConfig,
  routeSplit,
  RouteTypes,
  scullyConfig,
  ScullyConfig,
  startScully,
  updateScullyConfig,
  /** WIP part, those might be remove again in near future. */
  handleTravesal,
  // launchedBrowser$,
  loadConfig,
  renderRoute,
  routeDiscovery,
  staticServer,
  WriteToStorage,
  /** end WIP */
  getConfig as getMyConfig,
  setConfig as setMyConfig,
};
