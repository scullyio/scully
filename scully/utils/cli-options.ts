import * as yargs from 'yargs';

export const {watch} = yargs
  .boolean('wm')
  .default('wm', false)
  .alias('wm', 'watch')
  .describe('wm', 'Use this flag for use the watch mode into scully').argv;

export const {removeStaticDist} = yargs
  .boolean('RSD')
  .default('RSD', false)
  .alias('RSD', 'removeStaticDist')
  .describe('RSD', 'Use this flag to remove the Scully outfolder before starting').argv;

export const {argv: options} = yargs.option('port', {
  alias: 'p',
  type: 'number',
  description: 'The port to run on',
});

export const {openNavigator} = yargs
  .boolean('o')
  .default('o', false)
  .alias('o', 'openNavigator')
  .alias('open', 'openNavigator')
  .describe('o', 'Use this flag for open the browser with the serve').argv;

export const {ssl} = yargs
  .boolean('ssl')
  .default('ssl', false)
  .describe('ssl', 'Add self ssl into the server').argv;

export const {sslKey} = yargs
  .string('sslKey')
  .default('sslKey', undefined)
  .alias('ssl-key', 'sslKey')
  .describe('sslKey', 'Add ssl-key into the server').argv;

export const {sslCert} = yargs
  .string('sslCert')
  .default('sslCert', undefined)
  .alias('ssl-cert', 'sslCert')
  .describe('sslCert', 'Add ssl-cert into the server').argv;

export const {tds} = yargs
  .boolean('tds')
  .default('tds', false)
  .describe('tds', 'start TestDataServer').argv;

export const {proxyConfigFile} = yargs
  .string('proxy')
  .default('proxy', undefined)
  .alias('proxy', 'proxyConfigFile')
  .alias('proxy', 'proxyConfig')
  .describe('proxy', 'Load proxy config from file').argv;
