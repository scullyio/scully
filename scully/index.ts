import {configValidator, registerPlugin} from './pluginManagement/pluginRepository';
import './pluginManagement/systemPlugins';
import {HandledRoute} from './routerPlugins/addOptionalRoutesPlugin';
import {updateScullyConfig, scullyConfig} from './utils/config';
import {httpGetJson} from './utils/httpGetJson';
import {RouteTypes, ScullyConfig} from './utils/interfacesandenums';
import {replaceFirstRouteParamWithVal} from './utils/replaceFirstRouteParamWithVal';
import {routeSplit} from './utils/routeSplit';
import {startScully} from './utils/startup';

export {
  startScully,
  updateScullyConfig,
  ScullyConfig,
  registerPlugin,
  HandledRoute,
  RouteTypes,
  routeSplit,
  replaceFirstRouteParamWithVal,
  configValidator,
  httpGetJson,
  scullyConfig,
};
