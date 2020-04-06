import {existsSync} from 'fs-extra';
import {join} from 'path';
// server.js
import {Server} from 'ws';
import {scullyConfig, ScullyConfig, startScully} from '.';
import * as cliOptions from './utils/cli-options';
import {loadConfig} from './utils/config';
import {checkChangeAngular} from './utils/fsAngular';
import {checkStaticFolder} from './utils/fsFolder';
import {httpGetJson} from './utils/httpGetJson';
import {log, logError, yellow, green, logWarn} from './utils/log';
import {closeExpress, staticServer} from './utils/serverstuff/staticServer';

export async function bootServe(scullyConfig: ScullyConfig) {
  const port = cliOptions.path || scullyConfig.staticport;
  console.log('starting static server');
  process.title = 'ScullyServer';
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
    await httpGetJson(`http://${scullyConfig.hostName}:${scullyConfig.appPort}/killMe`, {
      suppressErrors: true,
    }).catch(e => e);
    await httpGetJson(`https://${scullyConfig.hostName}:${scullyConfig.appPort}/killMe`, {
      suppressErrors: true,
    }).catch(e => e);
    process.exit(0);
  });

  readline.question(``, async command => {
    if (command.toLowerCase() === 'r') {
      startScully().then(() => {
        readline.close();
        checkForManualRestart();
      });
    } else if (command.toLowerCase() === 'q') {
      await httpGetJson(`http://${scullyConfig.hostName}:${scullyConfig.appPort}/killMe`, {
        suppressErrors: true,
      }).catch(e => e);
      await httpGetJson(`https://${scullyConfig.hostName}:${scullyConfig.appPort}/killMe`, {
        suppressErrors: true,
      }).catch(e => e);
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
  logError(`Angular distribution files not found, run "ng build" first`);
  process.exit(15);
}

let wss;
async function enableLiveReloadServer() {
  await loadConfig;
  try {
    log('enable reload on port', scullyConfig.reloadPort);
    // tslint:disable-next-line:only-arrow-functions
    wss = new Server({port: scullyConfig.reloadPort, noServer: true});
    wss.on('connection', client => {
      client.on('message', message => {
        // console.log(`Received message => ${message}`);
      });
      client.send('Hello! Message From Server!!');
    });
  } catch (e) {
    logError(`
-----------------------------------
The port "${yellow(scullyConfig.reloadPort)}" is not available for the live-reload server.
live reload will not be available. You can configure a different port in the config file.
-----------------------------------`);
  }
  wss = undefined;
}

if (cliOptions.watch && !cliOptions.serve) {
  enableLiveReloadServer();
}

export function reloadAll() {
  console.log('send reload');
  if (wss) {
    wss.clients.forEach(client => client.send('reload'));
  }
}

export function createScript(): string {
  return `
  <script>
  let wSocket;
  let tries = 0;
  const connect = () => {
    try {
    wSocket = new WebSocket('ws://${scullyConfig.hostName}:${scullyConfig.reloadPort}');
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
