import { green, yellow } from 'chalk';
import { writeFileSync } from 'fs';
// minimist is being used by the NG cli and a couple of other tools
import * as minimist from 'minimist';
import { join } from 'path';
import { inc } from 'semver';
import { makeHash } from './makeHash';
import { publishPackage } from './publishPackage';
import { folder, getPublishableProjects, readJson, ReleaseData } from './utils';
// process cmd line options
const argv = minimist(process.argv.slice(2));
/** getting cmd line options */
const dryRun = !!!argv.doActualPublish;
const publish_major = !!argv.major;
const publish_minor = !!argv.minor;

const releaseType = publish_minor ? 'minor' : publish_major ? 'major' : 'patch';
/** always release all version on minor or major releases */
const all = releaseType === 'patch' ? !!argv.all : true;

if (dryRun) {
  console.log(
    `doing a dry run for a ${releaseType}, no changes will be made to do an actual release add the ${yellow(
      '--doActualPublish'
    )} cmd line option\n`
  );
}

(async (): Promise<void> => {
  const currentVersions = await getPublishableProjects();
  const dataFileName = join(folder, './tools', 'releaseChecksums.release.json');
  const oldData = (readJson(dataFileName) || []) as ReleaseData[];
  const needRelease = currentVersions.reduce((needRelease, data) => {
    const old = oldData.find((row) => row && row.name === data.name);
    if (all || old === undefined || old.hash !== data.hash) {
      return needRelease.concat(data);
    } else {
      console.log(`Package ${data.name} is upto date, and won't be released`);
    }
    return needRelease;
  }, [] as ReleaseData[]);
  await Promise.all(
    needRelease.map(async (pkg) => {
      const newVersion = inc(pkg.version, releaseType);
      const originalPackage = readJson(join(folder, pkg.root, 'package.json'));
      const distPackage = readJson(join(folder, pkg.dist, 'package.json'));
      console.log(`Making a release for ${green(pkg.name)}, from version ${yellow(pkg.version)} to ${green(newVersion)}`);
      if (originalPackage === undefined || distPackage === undefined) {
        console.log(`Couldn't find package.json for ${pkg.name}. Aborting run`);
        process.exit(15);
      }
      originalPackage.version = newVersion;
      distPackage.version = newVersion;
      pkg.version = newVersion;
      if (!dryRun) {
        writeFileSync(join(folder, pkg.root, 'package.json'), JSON.stringify(originalPackage, undefined, 2));
        writeFileSync(join(folder, pkg.dist, 'package.json'), JSON.stringify(distPackage, undefined, 2));
      }
      await publishPackage('latest', { ...pkg, version: newVersion }, dryRun);
    })
  );

  /** update the hashes with the currently released versions */
  const releasedHashes = await Promise.all(
    currentVersions.map(async (v) => {
      const { hash } = await makeHash(join(folder, './', v.dist));
      return { ...v, hash };
    })
  );
  if (!dryRun) {
    writeFileSync(dataFileName, JSON.stringify(releasedHashes, undefined, 2));
  } else {
    // console.log(`updated ${dataFileName} will be:`)
    // console.log(JSON.stringify(releasedHashes, undefined, 2))
  }
})();
