import { fork } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { logError, logOk } from '../log.js';
import { captureMessage } from '../captureMessage.js';
import { registerExitHandler } from '../exitHandler.js';
import { ScullyConfig } from '../interfacesandenums.js';
import { configFileName, disableProjectFolderCheck, handle404, logSeverity, pjFirst, port, tds } from '../cli-options.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const baseBinary = join(__dirname, '..', 'scully.js');

export function startBackgroundServer(scullyConfig: ScullyConfig) {
  const binary = existsSync(baseBinary)
    ? baseBinary
    : ['/dist/scully/src/scully', '/node_modules/.bin/scully', '/node_modules/@scullyio/scully/src/scully']
        .map(p => join(scullyConfig.homeFolder, p + '.js'))
        .find(p => existsSync(p));

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
    'true'
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

  const serverProcess = fork(join(__dirname, '../../../scully'), options).on('close', code => {
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
