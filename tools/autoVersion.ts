import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { publishPackage } from './publishPackage';
import { folder, getPublishableProjects, readJson, ReleaseData } from './utils';

(async (): Promise<void> => {
  const currentVersions = await getPublishableProjects();
  const dataFileName = join(folder, './tools', 'releaseChecksums.develop.json');
  try {
    const oldData = (readJson(dataFileName) || []) as ReleaseData[];
    const needRelease = currentVersions.reduce((needRelease, data) => {
      const old = oldData.find((row) => row && row.name === data.name);
      if (old === undefined || old.hash !== data.hash) {
        return needRelease.concat(data);
      }
      return needRelease;
    }, [] as ReleaseData[]);
    await Promise.all(needRelease.map(updateAndPublish));
    if (needRelease.length === 0) {
      console.warn(`
        None of the ${currentVersions.length} packages needs to be updated`);
    } else {
      currentVersions
        .map((v) => {
          const isPublished = needRelease.find((r) => r.name === v.name) !== undefined;
          return {
            packageName: v.pkg,
            isPublished,
            version: v.version,
          };
        })
        .forEach(({ packageName, isPublished, version }) =>
          console.log((isPublished ? ' ⇒ ' : '   ') + packageName + '@' + version)
        );
    }
    /** update the hashes */
    writeFileSync(dataFileName, JSON.stringify(currentVersions, undefined, 2));
  } catch (e) {
    console.error(e);
  }
  // console.table(data);
  async function updateAndPublish(toRelease: ReleaseData) {
    try {
      const pkgPath = join(folder, toRelease.dist, 'package.json');
      const original = (readFileSync(pkgPath) as unknown) as string;
      const pkg = JSON.parse(original);
      const tag = 'develop';
      const timeStamp = new Date().toTimeString().split(' ')[0].replace(/\:/g, '');

      pkg.version = `${toRelease.version}-BETA.${timeStamp}`;
      // write a temporary package with the has attached to the version to relase a 'nighly'
      writeFileSync(pkgPath, JSON.stringify(pkg, undefined, 2));
      // const res={ste:'',sto:''}
      const res = await publishPackage(tag, toRelease, false);
      console.log(`---------------------------------------------------------------------\n`);
    } catch (e) {
      console.error(e);
    }
  }
})().then(() => console.log('done'));
