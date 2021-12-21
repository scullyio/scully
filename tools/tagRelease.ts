import { writeFileSync } from 'fs';
import { createRequire } from 'module';
import { join } from 'path';
import { createInterface } from 'readline';
import { SemVer } from 'semver';
import { makeHash } from './makeHash.js';
import { publishPackage } from './publishPackage.js';
import { folder, getPublishableProjects, readJson, ReleaseData } from './utils.js';

const require = createRequire(import.meta.url);
const { green, yellow } = require('chalk');
const { inc, prerelease, parse } = require('semver');
const minimist = require('minimist');

/** read the main package version */
const main = await readJson(join(folder, 'package.json'));
const currentVersion = main.version;
const parsedVersion = parse(currentVersion) as SemVer
console.log(parsedVersion.prerelease[0], typeof parsedVersion.prerelease[0]);
/** reads the pre-release train from the current version number */
const preReleaseTrain = typeof parsedVersion.prerelease[0] === 'string';;
const currentPrerelease = (preReleaseTrain ? prerelease(parse(currentVersion)) : ['alpha'])[0];

// process cmd line options
const argv = minimist(process.argv.slice(2));
/** getting cmd line options */
const dryRun = !!!argv.doActualPublish;
const publish_major = !!argv.major;
const publish_minor = !!argv.minor;
const publish_pre = !!argv.pre || preReleaseTrain;
const publish_kind = argv.kind ?? currentPrerelease;

let releaseType = publish_minor ? 'minor' : publish_major ? 'major' : publish_pre ? 'prerelease' : 'patch';
if (publish_pre && releaseType !== 'prerelease') {
  releaseType = `pre${releaseType}`;
}

if (dryRun) {
  console.log(
    `doing a dry run for a ${yellow(releaseType)}, no changes will be made to do an actual release add the ${yellow(
      '--doActualPublish'
    )} cmd line option\n`
  );
}

const newVersion = inc(currentVersion, releaseType, publish_pre ? publish_kind : false);
const currentVersions = await getPublishableProjects();
// const currentVersions = [];
console.log(currentVersion, newVersion)

for (const pkg of currentVersions) {
  const originalPackage = readJson(join(folder, pkg.root, 'package.json'));
  const distPackage = readJson(join(folder, pkg.dist, 'package.json'));
  console.log(`Making a release for ${green(pkg.name)}, from version ${yellow(pkg.version)} to ${green(newVersion)}`);
  if (originalPackage === undefined || distPackage === undefined) {
    console.log(`Couldn't find package.json for ${pkg.name}. Aborting run`);
    process.exit(15);
  }
  if (!dryRun) {
    writeFileSync(join(folder, pkg.root, 'package.json'), JSON.stringify(originalPackage, undefined, 2));
    writeFileSync(join(folder, pkg.dist, 'package.json'), JSON.stringify(distPackage, undefined, 2));
  }
  /**
   * Publishing is for now a manual step, one this is merged into the main repo,
   * We can automate this once the tooling is ready.
   * For now, do a `npm run doPublish`
  */
  // await publishPackage(publish_pre ? 'next' : 'latest', { ...pkg, version: newVersion }, dryRun);
}

if (!dryRun) {
  main.version = newVersion;
  writeFileSync(join(folder, 'package.json'), JSON.stringify(main, undefined, 2));
  console.log(`
  --------------------------------------------------------------------------------
  Updated package.json to ${green(newVersion)}

  DO NOT FORGET TO PUBLISH THE PACKAGES MANUALLY,
  ONCE THIS IS MERGED INTO THE MASTER BRANCH.
  For now, do a ${yellow('npm run doPublish')}

  --------------------------------------------------------------------------------
  `);
}

/** old release way, leave code for now, (late 2021), perhaps we will return once. */
const all = releaseType.includes('patch') ? !!argv.all : true;
const oldWay = async (): Promise<void> => {
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
  await
    needRelease.reduce(async (prev, pkg) => {
      await prev;
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
      const answer = dryRun ? 'j' : await askUser('release the package? (j/n)')
      if (answer.trim().toLowerCase() === 'j') {
        if (!dryRun) {
          writeFileSync(join(folder, pkg.root, 'package.json'), JSON.stringify(originalPackage, undefined, 2));
          writeFileSync(join(folder, pkg.dist, 'package.json'), JSON.stringify(distPackage, undefined, 2));
        }
        await publishPackage('latest', { ...pkg, version: newVersion }, dryRun);
      }
    }, Promise.resolve())


  function askUser(question): Promise<string> {
    return new Promise((resolve) => {
      const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question(question, (a) => {
        resolve(a);
        rl.close();
      });
    });
  }

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
};
