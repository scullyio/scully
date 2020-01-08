import {writeFileSync} from 'fs';
import {join} from 'path';
import {HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
import {scullyConfig} from '../utils/config';
import {createFolderFor} from '../utils/createFolderFor';
import {log, logError, yellow} from '../utils/log';

const routesFileName = '/assets/scully-routes.json';

export async function storeRoutes(routes: HandledRoute[]) {
  // TODO: do something with meta-data.
  let appFile;
  let staticFile;
  try {
    const jsonResult = JSON.stringify(routes.map(r => ({route: r.route || '/', ...r.data})));
    // logError('root', scullyConfig.projectRoot);
    appFile = join(scullyConfig.projectRoot, `..${routesFileName}`);
    createFolderFor(appFile);
    writeFileSync(appFile, jsonResult);
    staticFile = join(scullyConfig.outDir, routesFileName);
    createFolderFor(staticFile);
    writeFileSync(staticFile, jsonResult);
    log(`Route list created in files:
      ${yellow(appFile)}
      ${yellow(staticFile)}`);
  } catch {
    logError(`Could not write routes to files:
    ${yellow(appFile)}
    ${yellow(staticFile)}`);
  }
}
