import { writeFileSync } from 'fs';
import { join } from 'path';
import { folder, getPublishableProjects } from './utils';

(async () => {
  console.log('replacing release checksums files with current version');
  const currentVersions = await getPublishableProjects();
  const releaseName = join(folder, './tools', 'releaseChecksums.release.json');
  const developName = join(folder, './tools', 'releaseChecksums.develop.json');
  writeFileSync(releaseName, JSON.stringify(currentVersions, undefined, 2));
  writeFileSync(developName, JSON.stringify(currentVersions, undefined, 2));
})();
