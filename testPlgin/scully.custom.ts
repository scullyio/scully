import {ScullyConfig, RouteTypes, startScully, registerPlugin, HandledRoute} from '@scullyio/scully';

registerPlugin('router', 'someName', async (route, configFromScullyDotJson) => [{route, type: RouteTypes.default} as HandledRoute]);

startScully();
