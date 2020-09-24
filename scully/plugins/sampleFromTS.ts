import { HandledRoute, registerPlugin, routeSplit, ScullyConfig } from '@scullyio/scully';

/** you can load this data any way you like, even import it from some static TS file isn't a problem. */
const myData = [1, 45, 6, 23, 77];

registerPlugin('router', 'mySample', async (route: string, config) => {
  const { createPath } = routeSplit(route);
  const myRoutes: HandledRoute[] = myData.map((id) => ({
    type: 'mySample',
    route: createPath('' + id),
  }));

  return myRoutes;
});

/** in your config do somthing like:

export const config: ScullyConfig = {
  routes: {
    '/fromData/:id': {
      type: 'mySample',
    },
  },
};

*/
