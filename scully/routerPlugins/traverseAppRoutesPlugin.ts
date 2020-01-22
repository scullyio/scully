import {parseAngularRoutes} from 'guess-parser';
import {scullyConfig} from '../utils/config';
import {logError, logWarn, log, green, yellow} from '../utils/log';
import * as yargs from 'yargs';

const {sge} = yargs
  .boolean('sge')
  .alias('sge', 'showGuessError')
  .describe('sb', 'dumps the error from guess to the console').argv;
export const traverseAppRoutes = async (appRootFolder = scullyConfig.projectRoot) => {
  const extraRoutes = await addExtraRoutes();
  let routes = [];
  try {
    routes = parseAngularRoutes(appRootFolder).map(r => r.path);
  } catch (e) {
    if (sge) {
      console.error(e);
    }
    logError(`
We encountered a problem while reading the routes from your applications source.
This might happen when there are lazy-loaded routes, that are not loaded,
Or when there are paths we can not resolve statically.
Check the routes in your app, rebuild and retry.
${yellow('(You can inspect the error by passing the --showGuessError flag')}

${green('When there are extraRoutes in your config, we will still try to render those.')}

`);
  }
  // process.exit(15);
  const allRoutes = [...routes, ...extraRoutes];
  if (allRoutes.findIndex(r => r === '') === -1) {
    logWarn(`

We did not find an empty route ({path:'', component:rootComponent}) in your app.
This means that the root of your application will be you normal angular app, and
is not rendered by Scully
In some circumstances this can be cause because a redirect like:
   ({path: '', redirectTo: 'home', pathMatch: 'full'})
is not picked up by our scanner.

${green(`By adding '' to the extraRoutes array in the scully.config option, you can bypass this issue`)}

`);
  }
  return allRoutes;
};

export async function addExtraRoutes(): Promise<string[]> {
  const extraRoutes: any[] = scullyConfig.extraRoutes;
  if (!extraRoutes) {
    return Promise.resolve([]);
  }

  if (!Array.isArray(extraRoutes)) {
    logWarn(`ExtraRoutes must be provided as an array. Current type: ${typeof extraRoutes}`);
    return Promise.resolve([]);
  } else {
    log(`Adding all extra routes (${extraRoutes.length})`);
    const extraRoutePromises = extraRoutes.map(extraRoute => {
      if (!extraRoute) {
        return Promise.resolve();
      }
      // It is a promise already
      if (extraRoute.then && {}.toString.call(extraRoute.then) === '[object Function]') {
        return extraRoute;
      }

      // Turn into promise<string>
      if (typeof extraRoute === 'string') {
        return Promise.resolve(extraRoute);
      }

      logWarn(
        `The extraRoute ${JSON.stringify(
          extraRoute
        )} needs to be either a string or a Promise<string|string[]>. Excluding for now. `
      );
      // Turn into promise<undefined>
      return Promise.resolve();
    });
    const extraRouteValues = await Promise.all(extraRoutePromises);
    extraRouteValues.reduce((acc, val) => {
      // Remove empties and just return acc
      if (!val) {
        return acc;
      }

      // Spread acc and arrays together
      if (Array.isArray(val)) {
        return [...acc, ...val];
      }

      // Append values into acc
      return [...acc, val];
    }, []);
    return extraRouteValues;
  }
}
