import { spawn } from 'child_process';
import { existsSync } from 'fs-extra';
import { join } from 'path';
import {
  tds,
  watch,
  configFileName,
  pjFirst,
  handle404,
} from './utils/cli-options';
import { ScullyConfig } from './utils/interfacesandenums';
import { green, log, logError, logWarn } from './utils/log';
import yargs from 'yargs';
import { handleTravesal } from '..';

const baseBinary = __dirname + '/scully.js';

export function startBackgroundServer(scullyConfig: ScullyConfig) {
  const binary = existsSync(baseBinary)
    ? baseBinary
    : [
        '/dist/scully/scully',
        '/node_modules/.bin/scully',
        '/node_modules/@scullyio/scully/scully',
      ]
        .map((p) => join(scullyConfig.homeFolder, p + '.js'))
        .find((p) => existsSync(p));

  if (!binary) {
    logError('Could not find scully binaries');
    process.exit(15);
    return;
  }
  const options = [
    binary,
    `serve`,
    '--tds',
    tds ? 'true' : 'false',
    '--pjf',
    pjFirst ? 'true' : 'false',
  ];
  if (configFileName) {
    options.push('--cf');
    options.push(configFileName);
  } else {
    options.push('--project');
    options.push(scullyConfig.projectName);
  }
  if (handle404) {
    options.push('--404');
    options.push(handle404);
  }
  spawn(
    'node',
    options,

    {
      detached: true,
      // stdio: 'inherit',
    }
  ).on('close', (err) => {
    if (+err > 0) {
      logError('Problem starting background servers', err);
      process.exit(15);
    }
  });
  log(` ${green('☺')}   Started servers in background`);
}
