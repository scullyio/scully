import { spawn } from 'child_process';
import { existsSync } from 'fs-extra';
import { join } from 'path';
import { captureMessage } from './utils/captureMessage';
import { configFileName, handle404, logSeverity, pjFirst, tds, port } from './utils/cli-options';
import { ScullyConfig } from './utils/interfacesandenums';
import { green, log, logError } from './utils/log';

const baseBinary = __dirname + '/scully.js';

export function startBackgroundServer(scullyConfig: ScullyConfig) {
  const binary = existsSync(baseBinary)
    ? baseBinary
    : ['/dist/scully/src/scully', '/node_modules/.bin/scully', '/node_modules/@scullyio/scully/src/scully']
        .map((p) => join(scullyConfig.homeFolder, p + '.js'))
        .find((p) => existsSync(p));

  if (!binary) {
    logError('Could not find scully binaries');
    process.exit(15);
    return;
  }
  const options = [binary, `serve`, '--tds', tds ? 'true' : 'false', '--pjf', pjFirst ? 'true' : 'false', '--ls', logSeverity];
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
  if (port) {
    options.push('--port');
    options.push(String(port));
  }
  spawn(
    'node',
    options,

    {
      detached: true,
      // stdio: 'inherit',
    }
  ).on('close', (code) => {
    if (+code > 0) {
      const message = 'Problem starting background servers ' + code;
      logError(message);
      captureMessage(message);
      process.exit(15);
    }
  });
  log(` ${green('☺')}   Started servers in background`);
}
