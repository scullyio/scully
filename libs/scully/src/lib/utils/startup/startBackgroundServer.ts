import { fork } from 'child_process';
import { existsSync } from 'fs-extra';
import { join } from 'path';
import {
  captureMessage,
  configFileName,
  disableProjectFolderCheck,
  handle404,
  log,
  logError,
  logOk,
  logSeverity,
  pjFirst,
  port,
  registerExitHandler,
  ScullyConfig,
  tds,
} from '../';

const baseBinary = join(__dirname, '..', 'scully.js');

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
  const options = [
    // binary,
    `serve`,
    '--tds',
    tds ? 'true' : 'false',
    '--pjf',
    pjFirst ? 'true' : 'false',
    '--ls',
    logSeverity,
    '--noCache',
    'true',
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
  if (port) {
    options.push('--port');
    options.push(String(port));
  }
  if (disableProjectFolderCheck) {
    options.push('--disableProjectFolderCheck');
  }

  // log(`Starting background servers with: node ${options.join(' ')}`);

  const serverProcess = fork(join(__dirname, '../../../scully'), options).on('close', (code) => {
    if (+code > 0) {
      const message = 'Problem starting background servers ' + code;
      logError(message);
      captureMessage(message);
      process.exit(15);
    }
    logOk('Scully development Servers stopped');
  });

  registerExitHandler(async () => {
    await serverProcess.kill();
  });

  // log(` ${green('☺')}   Started servers in background`);
}
