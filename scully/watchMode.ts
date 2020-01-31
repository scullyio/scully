import {existsSync} from 'fs-extra';
import {join} from 'path';
import * as yargs from 'yargs';
import {scullyConfig, ScullyConfig, startScully} from '.';
import {checkChangeAngular} from './utils/fsAngular';
import {checkStaticFolder} from './utils/fsFolder';
import {httpGetJson} from './utils/httpGetJson';
import {logError} from './utils/log';
import {closeExpress, staticServer} from './utils/staticServer';

const {argv: options} = yargs
  .option('path', {
    alias: 'p',
    type: 'string',
    description: 'The path to generate',
  })
  .option('port', {
    alias: 'p',
    type: 'number',
    description: 'The port to run on',
  });

export async function bootServe(scullyConfig: ScullyConfig) {
  const port = options.path || scullyConfig.staticport;
  console.log('starting static server');
  process.title = 'ScullyServer';
  checkChangeAngular(options.path);
  if (scullyConfig.homeFolder !== options.folder) {
    closeExpress();
    await httpGetJson(`http://${scullyConfig.hostName}:${scullyConfig.appPort}/killMe`, {
      suppressErrors: true,
    });
  }
  restartStaticServer();
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

  readline.question(`Press g for manual regenerate, or q for close the server.`, command => {
    if (command.toLowerCase() === 'g') {
      startScully().then(() => checkForManualRestart());
    } else if (command.toLowerCase() === 'q') {
      readline.close();
      process.exit(0);
    } else {
      console.log(`Press g for manual regenerate, or q for close the server.`);
    }
  });
}

export function startScullyWatchMode(url: string) {
  startScully(scullyConfig, url);
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
