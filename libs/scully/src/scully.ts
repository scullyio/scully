#!/usr/bin/env node

/**
 * The above line is needed to be able to run in npx and CI.
 */
import { readFileSync } from 'fs';
import { join } from 'path';
import yargs from 'yargs';
import './lib/pluginManagement/systemPlugins';
import './lib/utils/exitHandler';
import { killScullyServer, scullyInit, startServer, prepServe } from './lib/utils/startup';
import { environmentChecks } from './lib/utils/startup';

environmentChecks();

process.title = 'Scully';

yargs(process.argv.slice(2))
  .command(['version'], 'Get the Scully version', () => {
    const { version } = JSON.parse(readFileSync(join(__dirname, './package.json')).toString());
    console.log(`Scully version : ${version}`);
    process.exit(0);
  })
  .command(['killServer', 'ks'], 'kill the Scully background server', () => killScullyServer(true))
  .command(['prepServe'], 'force server setup from project', prepServe)
  .command(['serve', 'server', 's'], 'Start the Scully server', startServer)
  // .command(['ps', 'sps', 'platform-server'], 'Start scully using platform-server', scullyPs)
  .command(['$0'], 'start processing the app', scullyInit)
  .demandCommand()
  .help()
  .wrap(72)
  .argv


