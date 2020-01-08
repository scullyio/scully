import {readFileSync} from 'fs';
import {jsonc} from 'jsonc';
import {join} from 'path';
import {findAngularJsonPath} from './findAngularJsonPath';
import {ScullyConfig} from './interfacesandenums';
import {logError, logWarn, yellow} from './log';
import {validateConfig} from './validateConfig';
import {compileConfig} from './compileConfig';

export const angularRoot = findAngularJsonPath();
export const scullyConfig: ScullyConfig = {} as ScullyConfig;

const loadIt = async () => {
  // const userConfigFileLocation = join(angularRoot, 'scully.json');
  // const userConfigRaw = readFileSync(userConfigFileLocation).toString() || '';
  const compiledConfig = await compileConfig();
  // let unCheckedUserConfig = {};
  let angularConfig = {} as any;
  let distFolder = join(angularRoot, './dist/browser');
  // console.log({compiledConfig});
  // try {
  //   unCheckedUserConfig = jsonc.parse(userConfigRaw);
  // } catch {
  //   logError(`Scully config file could not be parsed!`);
  //   process.exit(0);
  // }
  // const userConfig = await validateConfig((unCheckedUserConfig as unknown) as ScullyConfig);
  try {
    angularConfig = jsonc.parse(readFileSync(join(angularRoot, 'angular.json')).toString());
    // TODO: make scully handle other projects as just the default one.
    const defaultProject = angularConfig.defaultProject;
    distFolder = angularConfig.projects[defaultProject].architect.build.options.outputPath;
  } catch (e) {
    logError(`Angular config file could not be parsed!`, e);
    process.exit(15);
  }

  // TODO: update types in interfacesandenums to force correct types in here.
  // tslint:disable-next-line: no-unused-expression
  Object.assign(
    scullyConfig,
    {
      homeFolder: angularRoot,
      outDir: join(angularRoot, './dist/static/'),
      distFolder,
      appPort: /** 1864 */ 'herodevs'.split('').reduce((sum, token) => (sum += token.charCodeAt(0)), 1000),
      staticport: /** 1771 */ 'scully'.split('').reduce((sum, token) => (sum += token.charCodeAt(0)), 1000),
    }
    // compiledConfig
  ) as ScullyConfig;
  await updateScullyConfig(compiledConfig);
  return scullyConfig;
};
export const loadConfig = loadIt();

export const updateScullyConfig = async (config: Partial<ScullyConfig>) => {
  /** note, an invalid config will abort the entire program. */
  const newConfig = Object.assign({}, scullyConfig, config);
  if (config.outDir === undefined) {
    logWarn(
      `The option outDir isn't configured, using default folder "${yellow(scullyConfig.outDir)}".`
    );
  } else {
    config.outDir = join(angularRoot, config.outDir);
  }
  const validatedConfig = await validateConfig(newConfig as ScullyConfig);
  if (validatedConfig) {
    const mergedRoutes = {...scullyConfig.routes, ...validatedConfig.routes};
    Object.assign(scullyConfig, config, {routes: mergedRoutes});
  }
};
