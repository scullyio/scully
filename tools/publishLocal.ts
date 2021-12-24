import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { newVersion } from './cmdLineOptions.js';
import { publishPackage } from './publishPackage.js';
import { folder, getPublishableProjects, ReleaseData } from './utils.js';

/** use a single stamp for all files */
const timeStamp = new Date()
  .toISOString()
  .split('')
  .filter((t: any) => !isNaN(t))
  .join('');

await checkAndPublishChangedPackages();

async function checkAndPublishChangedPackages() {

  const currentVersions = await getPublishableProjects();
  try {
    for (const pkg of currentVersions) {
      // console.dir(pkg)
      updateAndPublish(pkg)
    }
  } catch (e) {
    console.error(e);
  }
  // await pushToGit(`push updated devlop release hashes for version: ${newVersion}-BETA.${timeStamp}`)
}
async function updateAndPublish(toRelease: ReleaseData) {
  try {
    const pkgPath = join(folder, toRelease.dist, 'package.json');
    const original = (readFileSync(pkgPath) as unknown) as string;
    const pkg = JSON.parse(original);
    const tag = 'latest';
    // pkg.version = `${newVersion}`;
    // write a temporary package with the has attached to the version to relase a 'nighly'
    writeFileSync(pkgPath, JSON.stringify(pkg, undefined, 2));
    // const res={ste:'',sto:''}
    const res = await publishPackage(tag, toRelease, false, true);
  } catch (e) {
    // console.error(e);
  }
}

// while ! echo exit | nc localhost 13000; do sleep 10; done
// npm publish --registry http://localhost:4873/

