import {parseAngularRoutes} from 'guess-parser';
import {scullyConfig} from '../utils/config';

export const traverseAppRoutes = async (appRootFolder = scullyConfig.projectRoot) => {
  try {
    const routes = parseAngularRoutes(appRootFolder).map(r => r.path);

    return routes;
  } catch (e) {
    console.log('e', e);
    throw new Error('Scully could not traverse routes');
  }
};
