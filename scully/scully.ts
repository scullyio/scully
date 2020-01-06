#!/usr/bin/env node
// the above line is needed for node bin running

import {spawn} from 'child_process';
import {existsSync} from 'fs-extra';
import {join} from 'path';
import * as yargs from 'yargs';
import './pluginManagement/systemPlugins';
import {routeContentRenderer} from './renderPlugins/routeContentRenderer';
import {angularRoot, loadConfig} from './utils/config';
import {checkChangeAngular, existDistAngular, moveDistAngular} from './utils/fsAngular';
import {httpGetJson} from './utils/httpGetJson';
import {RouteTypes, ScullyConfig} from './utils/interfacesandenums';
import {isPortTaken} from './utils/isPortTaken';
import {logError} from './utils/log';
import {startScully} from './utils/startup';
import {closeExpress, staticServer} from './utils/staticServer';
import {waitForServerToBeAvailable} from './utils/waitForServerToBeAvailable';
import {checkStaticFolder} from './utils/fsFolder';
import * as os from 'os';
import {readFileSync, writeFileSync} from 'fs';

/** the default of 10 is too shallow for generating pages. */
require('events').defaultMaxListeners = 100;

let port;
// tslint:disable-next-line:variable-name
let _options = {};

(async () => {
  /** make sure not to do something before the config is ready */
  const scullyConfig = await loadConfig;
  await isBuildThere(scullyConfig);

  const {argv: options} = yargs
    .option('path', {
      alias: 'p',
      type: 'string',
      description: 'The path to generate',
    })
    .option('type', {
      alias: 't',
      type: 'string',
      description: 'The type to generate',
    })
    .option('port', {
      alias: 'p',
      type: 'number',
      description: 'The port to run on',
    });

  if (process.argv.includes('serve')) {
    port = options.path;
    console.log('starting static server...');
    process.title = 'ScullyServer';
    checkChangeAngular(options.path);
    restartStaticServer();
  } else {
    const folder = join(scullyConfig.homeFolder, scullyConfig.distFolder);

    if (!existDistAngular(scullyConfig.homeFolder)) {
      process.exit(15);
    }

    await moveDistAngular(folder, scullyConfig.outFolder, {removeStaticDist: true, reset: false});

    if (options.path && options.type) {
      routeContentRenderer({
        route: options.path,
        type: (options.type as unknown) as RouteTypes,
      });
      if (process.argv.includes('watch')) {
        _options = options;
        watchMode();
      }
    } else {
      /** server already up and running? */
      const isTaken = await isPortTaken(scullyConfig.staticport);
      if (!isTaken) {
        spawn('node', [join(scullyConfig.homeFolder, './node_modules/.bin/scully'), 'serve'], {
          detached: true,
        }).on('close', err => {
          if (+err > 0) {
            spawn(
              'node',
              [join(scullyConfig.homeFolder, './node_modules/@scullyio/scully/bin/scully.js'), 'serve'],
              {
                detached: true,
              }
            ).on('close', err2 => {
              if (+err2 > 0) {
                spawn('node', [join(scullyConfig.homeFolder, '/scully/bin/scully'), 'serve'], {
                  detached: true,
                });
              }
            });
          }
        });

        console.log('started servers in background');
      } else {
        // debug only
        console.log(`Background servers already running.`);
      }

      if (!(await waitForServerToBeAvailable().catch(e => false))) {
        logError('Could not connect to server');
        process.exit(15);
      }

      console.log('servers available');
      await startScully();

      if (process.argv.includes('watch')) {
        _options = options;
        watchMode();
      } else {
        if (!isTaken) {
          // kill serve ports
          await httpGetJson('http://localhost:1864/killMe', {suppressErrors: true});
        }
        /** done, stop the program */
        process.exit(0);
      }
    }
  }
})();

// TODO : we need rewrite this to observables for don't have memory leaks
async function watchMode() {
  await checkStaticFolder();
  // g for generate and the q for quit
  checkForManualRestart();
  // @ts-ignore
  await checkChangeAngular(_options.path, false, true);
}

export function checkForManualRestart() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`Press g for manual regenerate, or q for close the server. \n`, command => {
    if (command.toLowerCase() === 'g') {
      startScully().then(
        () => checkForManualRestart()
      );
    } else if (command.toLowerCase() === 'q') {
      readline.close();
      process.exit(0);
    } else {
      readline.close();
      checkForManualRestart();
    }
  });
}

export function startScullyWatchMode() {
  startScully();
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
