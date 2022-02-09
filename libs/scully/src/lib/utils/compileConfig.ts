import { exec } from 'child_process';
import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'fs';
import fsExtra from 'fs-extra';
import { join } from 'path';
import { configFileName, pluginFolder, project } from './cli-options.js';
import { registerExitHandler } from './exitHandler.js';
import { findAngularJsonPath } from './findAngularJsonPath.js';
import { ScullyConfig } from './interfacesandenums.js';
import { green, log, logError, logWarn, white, yellow } from './log.js';
import { readAngularJson } from './read-angular-json.js';
import { readDotProperty, writeDotProperty } from './scullydot.js';
const { pathExists } = fsExtra;

import tsPkg from 'typescript';
import { TranspileOutput } from 'typescript';
const {
  findConfigFile,
  flattenDiagnosticMessageText,
  ModuleKind,
  ModuleResolutionKind,
  parseConfigFileTextToJson,
  ScriptTarget,
  sys,
  transpileModule
} = tsPkg;

const angularRoot = findAngularJsonPath();

const angularConfig = readAngularJson();
const defaultProjectName = angularConfig.defaultProject;

const createConfigName = (name = defaultProjectName) => `scully.${name}.config.ts`;
export const getJsName = (name: string) => name.replace('.ts', '.mjs');

export const compileConfig = async (): Promise<ScullyConfig> => {
  let path: string;
  try {
    path = determineConfigFilePath();
    if (!(await pathExists(path))) {
      /** no js config, nothing to do. */
      logWarn(`
      =====================================================================================================
      Config file "${yellow(path)}" not found, only rendering routes without parameters
      The config file should have a name that is formated as:
          scully.${yellow('<projectName>')}.config.ts
      where ${yellow('<projectName>')} is the name of the project as defined in the 'angular.json' file
      If you meant to build a different project as ${yellow(project || 'undefined')} you can use:
          ${white('--project differentProjectName')} as a cmd line option

      When you are in a mixed mono-repo you might need to use the ${white('--pjFirst')} flag.
       which will look for package.json instead of angular.json to find the 'root' of the project.
    =====================================================================================================
`);
      return {
        projectName: project || defaultProjectName
      } as unknown as ScullyConfig;
    }
    /** skip compiling if it exists */
    const jsFile = getJsName(path);
    if (!process.send) {
      /** main process started form cmdLine, remove old config file. */
      try {
        unlinkSync(jsFile);
      } catch {
        /** not interested, file is probably already deleted */
      }
    }
    if (!existsSync(jsFile)) {
      await compileTSConfig(path);
    }
    const { config } = await import(getJsName(path));
    /** dispose of the temporary JS file on exit of the application, so it can be reused by multiple processes */
    const removeConfigJsFile = () => {
      try {
        unlinkSync(jsFile);
      } catch {
        /** not interested, file is probably already deleted */
      }
    };
    registerExitHandler(removeConfigJsFile);
    if (typeof config.then === 'function') {
      return { projectName: project || defaultProjectName, ...(await config) };
    }
    return { projectName: project || defaultProjectName, ...config };
  } catch (e) {
    logError(`
---------
 We encountered an error executing the config file. "${yellow(path)}"
 Check the error below, and try again later
--------- `);
    console.error(e);
    process.exit(15);
  }
};

export function determineConfigFilePath() {
  let path = join(angularRoot, createConfigName());
  if (configFileName) {
    path = join(angularRoot, configFileName);
  }
  if (project) {
    path = join(angularRoot, createConfigName(project));
  }
  return path;
}

async function compileUserPluginsAndConfig() {
  const persistentFolder = readDotProperty('pluginFolder');
  let folder = persistentFolder || pluginFolder;
  if (pluginFolder !== './scully' && pluginFolder !== persistentFolder) {
    /** store setting  */
    writeDotProperty('pluginFolder', pluginFolder);
    folder = pluginFolder;
  }
  const useFolder = join(angularRoot, folder);
  const configPath = findConfigFile(useFolder, sys.fileExists, 'tsconfig.json');
  if (!existsSync(join(useFolder, 'tsconfig.json'))) {
    // no userstuff to handle
    logWarn(`Folder "${yellow(folder)}" doesn't seem to contain custom plugins`);
    return;
  }
  log(`  ${green('✔')} Folder "${yellow(folder)}" used for custom plugins`);
  try {
    const tsConfig = sys.readFile(configPath);
    const { config, error } = parseConfigFileTextToJson(configPath, tsConfig);
    if (error) {
      logError('config file "${yellow(configPath)}" has an error');
      process.exit(15);
    }
    return new Promise((resolve, reject) => {
      exec(`npx tsc -p "${configPath}"`, (err, res) => {
        // console.log(err, res);
        if (res) {
          logError('Typescript error while compiling plugins. the error is:');
          logError(res);
          reject();
        }
        resolve(undefined);
      });
    });
  } catch (e) {
    console.log(e);
    process.exit(15);
  }
  process.exit(0);
}

async function compileTSConfig(path) {
  try {
    await compileUserPluginsAndConfig();
    const jsFile = getJsName(path);
    const source = readFileSync(path).toString('utf8');
    const js: TranspileOutput = transpileModule(source, {
      fileName: path,
      reportDiagnostics: true,
      moduleName: 'scully',
      compilerOptions: {
        lib: ['ES2020', 'dom'],
        module: ModuleKind.ES2020,
        target: ScriptTarget.ES2020,
        allowJs: true,
        allowSyntheticDefaultImports: true,
        esModuleInterop: false,
        skipLibCheck: true,
        moduleResolution: ModuleResolutionKind.NodeJs
      }
    });
    if (js.diagnostics.length > 0) {
      logError(
        `----------------------------------------------------------------------------------------
       Error${js.diagnostics.length === 1 ? '' : 's'} while typescript compiling "${yellow(path)}"`
      );
      js.diagnostics.forEach(diagnostic => {
        if (diagnostic.file) {
          // tslint:disable-next-line: no-non-null-assertion
          const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start!);
          const message = flattenDiagnosticMessageText(diagnostic.messageText, '\n');
          logError(`    line (${line + 1},${character + 1}): ${message}`);
        } else {
          logError(flattenDiagnosticMessageText(diagnostic.messageText, '\n'));
        }
      });
      logError('----------------------------------------------------------------------------------------');
      process.exit(15);
    }
    writeFileSync(jsFile, js.outputText);
  } catch (e) {
    console.log(e);
    process.exit(15);
  }
  // process.exit(0)
}
