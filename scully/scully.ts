#!/usr/bin/env node
import {readFileSync} from 'fs-extra';
import {join} from 'path';
import * as yargs from 'yargs';
import './pluginManagement/systemPlugins';
import {routeContentRenderer} from './renderPlugins/routeContentRenderer';
import {startBackgroundServer} from './startBackgroundServer';
import {loadConfig} from './utils/config';
import {moveDistAngular} from './utils/fsAngular';
import {httpGetJson} from './utils/httpGetJson';
import {RouteTypes} from './utils/interfacesandenums';
import {isPortTaken} from './utils/isPortTaken';
import {logError} from './utils/log';
import {startScully} from './utils/startup';
import {waitForServerToBeAvailable} from './utils/waitForServerToBeAvailable';
import {bootServe, isBuildThere, watchMode} from './watchMode';

/** the default of 10 is too shallow for generating pages. */
require('events').defaultMaxListeners = 100;

let port;
// tslint:disable-next-line:variable-name
export let _options = {};

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
  })
  .option('folder', {
    type: 'string',
    description: 'home folder',
  });

if (process.argv.includes('version')) {
  const {version} = JSON.parse(readFileSync(join(__dirname, './package.json')).toString());
  console.log('version:', version);
  process.exit(0);
}

(async () => {
  if (process.argv.includes('killServer')) {
    await httpGetJson('http://localhost:1864/killMe', {suppressErrors: true});
    process.exit(0);
    return;
  }
  /** make sure not to do something before the config is ready */
  const scullyConfig = await loadConfig;
  await isBuildThere(scullyConfig);

  if (process.argv.includes('serve')) {
    await bootServe(scullyConfig);
  } else {
    const folder = join(scullyConfig.homeFolder, scullyConfig.distFolder);
    /** copy in current buildfile */
    await moveDistAngular(folder, scullyConfig.outDir, {removeStaticDist: true, reset: false});

    /** server already up and running? */
    const isTaken = await isPortTaken(scullyConfig.staticport);
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
})();
