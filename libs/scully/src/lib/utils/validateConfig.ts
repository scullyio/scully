/* eslint-disable no-prototype-builtins */
import { existsSync } from 'fs';
import { join } from 'path';
import { configValidator, plugins, accessPluginDirectly } from '../pluginManagement/pluginRepository';
import { angularRoot } from './config';
import { ScullyConfig } from './interfacesandenums';
import { logError, logWarn, yellow } from './log';
import { configFileName } from './cli-options';
// import {configFileName} from './compileConfig';

// TODO: make sure all route options are validated.
let hasErrors = false;
const error = (...args) => {
  hasErrors = true;
  logError(...args);
};

export async function validateConfig(config: ScullyConfig): Promise<ScullyConfig> {
  // log(`Checking "${yellow('scully.json')}"`);
  /** make sure the config is completely loaded */
  // await loadConfig;
  const result: Partial<ScullyConfig> = { routes: {} };
  if (config.routes) {
    await Promise.all(
      Object.entries(config.routes).map(async ([route, definition]) => {
        if (!definition.type) {
          error(`Type missing in route "${yellow(route)}"`);
        }
        if (!plugins.router.hasOwnProperty(definition.type)) {
          error(`Unknown type "${yellow(definition.type)}" in route "${yellow(route)}"`);
        } else {
          const curPlugin = plugins.router[definition.type][accessPluginDirectly];
          const pluginErrors: string[] =
            (curPlugin && curPlugin[configValidator] && (await curPlugin[configValidator](definition))) || [];
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
    logWarn(`No routes defined in "${yellow(configFileName)}"`);
  }
  if (hasErrors) {
    /** stop everything if there are errors in the config. */
    process.exit(0);
  }
  return result as ScullyConfig;
}

export function checkFolderExists(folder: string): boolean {
  return existsSync(join(angularRoot, folder));
}
