/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Tree} from '@angular-devkit/schematics';
import {overwritePackageJson, getPackageJson, PackageJsonConfigPart} from '../utils/utils';

/**
 * Sorts the keys of the given object.
 * @returns A new object instance with sorted keys
 */
function sortObjectByKeys(obj: PackageJsonConfigPart<string>) {
  // @ts-ignore
  return Object.keys(obj)
    .sort()
    .reduce((result: any, key: string) => (result[key] = obj[key]) && result, {});
}

/** Adds a package to the package.json in the given host tree. */
export function addPackageToPackageJson(hostTree: Tree, pkg: string, version: string): Tree {
  const packageJson = getPackageJson(hostTree);

  if (!packageJson.dependencies) {
    packageJson.dependencies = {};
  }

  if (!packageJson.dependencies[pkg]) {
    packageJson.dependencies[pkg] = version;
    packageJson.dependencies = sortObjectByKeys(packageJson.dependencies);
  }
  return overwritePackageJson(hostTree, packageJson);
}

/** Gets the version of the specified package by looking at the package.json in the given tree. */
export function getPackageVersionFromPackageJson(tree: Tree, name: string): string | null {
  const packageJson = getPackageJson(tree);

  if (packageJson.dependencies && packageJson.dependencies[name]) {
    return packageJson.dependencies[name];
  }

  return null;
}
