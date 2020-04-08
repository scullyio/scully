import {getConfig, getPluginConfig, setConfig, setPluginConfig} from './pluginManagement/pluginConfig';
import {configValidator, registerPlugin} from './pluginManagement/pluginRepository';
import './pluginManagement/systemPlugins';
import {ContentMetaData} from './renderPlugins/content-render-utils/readFileAndCheckPrePublishSlug';
import {HandledRoute} from './routerPlugins/addOptionalRoutesPlugin';
import {scullyConfig, updateScullyConfig} from './utils/config';
import {httpGetJson} from './utils/httpGetJson';
import {RouteTypes, ScullyConfig} from './utils/interfacesandenums';
import {replaceFirstRouteParamWithVal} from './utils/replaceFirstRouteParamWithVal';
import {routeSplit} from './utils/routeSplit';
import {getHandledRoutes} from './utils/services/routeStorage';
import {startScully} from './utils/startup';

export * from './utils/log';
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
  setConfig as setMyConfig,
};
