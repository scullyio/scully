import { readFileSync, existsSync } from 'fs-extra';
import { jsonc } from 'jsonc';
import { join } from 'path';
import { findAngularJsonPath } from './findAngularJsonPath';
import { logError } from './log';

const configFiles = ['angular.json', 'workspace.json'];

export function readAngularJson() {
  let angularConfig;
  if (angularConfig) {
    return angularConfig;
  }
  try {
    const basePath = findAngularJsonPath();
    const fileName = configFiles.find(f => existsSync(join(basePath, f)));
    const path = join(findAngularJsonPath(), fileName);
    angularConfig = jsonc.parse(readFileSync(path).toString());
  } catch (e) {
    angularConfig = {
      path: '',
      defaultProject: 'default',
      defaultProjectName: 'default',
    };
    // logError(`Angular config file could not be parsed!`, e);
    // process.exit(15);
  }
  return angularConfig;
}
