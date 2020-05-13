import {
  getConfig,
  getPluginConfig,
  setConfig,
  setPluginConfig
} from './lib/pluginManagement/pluginConfig';
import {
  configValidator,
  registerPlugin
} from './lib/pluginManagement/pluginRepository';
import './lib/pluginManagement/systemPlugins';
import { ContentMetaData } from './lib/renderPlugins/content-render-utils/readFileAndCheckPrePublishSlug';
import { HandledRoute } from './lib/routerPlugins/addOptionalRoutesPlugin';
import { scullyConfig, updateScullyConfig } from './lib/utils/config';
import { httpGetJson } from './lib/utils/httpGetJson';
import { RouteTypes, ScullyConfig } from './lib/utils/interfacesandenums';
import { replaceFirstRouteParamWithVal } from './lib/utils/replaceFirstRouteParamWithVal';
import { routeSplit } from './lib/utils/routeSplit';
import { getHandledRoutes } from './lib/utils/services/routeStorage';
import { startScully } from './lib/utils/startup';

export * from './lib/utils/log';
export {
  configValidator,
  ContentMetaData,
  HandledRoute,
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
  getConfig as getMyConfig,
  setConfig as setMyConfig
};
