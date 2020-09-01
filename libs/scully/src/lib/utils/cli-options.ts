import yargs from 'yargs';

export const {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  baseFilter,
  configFileName,
  folder,
  handle404,
  hostName,
  noLog,
  noPrompt,
  openNavigator,
  path,
  pjFirst,
  pluginsError,
  pluginFolder,
  port,
  prod,
  project,
  proxyConfigFile,
  removeStaticDist,
  routeFilter,
  scanRoutes,
  serverTimeout,
  sge,
  showBrowser,
  ssl,
  sslCert,
  sslKey,
  tds,
  watch,
} =
  /** return the argv */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
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
    .describe('host', 'Add hostname for scully')

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
    .describe('sb', 'dumps the error from guess to the console')

    .string('cf')
    .alias('cf', 'configFile')
    .alias('cf', 'configFileName')
    .default('cf', '')
    .describe('cf', 'provide name of the config file to use. if the option --project is also there that takes precedence)')
    /** don't log info lines to console */
    .boolean('nl')
    .default('nl', false)
    .alias('nl', 'noLog')
    .describe('nl', 'Log warnings and errors only')
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
    /** baseFilter */
    .string('bf')
    .alias('bf', 'baseFilter')
    .default('bf', '')
    .describe('bf', 'provide a wildcard string separated by ,(comma) to filter the unhandled routes')
    /** filter */
    .string('routeFilter')
    .alias('routeFilter', 'rf')
    .alias('routeFilter', 'route-filter')
    .default('routeFilter', '')
    .describe('routeFilter', 'provide a wildcard string separated by ,(comma) to filter the handled routes')

    /** server Timout */
    .number('st')
    .default('st', 0)
    .alias('st', 'serverTimeout')
    .describe('st', 'The time Scully will wait for the server before timeout. in milliseconds')
    /** package json fist */
    .boolean('pjf')
    .default('pjf', false)
    .alias('pjf', 'pjFirst')
    .alias('pjf', 'pj-first')
    .describe('pjf', 'Scan for package.json first instead of angular.json')
    /** handle 404 in server */
    .string('handle404')
    .alias('handle404', '404')
    .default('handle404', '')
    .describe('handle404', 'determine how 404 is handled')
    /** pluginFolder, the place to look for custom config/plugins */
    .string('pf')
    .alias('pf', 'pluginFolder')
    .alias('pf', 'plugin-folder')
    .default('pf', './scully')
    .describe('pf', 'Folder to look for custom config/plugins (will use the ts-config in there to compile)')
    /** Exit Scully with plugin error */
    .boolean('pe')
    .alias('pe', 'pluginsError')
    .default('pe', true)
    .describe('pe', "Exit scully's run when exist an error in a plugin")
    /** No use prompts (for use in undetectable CI/CD) */
    .boolean('np')
    .alias('np', 'noPrompt')
    .alias('np', 'no-prompt')
    .default('np', false)
    .describe('np', 'Do not pause for user input')
    /** Use Prod Mode */
    .boolean('prod')
    .alias('prod', 'Production')
    .default('prod', false)
    .describe('prod', 'Use prod mode for Scully').argv;

yargs.help();

const commandsArray = yargs.argv._.map((c) => c.toLowerCase().trim());

export const serve = commandsArray.includes('serve');
export const killServer = commandsArray.includes('killserver');

export const { argv: options } = yargs.option('port', {
  alias: 'p',
  type: 'number',
  description: 'The port to run on',
});
