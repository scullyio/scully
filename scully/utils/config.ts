import {readFileSync} from 'fs';
import {jsonc} from 'jsonc';
import {join} from 'path';
import {findAngularJsonPath} from './findAngularJsonPath';
import {ScullyConfig} from './interfacesandenums';
import {logError, logWarn, yellow} from './log';
import {validateConfig} from './validateConfig';
import {compileConfig} from './compileConfig';
import {readAngularJson} from './read-anguar-json';
import {cpus} from 'os';
export const angularRoot = findAngularJsonPath();
export const scullyConfig: ScullyConfig = {} as ScullyConfig;

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
      logError(
        `Your distribution files are in "${yellow(distFolder)}". Please change that to include a subfolder`
      );
      process.exit(15);
    }
  } catch (e) {
    // logError(`Could not find project "${yellow(compiledConfig.projectName)}" in 'angular.json'.`);
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
    {
      bareProject: false,
      homeFolder: angularRoot,
      outDir: join(angularRoot, './dist/static/'),
      sourceRoot: projectConfig.sourceRoot,
      projectRoot: projectConfig.root,
      distFolder,
      inlineStateOnly: false,
      maxRenderThreads: cpus().length,
      appPort: /** 1864 */ 'herodevs'.split('').reduce((sum, token) => (sum += token.charCodeAt(0)), 1000),
      staticport: /** 1668 */ 'scully'.split('').reduce((sum, token) => (sum += token.charCodeAt(0)), 1000),
      reloadPort: /** 2667 */ 'scullyLiveReload'
        .split('')
        .reduce((sum, token) => (sum += token.charCodeAt(0)), 1000),
      hostName: 'localhost',
      defaultPostRenderers: [],
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
    const mergedRoutes = {...scullyConfig.routes, ...validatedConfig.routes};
    Object.assign(scullyConfig, config, {routes: mergedRoutes});
  }
};
