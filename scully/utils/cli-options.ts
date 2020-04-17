import * as yargs from 'yargs';

export const {watch, removeStaticDist, openNavigator, ssl, sslCert, sslKey, tds, proxyConfigFile, hostName} =
  /** return the argv */
  yargs
    /** watch mode */
    .boolean('w')
    .default('w', false)
    .alias('w', 'watch')
    .describe('w', 'Use this flag for use the watch mode into scully')
    /** remove Static dist */
    .boolean('RSD')
    .default('RSD', false)
    .alias('RSD', 'removeStaticDist')
    .describe('RSD', 'Use this flag to remove the Scully outfolder before starting')
    /** open browser */
    .boolean('o')
    .default('o', false)
    .alias('o', 'openNavigator')
    .alias('open', 'openNavigator')
    .describe('o', 'Use this flag for open the browser with the serve')
    /** ssl */
    .boolean('ssl')
    .default('ssl', false)
    .describe('ssl', 'Add self ssl into the server')
    .string('sslKey')
    .default('sslKey', undefined)
    .alias('ssl-key', 'sslKey')
    .describe('sslKey', 'Add ssl-key into the server')
    .string('sslCert')
    .default('sslCert', undefined)
    .alias('ssl-cert', 'sslCert')
    .describe('sslCert', 'Add ssl-cert into the server')
    /** test data server */
    .boolean('tds')
    .default('tds', false)
    .describe('tds', 'start TestDataServer')
    /** proxy config */
    .string('proxy')
    .default('proxy', undefined)
    .alias('proxy', 'proxyConfigFile')
    .alias('proxy', 'proxyConfig')
    .alias('proxy-config', 'proxyConfig')
    .describe('proxy', 'Load proxy config from file')
    /** hostName */
    .string('hostName')
    .default('hostName', undefined)
    .alias('host', 'hostName')
    .describe('host', 'Add hostname for scully').argv;

/** break up, bcs the linter doesn't like those long lists */
export const {showBrowser, path, port, folder, sge} = yargs

  /** path */
  .string('path')
  .default('path', undefined)
  .alias('p', 'path')
  .describe('path', 'The path to generate')
  /** port */
  .number('port')
  .default('port', undefined)
  .alias('p', 'port')
  .describe('port', 'The port to run on')
  /** showBrowser */
  .boolean('sb')
  .alias('sb', 'showBrowser')
  .describe('sb', 'Shows the puppeteer controlled browser')
  /** folder */
  .string('folder')
  .default('folder', undefined)
  .describe('folder', 'folder')
  /** showGuessErrors */
  .boolean('sge')
  .alias('sge', 'showGuessError')
  .describe('sb', 'dumps the error from guess to the console').argv;

export const {configFileName, project, baseFilter, scanRoutes, pjFirst, hl} = yargs
  /** config file  */
  .string('cf')
  .alias('cf', 'configFile')
  .alias('cf', 'configFileName')
  .default('cf', '')
  .describe(
    'cf',
    'provide name of the config file to use. if the option --project is also there that takes precedence)'
  ).argv;

export const {project, baseFilter, scanRoutes, hl} = yargs
  /** projectName */
  .string('pr')
  .alias('pr', 'project')
  .default('pr', '')
  .describe('pr', 'provide name of the project to handle')
  /** scanRoutes */
  .boolean('sr')
  .default('sr', false)
  .alias('sr', 'scanRoutes')
  .alias('sr', 'scan')
  .describe('sr', 'Scan the app for unhandled routes')
  /** package json fist */
  .boolean('pjf')
  .default('pjf', false)
  .alias('pjf', 'pjFirst')
  .alias('pjf', 'pj-first')
  .describe('pjf', 'Scan for package.json first instead of angular.json')
  /** baseFilter */
  .string('bf')
  .alias('bf', 'baseFilter')
  .default('bf', '')
  .describe('bf', 'provide a minimatch glob for the unhandled routes')
  /** highlight.js */
  .string('hl')
  .alias('hl', 'highlight')
  .default('hl', false)
  .describe('bf', 'provide a minimatch glob for the unhandled routes').argv;

yargs.help();

const commandsArray = yargs.argv._.map(c => c.toLowerCase().trim());

export const serve = commandsArray.includes('serve');
export const killServer = commandsArray.includes('killserver');

export const {argv: options} = yargs.option('port', {
  alias: 'p',
  type: 'number',
  description: 'The port to run on',
});
