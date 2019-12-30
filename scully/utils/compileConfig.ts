import {readFileSync} from 'fs';
import {pathExists} from 'fs-extra';
import {join} from 'path';
// import {create, CreateOptions} from 'ts-node';
import {createContext, runInContext} from 'vm';
import {ScullyConfig} from '..';
import {registerPlugin} from '../pluginManagement/pluginRepository';
import {angularRoot, scullyConfig} from './config';

export const compileConfig = async (): Promise<ScullyConfig> => {
  try {
    const filename = 'scully.config.js';
    const path = join(angularRoot, filename);
    if (!(await pathExists(path))) {
      /** no ts config, nothing to do. */
      return ({} as unknown) as ScullyConfig;
    }
    /** get all available "nodeJS" globals, to pull them into our context */
    const contextGlobals = Object.getOwnPropertyNames(global).reduce(
      (g, key) => ({...g, [key]: global[key]}),
      {}
    );
    const runtimeEnvironment = createContext({
      ...contextGlobals,
      /** mimic nodejS exports */
      exports: {},
      /** provide our console loggin */
      console,
      /** mimic nodeJS __file and __dirname */
      __filename: path,
      __dirname: angularRoot,
      /** make our registerPlugin available */
      registerPlugin,
      process,
      global,
      /** provide a specialized version, that uses the config files base-path. */
      require: (requirePath: string) =>
        requirePath.startsWith('.') || requirePath.startsWith('/')
          ? require(join(angularRoot, requirePath))
          : require(requirePath),
    });
    // const tsCompilerConfig: CreateOptions = {
    //   logError: true,
    //   compilerOptions: {
    //     sourceMap: true,
    //     target: 'es2018',
    //     module: 'commonjs',
    //     lib: ['dom', 'es2018'],
    //     types: ['../types.d.ts']
    //     // typeRoots: ['node', '/scully/bin/utils/routeSplit.d.ts'],
    //   },
    // };
    // const ts = create(tsCompilerConfig);
    const tsCode = readFileSync(path).toString();
    // const jsCode = ts.compile(tsCode, filename, 0);
    const jsCode = tsCode;
    runInContext(jsCode, runtimeEnvironment, {filename, displayErrors: true});
    return runtimeEnvironment.exports.config;
  } catch (e) {
    console.error(e);
    return ({} as unknown) as ScullyConfig;
  }
};

function myReq(path: string): Promise<any> {
  return import(join(scullyConfig.homeFolder, path));
}
