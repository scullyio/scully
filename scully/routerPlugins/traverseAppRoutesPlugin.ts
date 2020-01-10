import {parseAngularRoutes} from 'guess-parser';
import {scullyConfig} from '../utils/config';
import {logError} from '../utils/log';

export const traverseAppRoutes = async (appRootFolder = scullyConfig.projectRoot) => {
  try {
    const routes = parseAngularRoutes(appRootFolder).map(r => r.path);

    return routes;
  } catch (e) {
    // console.log('e', e);
    throw new Error('Scully could not traverse routes');
    logError(`
We encountered a problem while reading the routes from your applications source.
This might happen when there are lazy-loaded routes, that are not loaded,
Or when there are paths we can not resolve statically.
Check the routes in your app, rebuild and retry.
`);
    process.exit(15);
  }
};
