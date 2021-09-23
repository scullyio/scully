import { existsSync, statSync } from 'fs';
import { resolve } from 'path';
import { pjFirst } from './cli-options';

const pjf = !!pjFirst;
let startPath: string;
export function findAngularJsonPath(
  path?: string,
  usePackageJson = pjf
): string {
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
    /** when reached root, retry with package.json, or switch over to angular.json */
    if (!pjf && !usePackageJson) {
      return findAngularJsonPath(startPath, true);
    }
    if (pjf) {
      return findAngularJsonPath(startPath, false);
    }
    return null;
  }
  return findAngularJsonPath(parent, usePackageJson);
}
