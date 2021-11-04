import {
  findPlugin,
  getConfig,
  getPluginConfig,
  setConfig,
  setPluginConfig,
  setPluginPriority,
} from './lib/pluginManagement/pluginConfig';
import { configValidator, registerPlugin } from './lib/pluginManagement/pluginRepository';
import './lib/pluginManagement/systemPlugins';
import { ContentMetaData } from './lib/renderPlugins/content-render-utils/readFileAndCheckPrePublishSlug';
import { renderRoute } from './lib/renderPlugins/executePlugins';
import { launchedBrowser$ } from './lib/renderPlugins/launchedBrowser';
export  * from './lib/renderPlugins/playwrightRenderPlugin';
import { ContentTextRoute, HandledRoute, RouteConfig } from './lib/routerPlugins/handledRoute.interface';
import { WriteToStorage } from './lib/systemPlugins/writeToFs.plugin';
import { createFolderFor } from './lib/utils';
import { prod } from './lib/utils/cli-options';
import { loadConfig, scullyConfig, updateScullyConfig } from './lib/utils/config';
import './lib/utils/exitHandler';
import { handleTravesal } from './lib/utils/handlers/handleTravesal';
import { routeDiscovery } from './lib/utils/handlers/routeDiscovery';
import { httpGetJson } from './lib/utils/httpGetJson';
import { RouteTypes, ScullyConfig } from './lib/utils/interfacesandenums';
import { replaceFirstRouteParamWithVal } from './lib/utils/replaceFirstRouteParamWithVal';
import { routeSplit } from './lib/utils/routeSplit';
import { staticServer } from './lib/utils/serverstuff/staticServer';
import { getHandledRoutes } from './lib/utils/services/routeStorage';
import { startScully } from './lib/utils/startup';
import { universalRender } from './lib/systemPlugins/universalRender';
export * from './lib/utils/log';
export * from './lib/utils/procesmanager';
export {
  configValidator,
  ContentMetaData,
  ContentTextRoute,
  createFolderFor,
  findPlugin,
  getHandledRoutes,
  getPluginConfig,
  HandledRoute,
  httpGetJson,
  registerPlugin,
  replaceFirstRouteParamWithVal,
  RouteConfig,
  routeSplit,
  RouteTypes,
  scullyConfig,
  ScullyConfig,
  setPluginConfig,
  startScully,
  universalRender,
  updateScullyConfig,
  /** WIP part, those might be remove again in near future. */
  handleTravesal,
  launchedBrowser$,
  loadConfig,
  renderRoute,
  routeDiscovery,
  staticServer,
  WriteToStorage,
  /** end WIP */
  getConfig as getMyConfig,
  setConfig as setMyConfig,
  prod,
  setPluginPriority,
};
