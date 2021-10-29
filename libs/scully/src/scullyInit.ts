import open from 'open';
import { join } from 'path';
import { startBackgroundServer } from './lib/startBackgroundServer';
import { ScullyConfig, waitForServerToBeAvailable } from './lib/utils';
import { captureException } from './lib/utils/captureMessage';
import { hostName, openNavigator, removeStaticDist, ssl, watch } from './lib/utils/cli-options';
import { loadConfig, scullyDefaults } from './lib/utils/config';
import { installExitHandler } from './lib/utils/exitHandler';
import { moveDistAngular } from './lib/utils/fsAngular';
import { httpGetJson } from './lib/utils/httpGetJson';
import { logError, logWarn, yellow } from './lib/utils/log';
import { isPortTaken } from './lib/utils/serverstuff/isPortTaken';
import { startScully } from './lib/utils/startup';
import { bootServe, isBuildThere, watchMode } from './lib/watchMode';
import {startPSRunner} from './lib/utils'

export const scullyInit = async () => {
  installExitHandler();
  /** make sure not to do something before the config is ready */
  let { err, scullyConfig }: { err: any; scullyConfig: ScullyConfig; } = await getConfig();


  if (err) {
    captureException(err);
    /** exit due to severe error during config parsing */
    process.exit(15);
  }

  if (hostName) {
    scullyConfig.hostName = hostName;
  }

  /** check if the dist folder containes a build */
  await isBuildThere(scullyConfig);

  /** copy in current build artifacts */
  const folder = join(scullyConfig.homeFolder, scullyConfig.distFolder);
  await moveDistAngular(folder, scullyConfig.outDir, {
    removeStaticDist: removeStaticDist,
    reset: false,
  });

  const isTaken = await isPortTaken(scullyConfig.staticPort);

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
    await open(`http${ssl ? 's' : ''}://${scullyConfig.hostName}:${scullyConfig.staticPort}/`);
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

};


let scullyConfig: ScullyConfig;
async function getConfig() {
  let err;
  if (scullyConfig !== undefined) {
    return { err, scullyConfig };
  }
  /** load the config, and use the defaults when there is an error */
  try {
    scullyConfig = await loadConfig();
  } catch (e) {
    scullyConfig = scullyDefaults as ScullyConfig;
    /** store the error */
    err = e;
  }
  return { err, scullyConfig };
}

export async function startServer() {
  const { scullyConfig }: { scullyConfig: ScullyConfig; } = await getConfig();
  await bootServe(scullyConfig);
  if (openNavigator) {
    await open(`http${ssl ? 's' : ''}://${scullyConfig.hostName}:${scullyConfig.staticPort}/`);
  }
}

export async function killServer() {
  const { scullyConfig }: { scullyConfig: ScullyConfig; } = await getConfig();

  /** do we need to kill something? */
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


export async function scullyPs() {
  const { scullyConfig }: { scullyConfig: ScullyConfig; } = await getConfig();
  const isTaken = await isPortTaken(scullyConfig.staticPort);
  if (!isTaken) {
    startBackgroundServer(scullyConfig);
  } else {
    // debug only
    console.log(`Background servers already running.`);
  }
  await startPSRunner();
}
