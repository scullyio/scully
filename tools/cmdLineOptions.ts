import { createRequire } from 'module';
import { join } from 'path';
import { SemVer } from 'semver';
import { folder, readJson } from './utils.js';

const require = createRequire(import.meta.url);
const chalk = require('chalk');
export const { yellow, green, red } = chalk;
const { inc, prerelease, parse } = require('semver');

const minimist = require('minimist');

/** read the main package version */
export const main = readJson(join(folder, 'package.json'));
export const currentVersion: string = main.version;
const parsedVersion = parse(currentVersion) as SemVer;
/** reads the pre-release train from the current version number */
export const preReleaseTrain = typeof parsedVersion.prerelease[0] === 'string';
export const currentPrerelease = (preReleaseTrain ? prerelease(parse(currentVersion)) : ['alpha'])[0];

// process cmd line options
const argv = minimist(process.argv.slice(2));
/** getting cmd line options */
export const dryRun = !!!argv.doActualPublish;
export const silent = !!argv.silent;
export const publish_major = !!argv.major;
export const publish_minor = !!argv.minor;
export const publish_pre = !!argv.pre || preReleaseTrain;
export const publish_kind = argv.kind ?? currentPrerelease;

export let releaseType = publish_minor ? 'minor' : publish_major ? 'major' : publish_pre ? 'prerelease' : 'patch';
if (publish_pre && releaseType !== 'prerelease') {
  releaseType = `pre${releaseType}`;
}

export const newVersion: string = inc(currentVersion, releaseType, publish_pre ? publish_kind : false);

export const all = releaseType.includes('patch') ? !!argv.all : true;
