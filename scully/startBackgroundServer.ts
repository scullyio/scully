import {spawn} from 'child_process';
import {existsSync} from 'fs-extra';
import {join} from 'path';
import {tds, watch} from './utils/cli-options';
import {ScullyConfig} from './utils/interfacesandenums';
import {green, log, logError} from './utils/log';

const baseBinary = __dirname + '/scully.js';

export function startBackgroundServer(scullyConfig: ScullyConfig) {
  const binary = existsSync(baseBinary)
    ? baseBinary
    : ['/dist/scully/scully', '/node_modules/.bin/scully', '/node_modules/@scullyio/scully/scully']
        .map(p => join(scullyConfig.homeFolder, p + '.js'))
        .find(p => existsSync(p));

  if (!binary) {
    logError('Could not find scully binaries');
    process.exit(15);
    return;
  }
  spawn(
    'node',
    [
      binary,
      `serve`,
      '--tds',
      tds ? 'true' : 'false',
      '--watch',
      watch ? 'false' : 'true',
      '--project',
      scullyConfig.projectName,
    ],
    {
      detached: true,
      // stdio: 'inherit',
    }
  ).on('close', err => {
    if (+err > 0) {
      logError('Problem starting background servers', err);
      process.exit(15);
    }
  });
  log(` ${green('☺')}   Started servers in background`);
}
