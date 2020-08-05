#!/usr/bin/env node

/**
 * The above line is needed to be able to run in npx and CI.
 */
import { readFileSync } from 'fs-extra';
import open from 'open';
import { join } from 'path';
import './lib/pluginManagement/systemPlugins';
import { startBackgroundServer } from './lib/startBackgroundServer';
import { ScullyConfig, waitForServerToBeAvailable } from './lib/utils';
import { hostName, openNavigator, removeStaticDist, ssl, watch } from './lib/utils/cli-options';
import { loadConfig, scullyDefaults } from './lib/utils/config';
import { moveDistAngular } from './lib/utils/fsAngular';
import { httpGetJson } from './lib/utils/httpGetJson';
import { logError, logWarn, yellow } from './lib/utils/log';
import { captureException } from './lib/utils/captureMessage';
import { isPortTaken } from './lib/utils/serverstuff/isPortTaken';
import { startScully } from './lib/utils/startup';
import { bootServe, isBuildThere, watchMode } from './lib/watchMode';
import './lib/utils/exitHandler';

/** the default of 10 is too shallow for generating pages. */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('events').defaultMaxListeners = 100;

if (process.argv.includes('version')) {
  const { version } = JSON.parse(readFileSync(join(__dirname, './package.json')).toString());
  process.exit(0);
}

(async () => {
  /** make sure not to do something before the config is ready */
  let scullyConfig: ScullyConfig;
  let err;
  /** load the config, and use the defaults when there is an error */
  try {
    scullyConfig = await loadConfig;
  } catch (e) {
    scullyConfig = scullyDefaults as ScullyConfig;
    /** store the error */
    err = e;
  }
  /** do we need to kill something? */
  if (process.argv.includes('killServer')) {
    await httpGetJson(`http://${scullyConfig.hostName}:${scullyConfig.appPort}/killMe`, {
      suppressErrors: true,
    }).catch((e) => {
      captureException(e);
      return e;
    });
    await httpGetJson(`https://${scullyConfig.hostName}:${scullyConfig.appPort}/killMe`, {
      suppressErrors: true,
    }).catch((e) => {
      captureException(e);
      return e;
    });
    logWarn('Sent kill command to server');
    process.exit(0);
  }

  if (err) {
    captureException(err);
    /** exit due to severe error during config parsing */
    process.exit(15);
  }

  if (hostName) {
    scullyConfig.hostName = hostName;
  }
  await isBuildThere(scullyConfig);

  if (process.argv.includes('serve')) {
    await bootServe(scullyConfig);
    if (openNavigator) {
      await open(`http${ssl ? 's' : ''}://${scullyConfig.hostName}:${scullyConfig.staticport}/`);
    }
  } else {
    const folder = join(scullyConfig.homeFolder, scullyConfig.distFolder);
    /** copy in current build artifacts */
    await moveDistAngular(folder, scullyConfig.outDir, {
      removeStaticDist: removeStaticDist,
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
    if (openNavigator) {
      await open(`http${ssl ? 's' : ''}://${scullyConfig.hostName}:${scullyConfig.staticport}/`);
    }
    if (watch) {
      watchMode(join(scullyConfig.homeFolder, scullyConfig.distFolder) || join(scullyConfig.homeFolder, './dist/browser'));
    } else {
      // console.log('servers available');
      await startScully();
      if (!isTaken && typeof scullyConfig.hostUrl !== 'string') {
        // kill serve ports
        await httpGetJson(`http${ssl ? 's' : ''}://${scullyConfig.hostName}:${scullyConfig.appPort}/killMe`, {
          suppressErrors: true,
        });
      }
      /** done, stop the program */
      process.exit(0);
    }
  }
})();
