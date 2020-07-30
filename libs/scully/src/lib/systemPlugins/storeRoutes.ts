import { writeFileSync } from 'fs';
import { join } from 'path';
import { HandledRoute } from '../routerPlugins/handledRoute.interface';
import { watch } from '../utils/cli-options';
import { scullyConfig } from '../utils/config';
import { createFolderFor } from '../utils/createFolderFor';
import { log, logError, logWarn, yellow, printProgress } from '../utils/log';
import { registerPlugin, scullySystem } from '../pluginManagement';

export const routesFileName = '/assets/scully-routes.json';

export const storeRoutes = Symbol('storeRoutes');
registerPlugin(scullySystem, storeRoutes, storeRoutesPlugin);
async function storeRoutesPlugin(routes: HandledRoute[]) {
  const files = [
    /** in the scully outfolder */
    join(scullyConfig.outDir, routesFileName),
    /** in the angular dist folder */
    join(scullyConfig.homeFolder, scullyConfig.distFolder, routesFileName),
  ];
  if (!watch) {
    /** in the angular source folder */
    files.push(
      /** in the angular source folder */
      join(scullyConfig.homeFolder, scullyConfig.sourceRoot, routesFileName)
    );
  } else {
    logWarn(`running in watch-mode, routefile in source assets will not be updated`);
  }
  try {
    const jsonResult = JSON.stringify(
      routes.map((r) => ({
        route: r.route || '/',
        title: r.title,
        ...r.data,
      }))
    );
    const write = (file, i, collection) => {
      createFolderFor(file);
      printProgress(i + 1, 'Creating Route List:', collection.length);
      writeFileSync(file, jsonResult);
    };
    files.forEach(write);
    log(`Route list created in files:${files.map(
      (f) => `
  "${yellow(f)}"`
    )}
`);
    printProgress(files.length, 'Created Route List:', files.length);
  } catch {
    logError(`Could not write routes to files:${files.map(
      (f) => `
  "${yellow(f)}"`
    )}
`);
  }
}
