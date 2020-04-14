import {pathExists} from 'fs-extra';
import {join} from 'path';
import {configFileName, project} from './cli-options';
import {findAngularJsonPath} from './findAngularJsonPath';
import {ScullyConfig} from './interfacesandenums';
import {logError, logWarn, yellow} from './log';
import {readAngularJson} from './read-anguar-json';

const angularRoot = findAngularJsonPath();

console.log(process.cwd(), angularRoot);
const angularConfig = readAngularJson();
const defaFaultProjectName = angularConfig.defaultProject;

const createConfigName = (name = defaFaultProjectName) => `scully.${name}.config.js`;

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
