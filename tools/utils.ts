import { readFileSync } from 'fs';
import { join } from 'path';
import { buildAll, buildPkg } from './buildIt';
import { makeHash } from './makeHash';

export const readJson = (path) => {
  try {
    return JSON.parse(readFileSync(path).toString());
  } catch {
    // console.error(`File ${path} not found, returning undefined`);
    return undefined;
  }
};
export const folder = process.cwd();

export async function getPublishableProjects(): Promise<ReleaseData[]> {
  /** make sure there are fresh packages */
  await buildAll().catch((e) => {
    process.exit(15);
  });
  const workspace = readJson(join(folder, 'workspace.json'));
  const publishableProjects = Object.entries(workspace.projects)
    .map(([name, val]: [string, any]) => ({
      name,
      root: val.root,
      dist: val.architect.build?.options?.outputPath,
    }))
    .map((row) => {
      /** some projects in the workspace dont have an outfolder, add it here. */
      switch (row.name) {
        case 'ng-lib':
          return { ...row, dist: 'dist/libs/ng-lib' };
        default:
          return row;
      }
    })
    .map(async (project) => {
      try {
        const locOrg = join(folder, './', project.root, 'package.json');
        const { name, version } = readJson(locOrg);
        // we are only going to handle publishable packages
        if (name.startsWith('@')) {
          /** create an hash from the freshly build project */
          const { hash } = await makeHash(join(folder, './', project.dist));
          return { ...project, pkg: name, version, hash };
        }
      } catch (e) {
        // the apps don't follow the flow, and will error out as expected
        // console.log(`Project ${project.name} has ${e.toString()}`);
        return undefined;
      }
    });
  /** wait until all projects are build, and filter out undefined ones */
  const buildedProjects = (await Promise.all(publishableProjects)).filter((row) => !!row);
  return buildedProjects;
}

export interface ReleaseData {
  name: string;
  root: string;
  dist: string;
  pkg: string;
  version: string;
  hash: string;
}
