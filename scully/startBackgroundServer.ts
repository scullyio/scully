import {spawn} from 'child_process';
import {existsSync} from 'fs-extra';
import {join} from 'path';
import {ScullyConfig} from './utils/interfacesandenums';
import {logError, log, green} from './utils/log';
import {tds} from './utils/cli-options';

export function startBackgroundServer(scullyConfig: ScullyConfig) {
  const binary = ['/dist/scully/scully', '/node_modules/.bin/scully', '/node_modules/@scullyio/scully/scully']
    .map(p => join(scullyConfig.homeFolder, p + '.js'))
    .find(p => existsSync(p));

  if (!binary) {
    logError('Could not find scully binaries');
    process.exit(15);
    return;
  }

  spawn('node', [binary, `serve`, '--tds', tds ? 'true' : 'false'], {
    detached: true,
    // stdio: 'inherit',
  }).on('close', err => {
    if (+err > 0) {
      logError('Problem starting background servers', err);
      process.exit(15);
    }
  });
  log(` ${green('☺')}   Started servers in background`);
}
