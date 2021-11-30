import { captureException } from '@sentry/node';
import open from 'open';
import { join } from 'path';
import { findPlugin } from '../../pluginManagement/pluginConfig.js';
import { hostName, openNavigator, project, removeStaticDist, ssl, watch } from '../cli-options.js';
import { loadConfig, routeRenderer, scullyDefaults } from '../config.js';
import { installExitHandler } from '../exitHandler.js';
import { moveDistAngular } from '../fsAngular.js';
import { httpGetJson } from '../httpGetJson.js';
import { ScullyConfig } from '../interfacesandenums.js';
import { green, log, logError, logWarn, yellow } from '../log.js';
import { DotProps, readAllDotProps, readDotProperty, writeDotProperty } from '../scullydot.js';
import { isPortTaken } from '../serverstuff/isPortTaken.js';
import { waitForServerToBeAvailable } from '../serverstuff/waitForServerToBeAvailable.js';
import { startBackgroundServer } from './startBackgroundServer.js';
import { startScully } from './startup.js';
import { bootServe, isBuildThere, watchMode } from './watchMode.js';

export const scullyInit = async () => {
  installExitHandler();
  /** make sure not to do something before the config is ready */
  let { err, scullyConfig }: { err: any; scullyConfig: ScullyConfig } = await getConfig();

  if (err) {
    captureException(err);
    /** exit due to severe error during config parsing */
    process.exit(15);
  }

  if (hostName) {
    scullyConfig.hostName = hostName;
  }

  updateDotProps(scullyConfig);

  /**
   * this strange notation is there to prevent circular dependency errors
   * when lazy loading the plugin.
   */
  await checkIfRenderPluginIsLoaded(scullyConfig);

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
    if (
      !(await waitForServerToBeAvailable().catch((e) => {
        console.error(e);
        return false;
      }))
    ) {
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

async function checkIfRenderPluginIsLoaded(scullyConfig: ScullyConfig) {
  const pluginName = `@scullyio/${String.fromCharCode(115)}cully-plugin-puppeteer`;
  if (!findPlugin(routeRenderer, undefined, false)) {
    try {
      await import(pluginName);
    } catch {
      logError(` Notice:
      ============================================================
       The scully-plugin-puppeteer is not installed. please run:
         npm install ${pluginName}
       and try again.
      ============================================================`);
      process.exit(15);
    }
    logWarn(` Deprication Notice:
       ======================================================================
         From now on, the plugin that is being used to render a route is
         able to be changed by the user. You can do this by adding or
         enabling the plugin in the scully.json file. For your convenience,
         we loaded the Puppeteer plugin for you.

         To disable this warning enable the plugin of your choiche.
         for Puppteer please add:
             import '${pluginName}';
          to your scully.${scullyConfig.projectName}.config.ts file.

          When you get this waring while not using scully-plugin-puppeteer
          you need to set the defaultRouteRenderer to the name of your plugin.
          The defaultRouteRenderer is now set to '${routeRenderer}'.
       ======================================================================`);
  }
}

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
  if (project && dotProps.projectName !== project) {
    const { err, scullyConfig } = await getConfig();
    if (err) {
      process.exit(15);
    }
    await killScullyServer(false);
    updateDotProps(scullyConfig);
    await new Promise<void>((r) => setTimeout(() => r(), 2500));
  }
  await bootServe();
  if (openNavigator) {
    await open(`http${ssl ? 's' : ''}://${dotProps.hostName}:${dotProps.staticPort}/`);
  }
}

export async function prepServe() {
  console.log('preparing serve', project);
  const { err, scullyConfig } = await getConfig();
  if (err || !project || project !== scullyConfig.projectName) {
    logError('Project parameter missing, or loading its config failed');
    process.exit(15);
  }
  await killScullyServer(false);
  updateDotProps(scullyConfig);
  process.exit(0);
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
}
