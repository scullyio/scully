import open from 'open';
import { join } from 'path';
import { captureException, green, hostName, httpGetJson, installExitHandler, isPortTaken, loadConfig, log, logError, logWarn, moveDistAngular, openNavigator, removeStaticDist, ScullyConfig, scullyDefaults, ssl, startScully, waitForServerToBeAvailable, watch, yellow } from '../';
import { DotProps, readAllDotProps, readDotProperty, writeDotProperty } from '../scullydot';
import { startBackgroundServer } from './startBackgroundServer';
import { bootServe, isBuildThere, watchMode } from './watchMode';

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


  updateDotProps(scullyConfig);


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
      log(`  ${green('✔')} scully serve already running`);
    }
    if (!(await waitForServerToBeAvailable().catch((e) => {
      console.error(e);
      return false
    }))) {
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
  const dotProps = readAllDotProps();
  await bootServe();
  if (openNavigator) {
    await open(`http${ssl ? 's' : ''}://${dotProps.hostName}:${dotProps.staticPort}/`);
  }
}

export async function killScullyServer(doesExit = true) {
  // const { scullyConfig }: { scullyConfig: ScullyConfig; } = await getConfig();

  const hostName = readDotProperty('hostName') || 'localhost';
  const appPort = readDotProperty('appPort') || '1864';

  /** do we need to kill something? */
  await httpGetJson(`http://${hostName}:${appPort}/killMe`, {
    suppressErrors: true,
  }).catch((e) => {
    captureException(e);
    return e;
  });
  await httpGetJson(`https://${hostName}:${appPort}/killMe`, {
    suppressErrors: true,
  }).catch((e) => {
    captureException(e);
    return e;
  });
  if (doesExit) {
    logWarn('Sent kill command to server');
    process.exit(0);
  }
  logWarn('Sent kill command to other server');
}


export function updateDotProps(scullyConfig) {
  const dotProps = readAllDotProps();
  const newProps: Partial<DotProps> = {
    appPort: scullyConfig.appPort,
    staticPort: scullyConfig.staticPort,
    reloadPort: scullyConfig.reloadPort,
    hostName: scullyConfig.hostName,
    projectName: scullyConfig.projectName,
    homeFolder: scullyConfig.homeFolder,
    hostFolder: scullyConfig.hostFolder,
    distFolder: scullyConfig.distFolder,
    outHostFolder: scullyConfig.outHostFolder,
    outDir: scullyConfig.outDir,
    proxyConfig: scullyConfig.proxyConfig,
    handle404: scullyConfig.handle404,
  };
  Object.entries(newProps).forEach(([key, value]) => {
    const prop = key as keyof DotProps;
    if (dotProps[key] !== value) {
      writeDotProperty(prop, value);
    }
  });
};
