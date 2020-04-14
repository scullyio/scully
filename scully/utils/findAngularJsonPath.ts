import {resolve} from 'path';
import {existsSync, statSync} from 'fs';
let startPath: string;
export function findAngularJsonPath(path?: string, usePackageJson = false): string {
  if (!path) {
    path = process.cwd();
  }
  if (!startPath) {
    startPath = path;
  }
  const file = resolve(path, usePackageJson ? 'package.json' : 'angular.json');
  if (existsSync(file) && statSync(file).isFile()) {
    return path;
  }
  const parent = resolve(path, '..');
  if (parent === path) {
    if (!usePackageJson) {
      return findAngularJsonPath(startPath, true);
    }
    return null;
  }
  return findAngularJsonPath(parent, usePackageJson);
}
