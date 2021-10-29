#!/usr/bin/env node

/**
 * The above line is needed to be able to run in npx and CI.
 */
import './lib/pluginManagement/systemPlugins';
import './lib/utils/exitHandler';

import yargs from 'yargs';
import { readFileSync } from 'fs';
import { join } from 'path';
import { environmentChecks } from './startUpEnvChecks'
import { killServer, startServer, scullyPs, scullyInit } from './scullyInit';
environmentChecks();

yargs(process.argv.slice(2))
  .command(['version'], 'Get the Scully version', () => {
    const { version } = JSON.parse(readFileSync(join(__dirname, './package.json')).toString());
    console.log(`Scully version : ${version}`);
    process.exit(0);
  })
  .command(['killServer', 'ks'], 'kill the Scully background server', killServer)
  .command(['serve', 'server', 's'], 'Start the Scully server', startServer)
  .command(['ps', 'sps', 'platform-server'], 'Start scully using platform-server', scullyPs)
  .command(['$0'], 'start processing the app', scullyInit)
  .demandCommand()
  .help()
  .wrap(72)
  .argv


