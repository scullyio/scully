import { writeFileSync } from 'fs';
import { join } from 'path';
import { HandledRoute } from '../routerPlugins/addOptionalRoutesPlugin';
import { scullyConfig } from '../utils/config';
import { createFolderFor } from '../utils/createFolderFor';
import { log, logError, yellow } from '../utils/log';
import { watch } from '../utils/cli-options';

const routesFileName = '/assets/scully-routes.json';

export async function storeRoutes(routes: HandledRoute[]) {
  const files = [
    /** in the scully outfolder */
    join(scullyConfig.outDir, routesFileName),
    /** in the angular dist folder */
    join(scullyConfig.homeFolder, scullyConfig.distFolder, routesFileName)
  ];
  if (!watch) {
    /** in the angular source folder */
    files.push(
      /** in the angular source folder */
      join(scullyConfig.homeFolder, scullyConfig.sourceRoot, routesFileName)
    );
  }
  try {
    const jsonResult = JSON.stringify(
      routes.map(r => ({ route: r.route || '/', ...r.data }))
    );
    const write = file => {
      createFolderFor(file);
      writeFileSync(file, jsonResult);
    };
    files.forEach(write);
    log(`Route list created in files:${files.map(
      f => `
  "${yellow(f)}"`
    )}
`);
  } catch {
    logError(`Could not write routes to files:${files.map(
      f => `
  "${yellow(f)}"`
    )}
`);
  }
}
