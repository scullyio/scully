#!/usr/bin/env node

/**
 * The above line is needed to be able to run in npx and CI.
 */
import { readFileSync } from 'fs-extra';
import open from 'open';
import { join } from 'path';
import './lib/pluginManagement/systemPlugins';
import { startBackgroundServer } from './lib/startBackgroundServer';
import * as cliOption from './lib/utils/cli-options';
import { ssl } from './lib/utils/cli-options';
import { loadConfig } from './lib/utils/config';
import { moveDistAngular } from './lib/utils/fsAngular';
import { httpGetJson } from './lib/utils/httpGetJson';
import { isPortTaken } from './lib/utils/serverstuff/isPortTaken';
import { logError, logWarn, yellow } from './lib/utils/log';
import { startScully } from './lib/utils/startup';
import { waitForServerToBeAvailable } from './lib/utils';
import { bootServe, isBuildThere, watchMode } from './lib/watchMode';
import * as yargs from 'yargs';

/** the default of 10 is too shallow for generating pages. */
require('events').defaultMaxListeners = 100;

if (process.argv.includes('version')) {
  const { version } = JSON.parse(
    readFileSync(join(__dirname, './package.json')).toString()
  );
  process.exit(0);
}

(async () => {
  /** make sure not to do something before the config is ready */
  const scullyConfig = await loadConfig;
  if (cliOption.hostName) {
    scullyConfig.hostName = cliOption.hostName;
  }
  if (cliOption.killServer) {
    await httpGetJson(
      `http://${scullyConfig.hostName}:${scullyConfig.appPort}/killMe`,
      {
        suppressErrors: true,
      }
    ).catch((e) => e);
    await httpGetJson(
      `https://${scullyConfig.hostName}:${scullyConfig.appPort}/killMe`,
      {
        suppressErrors: true,
      }
    ).catch((e) => e);
    logWarn('Sent kill command to server');
    process.exit(0);
    return;
  }
  await isBuildThere(scullyConfig);

  if (process.argv.includes('serve')) {
    await bootServe(scullyConfig);
    if (cliOption.openNavigator) {
      await open(
        `http${ssl ? 's' : ''}://${scullyConfig.hostName}:${
          scullyConfig.staticport
        }/`
      );
    }
  } else {
    const folder = join(scullyConfig.homeFolder, scullyConfig.distFolder);
    /** copy in current build artifacts */
    await moveDistAngular(folder, scullyConfig.outDir, {
      removeStaticDist: cliOption.removeStaticDist,
      reset: false,
    });
    const isTaken = await isPortTaken(scullyConfig.staticport);

    if (typeof scullyConfig.hostUrl === 'string') {
      logWarn(`
You are using "${yellow(scullyConfig.hostUrl)}" as server.
      `);
    } else {
      /** server ports already in use? */
      if (!isTaken) {
        startBackgroundServer(scullyConfig);
      } else {
        // debug only
        console.log(`Background servers already running.`);
      }
      if (!(await waitForServerToBeAvailable().catch((e) => false))) {
        logError('Could not connect to server');
        process.exit(15);
      }
    }
    if (cliOption.openNavigator) {
      await open(
        `http${ssl ? 's' : ''}://${scullyConfig.hostName}:${
          scullyConfig.staticport
        }/`
      );
    }
    if (cliOption.watch) {
      watchMode(
        join(scullyConfig.homeFolder, scullyConfig.distFolder) ||
          join(scullyConfig.homeFolder, './dist/browser')
      );
    } else {
      // console.log('servers available');
      await startScully();
      if (!isTaken && typeof scullyConfig.hostUrl !== 'string') {
        // kill serve ports
        await httpGetJson(
          `http${ssl ? 's' : ''}://${scullyConfig.hostName}:${
            scullyConfig.appPort
          }/killMe`,
          {
            suppressErrors: true,
          }
        );
      }
      /** done, stop the program */
      process.exit(0);
    }
  }
})();
