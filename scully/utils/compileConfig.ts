import {readFileSync} from 'fs';
import {pathExists} from 'fs-extra';
import {join} from 'path';
// import {create, CreateOptions} from 'ts-node';
import {createContext, runInContext} from 'vm';
import {ScullyConfig} from '..';
import {configValidator, registerPlugin} from '../pluginManagement/pluginRepository';
import {angularRoot, scullyConfig} from './config';
import {routeSplit} from './routeSplit';

export const compileConfig = async (): Promise<ScullyConfig> => {
  try {
    const filename = 'scully.config.js';
    const path = join(angularRoot, filename);
    if (!(await pathExists(path))) {
      /** no ts config, nothing to do. */
      return ({} as unknown) as ScullyConfig;
    }
    const runtimeEnvironment = createContext({
      exports: {},
      console,
      registerPlugin,
      configValidator,
      routeSplit,
      global,
      require: (path: string) => (path.startsWith('@') ? require(path) : require(join(angularRoot, path))),
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
