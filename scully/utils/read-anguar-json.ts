import {readFileSync} from 'fs-extra';
import {jsonc} from 'jsonc';
import {join} from 'path';
import {angularRoot} from './config';
import {logError} from './log';

let angularConfig;
export function readAngularJson() {
  if (angularConfig) {
    return angularConfig;
  }
  try {
    angularConfig = jsonc.parse(readFileSync(join(angularRoot, 'angular.json')).toString());
  } catch (e) {
    logError(`Angular config file could not be parsed!`, e);
    process.exit(15);
  }
}
