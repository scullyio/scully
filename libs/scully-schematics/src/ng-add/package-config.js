'use strict';
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, '__esModule', {value: true});
const utils_1 = require('../utils/utils');
/**
 * Sorts the keys of the given object.
 * @returns A new object instance with sorted keys
 */
function sortObjectByKeys(obj) {
  // @ts-ignore
  return Object.keys(obj)
    .sort()
    .reduce((result, key) => (result[key] = obj[key]) && result, {});
}
/** Adds a package to the package.json in the given host tree. */
function addPackageToPackageJson(hostTree, pkg, version) {
  const packageJson = utils_1.getPackageJson(hostTree);
  if (!packageJson.dependencies) {
    packageJson.dependencies = {};
  }
  if (!packageJson.dependencies[pkg]) {
    packageJson.dependencies[pkg] = version;
    packageJson.dependencies = sortObjectByKeys(packageJson.dependencies);
  }
  return utils_1.overwritePackageJson(hostTree, packageJson);
}
exports.addPackageToPackageJson = addPackageToPackageJson;
/** Gets the version of the specified package by looking at the package.json in the given tree. */
function getPackageVersionFromPackageJson(tree, name) {
  const packageJson = utils_1.getPackageJson(tree);
  if (packageJson.dependencies && packageJson.dependencies[name]) {
    return packageJson.dependencies[name];
  }
  return null;
}
exports.getPackageVersionFromPackageJson = getPackageVersionFromPackageJson;
//# sourceMappingURL=package-config.js.map
