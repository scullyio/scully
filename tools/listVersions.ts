import { join } from 'node:path';
import { folder, getPublishableProjects, readJson } from './utils.js';

const currentVersions = await getPublishableProjects();

for (const pkg of currentVersions) {
  const locOrg = join(folder, './', pkg.root, 'package.json');
  const { name, version } = readJson(locOrg);
  console.log(`${name}@${version}`);
}
