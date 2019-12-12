import {existsSync} from 'fs';
import {join} from 'path';
import {configValidator, plugins} from '../pluginManagement/pluginRepository';
import {angularRoot} from './config';
import {RouteTypes, ScullyConfig} from './interfacesandenums';
import {log, logError, logWarn, yellow} from './log';

// TODO: make sure all route options are validated.
let hasErrors = false;
const error = (...args) => {
  hasErrors = true;
  logError(...args);
};

export async function validateConfig(config: ScullyConfig) {
  // log(`Checking "${yellow('scully.json')}"`);
  /** make sure the config is completely loaded */
  // await loadConfig;
  const result: Partial<ScullyConfig> = {routes: {}};
  if (config.projectRoot) {
    if (!checkFolderExists(config.projectRoot)) {
      error(`ProjectRoot folder not found "${yellow(config.projectRoot)}"`);
    }
    result.projectRoot = config.projectRoot;
  } else {
    error(`projectRoot missing in "${yellow('scully.json')}"`);
  }
  if (config.routes) {
    await Promise.all(
      Object.entries(config.routes).map(async ([route, definition]) => {
        if (!definition.type) {
          error(`Type missing in route "${yellow(route)}"`);
        }
        if (!plugins.router.hasOwnProperty(definition.type)) {
          error(`Unknown type "${yellow(definition.type)}" in route "${yellow(route)}"`);
        } else {
          const pluginErrors: string[] =
            (plugins.router[definition.type] &&
              plugins.router[definition.type][configValidator] &&
              (await plugins.router[definition.type][configValidator](definition))) ||
            [];
          if (pluginErrors.length) {
            error(`Route ${yellow(route)} has the following configuration issue(s): ${pluginErrors.map(
              (errMsg, i) => `\n   ${i + 1} ${errMsg}`
            )}
                  `);
          }
        }
        result.routes[route] = definition;
      })
    );
  } else {
    logWarn('No routes defined in "scully.config"');
  }
  if (hasErrors) {
    /** stop everthing if there are errors in the config. */
    process.exit(0);
  }
  return result as ScullyConfig;
}

export function checkFolderExists(folder: string): boolean {
  return existsSync(join(angularRoot, folder));
}
