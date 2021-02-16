import { green, yellow } from 'chalk';
import { writeFileSync } from 'fs';
// minimist is being used by the NG cli and a couple of other tools
import * as minimist from 'minimist';
import { join } from 'path';
import { inc } from 'semver';
import { folder, getPublishableProjects, readJson, ReleaseData } from './utils';
// process cmd line options
const argv = minimist(process.argv.slice(2));
/** getting cmd line options */
const dryRun = !!!argv.doActualPublish;
const all = !!argv.all;
const publish_major = !!argv.major;
const publish_minor = !!argv.minor;

const releaseType = publish_minor ? 'minor' : publish_major ? 'major' : 'patch';

if (dryRun) {
  console.log(`doing a dry run for a ${releaseType}, no changes will be made`);
}

(async (): Promise<void> => {
  const currentVersions = await getPublishableProjects();
  const dataFileName = join(folder, './tools', 'releaseChecksums.release.json');
  const oldData = (readJson(dataFileName) || []) as ReleaseData[];
  const needRelease = currentVersions.reduce((needRelease, data) => {
    const old = oldData.find((row) => row && row.name === data.name);
    if (all || old === undefined || old.hash !== data.hash) {
      return needRelease.concat(data);
    }
    return needRelease;
  }, [] as ReleaseData[]);
  needRelease.forEach((pkg) => {
    const newVersion = inc(pkg.version, releaseType);
    const originalPackage = readJson(join(folder, pkg.root, 'package.json'));
    const distPackage = readJson(join(folder, pkg.dist, 'package.json'));
    console.log(`Making a release for ${green(pkg.name)}, from version ${yellow(pkg.version)} to ${yellow(newVersion)}`);
    if (originalPackage === undefined || distPackage === undefined) {
      console.log(`Couldn't find package.json for ${pkg.name}. Aborting run`);
      process.exit(15);
    }
    originalPackage.version = newVersion;
    distPackage.version = newVersion;
  });

  /** update the hashes */
  !dryRun && writeFileSync(dataFileName, JSON.stringify(currentVersions, undefined, 2));
})();
