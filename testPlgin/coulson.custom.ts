import {ScullyConfig, RouteTypes, startScully, registerPlugin, HandledRoute} from '@scullyio/scully';

registerPlugin('router', 'someName', async (route, configFromScullyDotJson) => [{route, type: 'someName'} as HandledRoute]);

startScully();
