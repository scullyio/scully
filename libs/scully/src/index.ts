import { getConfig, getPluginConfig, setConfig, setPluginConfig, findPlugin } from './lib/pluginManagement/pluginConfig';
import { configValidator, registerPlugin } from './lib/pluginManagement/pluginRepository';
import './lib/pluginManagement/systemPlugins';
import { ContentMetaData } from './lib/renderPlugins/content-render-utils/readFileAndCheckPrePublishSlug';
import { HandledRoute, ContentTextRoute } from './lib/routerPlugins/handledRoute.interface';
import { scullyConfig, updateScullyConfig, loadConfig } from './lib/utils/config';
import { httpGetJson } from './lib/utils/httpGetJson';
import { RouteTypes, ScullyConfig } from './lib/utils/interfacesandenums';
import { replaceFirstRouteParamWithVal } from './lib/utils/replaceFirstRouteParamWithVal';
import { routeSplit } from './lib/utils/routeSplit';
import { getHandledRoutes } from './lib/utils/services/routeStorage';
import { startScully } from './lib/utils/startup';
import { staticServer } from './lib/utils/serverstuff/staticServer';
import { handleTravesal } from './lib/utils/handlers/handleTravesal';
import { routeDiscovery } from './lib/utils/handlers/routeDiscovery';
import { renderRoute } from './lib/renderPlugins/executePlugins';
import { WriteToStorage } from './lib/systemPlugins/writeToFs.plugin';
import { prod } from './lib/utils/cli-options';
import './lib/utils/exitHandler';
export * from './lib/utils/log';
export {
  configValidator,
  ContentMetaData,
  HandledRoute,
  ContentTextRoute,
  httpGetJson,
  registerPlugin,
  replaceFirstRouteParamWithVal,
  routeSplit,
  RouteTypes,
  scullyConfig,
  ScullyConfig,
  startScully,
  updateScullyConfig,
  getHandledRoutes,
  setPluginConfig,
  getPluginConfig,
  findPlugin,
  /** WIP part, those might be remove again in near future. */
  staticServer,
  loadConfig,
  handleTravesal,
  routeDiscovery,
  WriteToStorage,
  renderRoute,
  /** end WIP */
  getConfig as getMyConfig,
  setConfig as setMyConfig,
  prod,
};
