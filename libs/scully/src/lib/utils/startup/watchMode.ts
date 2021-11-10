import { existsSync } from 'fs-extra';
import { join } from 'path';
// server.js
import { Server } from 'ws';
import { installExitHandler, ScullyConfig, registerExitHandler, startScully, isPortTaken } from '../';
import { captureException } from '../captureMessage';
import { path, serve, watch, ssl } from '../cli-options';
import { httpGetJson } from '../httpGetJson';
import { loadConfig } from '../config';
import { checkChangeAngular } from '../fsAngular';
import { checkStaticFolder } from '../fsFolder';
import { green, logOk, logWarn, log, logError, yellow, startProgress, printProgress, stopProgress, orange } from '../log';
import { DotProps, readAllDotProps } from '../scullydot';
import { closeExpress, staticServer } from '../serverstuff/staticServer';

const dotProps = readAllDotProps();

export async function bootServe() {
  const port = path || dotProps.staticPort;
  if (await isPortTaken(port)) {
    // logWarn(`Port ${port} is already in use. aborted`);
    const otherProject = await httpGetJson(`http${ssl ? 's' : ''}://${dotProps.hostName}:${dotProps.appPort}/_pong`, {
      suppressErrors: true,
    }).then((res: (Partial<DotProps> & { res: boolean })) => {
      if (res && res.res) { return res as DotProps; }
    }).catch((e) => {
      // console.log(e);
      logWarn(`Port ${yellow(port)} is already in use by. It doesn't seem to be a Scully dev server`);
      process.exit(0);
    });
    if (
      otherProject &&
      otherProject.projectName === dotProps.projectName &&
      otherProject.identifier === dotProps.identifier
    ) {
      /** already running for this project, just log and exit */
      logOk(`Scully development server is already running for this project`);
      process.exit(0);
    } else {
      logWarn(`Port ${yellow(port)} is already in use by ${otherProject.projectName}`);
      process.exit(0);
    }
  }
  process.title = `Scully-dev-server-${dotProps.projectName}`;
  logOk(`Starting servers for project "${yellow(dotProps.projectName)}"`);
  if (!process.send) {
    installExitHandler();
    startProgress();
    process.title = 'ScullyServer';
    printProgress(undefined, 'Scully development Servers are running (press <ctrl-c> to abort)');
  }
  const gracefullExit = () => {
    stopProgress();
    logOk('Scully development Servers stopped, and exited');
  };
  registerExitHandler(gracefullExit)
  startStaticServer();

}

// TODO : we need rewrite this to observables for don't have memory leaks
// tslint:disable-next-line:variable-name
export async function watchMode(path: string) {
  await checkStaticFolder();
  // g for generate and the q for quit
  checkForManualRestart();
  // @ts-ignore
  await checkChangeAngular(path, false, true);
}

export function checkForManualRestart() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // @ts-ignore
  readline.addListener('close', async () => {
    log(`${yellow('------------------------------------------------------------')}`);
    log(`Killing Scully by ${green('ctrl+c')}.`);
    log(`${yellow('------------------------------------------------------------')}`);
    await httpGetJson(`http://${dotProps.hostName}:${dotProps.appPort}/killMe`, {
      suppressErrors: true,
    }).catch((e) => {
      captureException(e);
      return e;
    });
    await httpGetJson(`https://${dotProps.hostName}:${dotProps.appPort}/killMe`, {
      suppressErrors: true,
    }).catch((e) => {
      captureException(e);
      return e;
    });
    process.exit(0);
  });

  readline.question(``, async (command) => {
    if (command.toLowerCase() === 'r') {
      startScully().then(() => {
        readline.close();
        checkForManualRestart();
      });
    } else if (command.toLowerCase() === 'q') {
      await httpGetJson(`http://${dotProps.hostName}:${dotProps.appPort}/killMe`, {
        suppressErrors: true,
      }).catch((e) => {
        captureException(e);
        return e;
      });
      await httpGetJson(`https://${dotProps.hostName}:${dotProps.appPort}/killMe`, {
        suppressErrors: true,
      }).catch((e) => {
        captureException(e);
        return e;
      });
      process.exit(0);
      return;
    } else {
      log(`${yellow('------------------------------------------------------------')}`);
      log(`Press ${green('r')} for re-run Scully, or ${green('q')} for close the servers.`);
      log(`${yellow('------------------------------------------------------------')}`);
    }
  });
}

export function startScullyWatchMode(url: string) {
  startScully(url);
}

function startStaticServer() {
  staticServer();
}

let restartTimer: NodeJS.Timer;
export function restartStaticServer() {
  // tslint:disable-next-line: no-unused-expression
  restartTimer && clearTimeout(restartTimer);
  restartTimer = setTimeout(() => {
    closeExpress();
    startStaticServer();
  }, 500);
}

export async function isBuildThere(config: ScullyConfig) {
  const dist = join(config.homeFolder, config.distFolder);
  if (existsSync(dist) && existsSync(join(dist, 'index.html'))) {
    return true;
  }
  console.log(dist, config);
  logError(`Angular distribution files not found, run "ng build" first`);
  process.exit(15);
}

let wss;
async function enableLiveReloadServer() {
  await loadConfig();
  try {
    log('enable reload on port', dotProps.reloadPort);
    // tslint:disable-next-line:only-arrow-functions
    wss = new Server({ port: dotProps.reloadPort, noServer: true });
    wss.on('connection', (client) => {
      client.on('message', (message) => {
        // console.log(`Received message => ${message}`);
      });
      client.send('Hello! Message From Server!!');
    });
  } catch (e) {
    logError(`
-----------------------------------
The port "${yellow(dotProps.reloadPort)}" is not available for the live-reload server.
live reload will not be available. You can configure a different port in the config file.
-----------------------------------`);
  }
  wss = undefined;
}

if (watch && !serve) {
  enableLiveReloadServer();
}

export function reloadAll() {
  // console.log('send reload');
  if (wss) {
    wss.clients.forEach((client) => client.send('reload'));
  }
}

export function createScript(): string {
  const { hostName, reloadPort } = readAllDotProps();
  return `
  <script>
  let wSocket;
  let tries = 0;
  const connect = () => {
    try {
    wSocket = new WebSocket('ws://${hostName}:${reloadPort}');
    wSocket.addEventListener('open', () => {
      try {
        wSocket.send('hello');
      } catch (e) {}
    });

    wSocket.addEventListener('message', evt => {
      if (evt && evt.data === 'reload') {
        document.location.reload();
      }
    });

    wSocket.addEventListener('close', () => {
      wSocket = undefined;
      if (++tries < 15) {
        setTimeout(connect, 1500);
      }
    });

    wSocket.addEventListener('error', e => {
      try {
        wSocket.close();
      } catch (e) {}
      wSocket = undefined;
      if (++tries < 15) {
        setTimeout(connect, 1500);
      }
    });
  } catch(e) {
    setTimeout(connect,1500)
  }
  };
  connect();
  </script>
`;
}
