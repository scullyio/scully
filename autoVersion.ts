import { exec } from 'child_process';
import { table } from 'console';
import { readFileSync, writeFileSync } from 'fs';
import { writeFile } from 'fs-extra';
import { join } from 'path';
import { makeHash } from './tools/dirsum';

const readJson = (path) => JSON.parse(readFileSync(path).toString());
const folder = process.cwd();
const workspace = readJson(join(folder, 'workspace.json'));

(async () => {
  const folders = Object.entries(workspace.projects)
    .map(([name, val]: [string, any]) => ({
      name,
      root: val.root,
      dist: val.architect.build.options.outputPath,
    }))
    .map((row) => {
      /** some projects in the workspace dont have an outfolder, add it here. */
      switch (row.name) {
        case 'ng-lib':
          return { ...row, dist: 'dist/libs/ng-lib' };
        default:
          return row;
      }
    });

  const pj = folders.map(async (project) => {
    try {
      // console.log(project.dist)
      const locOrg = join(folder, './', project.root, 'package.json');
      const locDest = join(folder, './', project.dist, 'package.json');
      const { name, version } = readJson(locOrg);
      // we are only going to handle publishable packages
      if (name.startsWith('@')) {
        /** copy in original package.json, in case we are repeating ourselves ;) */
        // writeFileSync(locDest,readFileSync(locOrg))
        const { hash } = await makeHash(join(folder, './', project.dist));
        // console.table(hash['files'])
        return { ...project, pkg: name, version, hash };
      }
    } catch (e) {
      console.log(`Project ${project.name} has ${e.toString()}`);
      return undefined;
    }
  });

  const currentVersions = (await Promise.all(pj)).filter((row) => !!row);
  const dataFileName = join(folder, 'releaseChecksums.json');
  try {
    const oldData = readJson(dataFileName) as ReleaseData[];
    const needRelease = currentVersions.reduce((needRelease, data) => {
      const old = oldData.find((row) => row && row.name === data.name);
      if (old === undefined || old.hash !== data.hash) {
        return needRelease.concat(data);
      }
      return needRelease;
    }, [] as ReleaseData[]);
    needRelease.forEach(updateAndPublish);
  } catch (e) {
    console.error(e);
    // writeFileSync(dataFileName, JSON.stringify(currentVersions, undefined, 4));
  }
  // console.table(data);

  async function updateAndPublish(toRelease: ReleaseData) {
    try {
      const pkgPath = join(folder, toRelease.dist, 'package.json');
      const original = (readFileSync(pkgPath) as unknown) as string;
      const pkg = JSON.parse(original);
      const tag = 'develop';
      pkg.version = `${toRelease.version}-${toRelease.hash}`;
      // write a temporary package with the has attached to the version to relase a 'nighly'
      writeFileSync(pkgPath, JSON.stringify(pkg, undefined, 4));
      const res = await new Promise((resolve, reject) =>
        exec(`npm publish --access-public --tag ${tag}`, { cwd: join(folder, toRelease.dist) }, (e, sto, ste) => {
          // console.log(e,sto,ste)
          resolve({ e, sto, ste });
        })
      );
      console.log(`released ${toRelease.name} with version ${pkg.version}`);
      writeFileSync(pkgPath, original);
      console.log(res.ste);
    } catch (e) {
      console.error(e);
    }
  }
})();

// publish token: 4714624d-fee1-499b-9829-77e790d3bdce

export interface ReleaseData {
  name: string;
  root: string;
  dist: string;
  pkg: string;
  version: string;
  hash: string;
}
