import {registerPlugin, configValidator} from './pluginManagement/pluginRepository';
import './pluginManagement/systemPlugins';
import {HandledRoute} from './routerPlugins/addOptionalRoutesPlugin';
import {updateScullyConfig} from './utils/config';
import {RouteTypes, ScullyConfig} from './utils/interfacesandenums';
import {routeSplit} from './utils/routeSplit';
import {startScully} from './utils/startup';

export {startScully, updateScullyConfig, ScullyConfig, registerPlugin, HandledRoute, RouteTypes, routeSplit, configValidator};
