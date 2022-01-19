import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { registerPlugin, scullySystem } from '../pluginManagement/pluginRepository.js';
import { HandledRoute } from '../routerPlugins/handledRoute.interface.js';
import { watch } from '../utils/cli-options.js';
import { scullyConfig } from '../utils/config.js';
import { createFolderFor } from '../utils/createFolderFor.js';
import { log, logError, logOk, printProgress, yellow } from '../utils/log.js';

export const routesFileName = '/assets/scully-routes.json';

export const storeRoutes = 'storeRoutes' as const;
registerPlugin(scullySystem, storeRoutes, storeRoutesPlugin);
async function storeRoutesPlugin(routes: HandledRoute[]) {
  /** in the angular source folder */
  const srcFile = join(scullyConfig.homeFolder, scullyConfig.sourceRoot, routesFileName);
  const files = [
    srcFile,
    /** in the scully outfolder */
    join(scullyConfig.outDir, routesFileName),
    /** in the angular dist folder */
    join(scullyConfig.homeFolder, scullyConfig.distFolder, routesFileName),
  ];
  try {
    const jsonResult = JSON.stringify(
      routes.map((r) => ({
        route: r.route || '/',
        title: r.title,
        ...r.data,
      }))
    );
    if (watch) {
      /** we need to compare in watch mode, so we don't enter an endless loop where the angular CLI and the Scully CLI keep updating ech other */
      try {
        const existing = readFileSync(srcFile).toString('utf-8').trim();
        if (jsonResult.trim() === existing) {
          /** the same. done, don't write */
          logOk('keep existing route file');
          return;
        }
      } catch (e) {
        /** there is an error, that mean a difference, just write the files */
      }
    }
    const write = (file, i, collection) => {
      createFolderFor(file);
      printProgress(i + 1, 'Creating Route List:', collection.length);
      writeFileSync(file, jsonResult);
    };
    files.forEach(write);
    logOk(`Route list created in files:${files.map(
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
