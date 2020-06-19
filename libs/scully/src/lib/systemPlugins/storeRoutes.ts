import { writeFileSync } from 'fs';
import { join } from 'path';
import { HandledRoute } from '../routerPlugins/addOptionalRoutesPlugin';
import { watch } from '../utils/cli-options';
import { scullyConfig } from '../utils/config';
import { createFolderFor } from '../utils/createFolderFor';
import { log, logError, logWarn, yellow } from '../utils/log';

export const routesFileName = '/assets/scully-routes.json';

export async function storeRoutes(routes: HandledRoute[]) {
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
    logWarn(
      `running in watch-mode, routefile in source assets will not be updated`
    );
  }
  try {
    const jsonResult = JSON.stringify(
      routes.map((r) => ({
        route: r.route || '/',
        title: r.title,
        ...r.data,
      }))
    );
    const write = (file) => {
      createFolderFor(file);
      writeFileSync(file, jsonResult);
    };
    files.forEach(write);
    log(`Route list created in files:${files.map(
      (f) => `
  "${yellow(f)}"`
    )}
`);
  } catch {
    logError(`Could not write routes to files:${files.map(
      (f) => `
  "${yellow(f)}"`
    )}
`);
  }
}
