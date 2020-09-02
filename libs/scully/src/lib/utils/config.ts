/* eslint-disable @typescript-eslint/no-use-before-define */
import { cpus } from 'os';
import { join } from 'path';
import { compileConfig } from './compileConfig';
import { findAngularJsonPath } from './findAngularJsonPath';
import { ScullyConfig } from './interfacesandenums';
import { logError, LogSeverity, logWarn, yellow } from './log';
import { readAngularJson } from './read-anguar-json';
import { validateConfig } from './validateConfig';
export const angularRoot = findAngularJsonPath();
export const scullyConfig: ScullyConfig = {} as ScullyConfig;

export const scullyDefaults: Partial<ScullyConfig> = {
  bareProject: false,
  homeFolder: angularRoot,
  outDir: join(angularRoot, './dist/static/'),
  logFileSeverity: LogSeverity.warning,
  inlineStateOnly: false,
  thumbnails: false,
  maxRenderThreads: cpus().length,
  handle404: '',
  appPort: /** 1864 */ 'herodevs'.split('').reduce((sum, token) => (sum += token.charCodeAt(0)), 1000),
  staticPort: /** 1668 */ 'scully'.split('').reduce((sum, token) => (sum += token.charCodeAt(0)), 1000),
  reloadPort: /** 2667 */ 'scullyLiveReload'.split('').reduce((sum, token) => (sum += token.charCodeAt(0)), 1000),
  hostName: 'localhost',
  defaultPostRenderers: [],
};

const loadIt = async () => {
  const compiledConfig = await compileConfig();
  let angularConfig = {} as any;
  let distFolder = join(angularRoot, './dist');
  let projectConfig: any = {};
  try {
    angularConfig = readAngularJson();
    const defaultProject = compiledConfig.projectName;
    projectConfig = angularConfig.projects[defaultProject];
    distFolder = projectConfig.architect.build.options.outputPath;
    if (distFolder.endsWith('dist') && !distFolder.includes('/')) {
      logError(`Your distribution files are in "${yellow(distFolder)}". Please change that to include a subfolder`);
      process.exit(15);
    }
  } catch (e) {
    // console.log(e);
    logError(`Could not find project "${yellow(compiledConfig.projectName)}" in 'angular.json'.`);
    // process.exit(15);
  }

  if (compiledConfig.hostUrl && compiledConfig.hostUrl.endsWith('/')) {
    compiledConfig.hostUrl = compiledConfig.hostUrl.substr(0, compiledConfig.hostUrl.length - 1);
  }

  // TODO: update types in interfacesandenums to force correct types in here.
  // tslint:disable-next-line: no-unused-expression
  Object.assign(
    scullyConfig,
    /** the default config */
    scullyDefaults,
    /** calculated defaults. */
    {
      sourceRoot: projectConfig.sourceRoot,
      projectRoot: projectConfig.root,
      distFolder,
    }
  ) as ScullyConfig;
  /** activate loaded config */
  await updateScullyConfig(compiledConfig);
  return scullyConfig;
};

/** export the config as a promise, so you can wait for it when you need config during 'boot' */
export const loadConfig = loadIt();

export const updateScullyConfig = async (config: Partial<ScullyConfig>) => {
  /** note, an invalid config will abort the entire program. */
  const newConfig = Object.assign({}, scullyConfig, config);
  if (config.outDir === undefined) {
    logWarn(`The option outDir isn't configured, using default folder "${yellow(scullyConfig.outDir)}".`);
  } else {
    config.outDir = join(angularRoot, config.outDir);
  }
  const validatedConfig = await validateConfig(newConfig as ScullyConfig);
  if (validatedConfig) {
    const mergedRoutes = { ...scullyConfig.routes, ...validatedConfig.routes };
    Object.assign(scullyConfig, config, { routes: mergedRoutes });
  }
};
