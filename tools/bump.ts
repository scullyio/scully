import { writeFileSync } from 'fs';
import { join } from 'path';
import { dryRun, green, main, newVersion, releaseType, yellow } from './cmdLineOptions.js';
import { folder, getPublishableProjects, readJson } from './utils.js';

export async function bump() {
  if (dryRun) {
    console.log(
      `doing a dry run for a ${yellow(releaseType)}, no changes will be made to do an actual release add the ${yellow(
        '--doActualPublish'
      )} cmd line option\n`
    );
  }

  const currentVersions = await getPublishableProjects();

  for (const pkg of currentVersions) {
    const originalPackage = readJson(join(folder, pkg.root, 'package.json'));
    const distPackage = readJson(join(folder, pkg.dist, 'package.json'));
    console.log(`Making a release for ${green(pkg.name)}, from version ${yellow(pkg.version)} to ${green(newVersion)}`);
    if (originalPackage === undefined || distPackage === undefined) {
      console.log(`Couldn't find package.json for ${pkg.name}. Aborting run`);
      process.exit(15);
    }
    if (!dryRun) {
      writeFileSync(
        join(folder, pkg.root, 'package.json'),
        JSON.stringify({ ...originalPackage, version: newVersion }, undefined, 2)
      );
      writeFileSync(join(folder, pkg.dist, 'package.json'), JSON.stringify({ ...distPackage, version: newVersion }, undefined, 2));
    }
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
}

await bump();
