import {readFileSync} from 'fs-extra';
import {jsonc} from 'jsonc';
import {join} from 'path';
import {findAngularJsonPath} from './findAngularJsonPath';
import {logError} from './log';

let angularConfig;
export function readAngularJson() {
  if (angularConfig) {
    return angularConfig;
  }
  try {
    const path = join(findAngularJsonPath(), 'angular.json');
    angularConfig = jsonc.parse(readFileSync(path).toString());
  } catch (e) {
    angularConfig = {
      path: '',
      defaultProject: 'default',
      defaFaultProjectName: 'default',
    };
    // logError(`Angular config file could not be parsed!`, e);
    // process.exit(15);
  }
  return angularConfig;
}
