import {resolve} from 'path';
import {existsSync, statSync} from 'fs';

export function findAngularJsonPath(path?: string): string {
  if (!path) {
    path = process.cwd();
  }
  const file = resolve(path, 'angular.json');
  if (existsSync(file) && statSync(file).isFile()) {
    return path;
  }
  const parent = resolve(path, '..');
  if (parent === path) {
    return null;
  }
  return findAngularJsonPath(parent);
}
