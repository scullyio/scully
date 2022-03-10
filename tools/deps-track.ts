import { createRequire } from 'module';
import { join } from 'path';
import { green, red, yellow, silent } from './cmdLineOptions.js';
import { folder, getPublishableProjects, readJson, ReleaseData } from './utils.js';
// import {satisfies} from 'semver'

const require = createRequire(import.meta.url);

const pkg: Package = require('../../package.json');
const { satisfies, clean } = require('semver');

const deps = [] as { name: string; version: string; type: 'dependencies' | 'devDependencies' }[];
const pkgDeps = [...Object.entries(pkg.dependencies)];
const pkgDevDeps = [...Object.entries(pkg.devDependencies)];
const errors = [] as string[];
const oks = [] as string[];

for (const dep of pkgDeps) {
  const [name, version] = dep;
  deps.push({ name, version, type: 'dependencies' });
}
for (const dep of pkgDevDeps) {
  const [name, version] = dep;
  if (pkg.dependencies[name] !== undefined) {
    errors.push(`❌ ${name} ${version} is a dev dep, but also a normal dep. ${pkg.dependencies[name]}`);
  }
  deps.push({ name, version, type: 'devDependencies' });
}

deps.sort((a, b) => a.name.localeCompare(b.name));

const pkpgs = await getPublishableProjects();

for (const pkg of pkpgs) {
  const pkgLocation = join(folder, pkg.root, 'package.json');
  // console.log(pkgLocation)
  const originalPackage = readJson(pkgLocation) as Package;
  Object.entries(originalPackage.dependencies ?? {}).forEach(inspectVersions(pkg, 'dependency'));
  Object.entries(originalPackage.devDependencies ?? {}).forEach(inspectVersions(pkg, 'devDependency'));
  Object.entries(originalPackage.peerDependencies ?? {}).forEach(inspectVersions(pkg, 'peerDependency'));
}

if (!silent) {
  console.log(oks.join('\n'));
}

if (errors.length > 0) {
  console.log(errors.join('\n'));
  process.exit(1);
}

function inspectVersions(
  pkg: ReleaseData,
  type: string
): (value: [string, string], index: number, array: [string, string][]) => void {
  return ([name, version]) => {
    const relatedDep = deps.find((d) => d.name === name);
    const relVersion = relatedDep?.version?.replaceAll('^', '');
    if (name.startsWith('@scullyio/')) {
      /** done, it needs something from a scully public package. probably intended */
      return;
    }
    if (relatedDep === undefined) {
      errors.push(`❌ ${yellow(name)} ${green(version)} is a ${yellow(pkg.name)} ${type}, but not in main package.json.`);
      return;
    }
    // if (relatedDep.version !== version) {
    if (!satisfies(relVersion, version)) {
      errors.push(
        `❌ ${yellow(name)} ${green(version)} is a ${yellow(pkg.name)} ${type}, but in main package.json it is on: ${red(
          relVersion
        )}`
      );
    } else {
      oks.push(
        `✅ ${yellow(name)} ${green(version)} is a ${yellow(pkg.name)} ${type}, and is ok with main package.json on: ${red(
          relatedDep.version
        )}`
      );
    }
  };
}

export interface Package {
  name: string;
  version: string;
  description: string;
  repository: Repository;
  bin: Bin;
  engines: Engines;
  main: string;
  author: string;
  license: string;
  dependencies: { [key: string]: string };
  optionalDependencies: OptionalDependencies;
  peerDependencies: PeerDependencies;
  devDependencies: { [key: string]: string };
  keywords: string[];
}

export interface Bin {
  scully: string;
}

export interface Engines {
  node: string;
}

export interface OptionalDependencies {
  'asciidoctor.js': string;
}

export interface PeerDependencies {
  typescript: string;
}

export interface Repository {
  type: string;
  url: string;
}
