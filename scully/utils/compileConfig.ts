import {pathExists, readFileSync} from 'fs-extra';
import {join} from 'path';
import * as yargs from 'yargs';
import {findAngularJsonPath} from './findAngularJsonPath';
import {ScullyConfig} from './interfacesandenums';
import {logError, logWarn, yellow} from './log';

const angularRoot = findAngularJsonPath();

let angularConfig;

try {
  angularConfig = JSON.parse(readFileSync(join(angularRoot, 'angular.json')).toString());
} catch (e) {
  logError(`Angular config file could not be parsed!`, e);
  process.exit(15);
}
const defaFaultProjectName = angularConfig.defaultProject;

const createConfigName = (name = defaFaultProjectName) => `scully.${name}.config.js`;

export const {configFile: configFileName, project} = yargs
  .string('cf')
  .alias('cf', 'configFile')
  .default('cf', '')
  .describe(
    'cf',
    'provide name of the config file to use. if the option --project is also there that takes precedence)'
  )
  .string('pr')
  .alias('pr', 'project')
  .default('pr', '')
  .describe('pr', 'provide name of the project to handle').argv;

export const compileConfig = async (): Promise<ScullyConfig> => {
  let path: string;
  try {
    path = join(angularRoot, createConfigName());
    if (configFileName) {
      path = join(angularRoot, configFileName);
    }
    if (project) {
      path = join(angularRoot, createConfigName(project));
    }
    if (!(await pathExists(path))) {
      /** no js config, nothing to do. */
      logWarn(`
---------
    Config file "${yellow(path)}" not found, only rendering routes without parameters
    The config file should have a name that is formated as:
       scully.${yellow('<projectName>')}.config.js
    where ${yellow('<projectName>')} is the name of the project as defined in the 'angular.json' file
---------
`);
      return ({projectName: project || defaFaultProjectName} as unknown) as ScullyConfig;
    }
    const {config} = await import(path);
    return {projectName: project || defaFaultProjectName, ...config};
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
