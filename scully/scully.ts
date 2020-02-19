#!/usr/bin/env node

/**
 * The above line is needed to be able to run in npx and CI.
 */
import {readFileSync} from 'fs-extra';
import {join} from 'path';
import './pluginManagement/systemPlugins';
import {startBackgroundServer} from './startBackgroundServer';
import {loadConfig} from './utils/config';
import {moveDistAngular} from './utils/fsAngular';
import {httpGetJson} from './utils/httpGetJson';
import {isPortTaken} from './utils/isPortTaken';
import {logError, logWarn, yellow} from './utils/log';
import {startScully} from './utils/startup';
import {waitForServerToBeAvailable} from './utils/waitForServerToBeAvailable';
import {bootServe, isBuildThere, watchMode} from './watchMode';
import * as cliOption from './utils/cli-options';
const open = require('open');

/** the default of 10 is too shallow for generating pages. */
require('events').defaultMaxListeners = 100;

if (process.argv.includes('version')) {
  const {version} = JSON.parse(readFileSync(join(__dirname, './package.json')).toString());
  console.log('version:', version);
  process.exit(0);
}

(async () => {
  /** make sure not to do something before the config is ready */
  const scullyConfig = await loadConfig;
  if (cliOption.hostName) {
    scullyConfig.hostName = cliOption.hostName;
  }
  if (cliOption.killServer) {
    await httpGetJson(`http://${scullyConfig.hostName}:${scullyConfig.appPort}/killMe`, {
      suppressErrors: true,
    });
    process.exit(0);
    return;
  }
  await isBuildThere(scullyConfig);

  if (process.argv.includes('serve')) {
    await bootServe(scullyConfig);
    if (cliOption.openNavigator) {
      await open(`http://${scullyConfig.hostName}:${scullyConfig.staticport}/`);
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
      if (!(await waitForServerToBeAvailable().catch(e => false))) {
        logError('Could not connect to server');
        process.exit(15);
      }
    }
    if (cliOption.openNavigator) {
      await open(`http://${scullyConfig.hostName}:${scullyConfig.staticport}/`);
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
        await httpGetJson(`http://${scullyConfig.hostName}:${scullyConfig.appPort}/killMe`, {
          suppressErrors: true,
        });
      }
      /** done, stop the program */
      process.exit(0);
    }
  }
})();
