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
  .string('pr')
  .alias('pr', 'project')
  .default('pr', '')
  .describe('pr', 'provide name of the project to handle').argv;

export const compileConfig = async (): Promise<ScullyConfig> => {
  try {
    let path = join(angularRoot, createConfigName());
    if (project) {
      path = join(angularRoot, createConfigName(project));
    }
    if (!(await pathExists(path))) {
      /** no js config, nothing to do. */
      logWarn(`Config file "${yellow(path)}" not found, only rendering normal routes`);
      return ({projectName: project || defaFaultProjectName} as unknown) as ScullyConfig;
    }
    const {config} = await import(path);
    return {projectName: project || defaFaultProjectName, ...config};
  } catch (e) {
    // console.error(e);
    return ({projectName: project || defaFaultProjectName} as unknown) as ScullyConfig;
  }
};
