import { exec } from 'child_process';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { logWarn } from './log.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export function version() {
  const pkgFile = join(__dirname, '../../..', 'package.json');
  try {
    const { version } = JSON.parse(readFileSync(pkgFile).toString());
    if (!version) {
      logWarn(`no version found in ${pkgFile}`);
    }
    return version;
  } catch {
    logWarn(`Could not read or parse  ${pkgFile}`);
    return 'unknown';
  }
}

export function displayVersions(): Promise<void> {
  return new Promise<void>(r => {
    exec('npm list --depth=0 --json', (err, stdout, stderr) => {
      try {
        const json = JSON.parse(stdout);
        const packages = Object.entries(json?.dependencies).map(([name, obj]: [string, any]) => ({
          name,
          version: obj.version as string
        }));
        const official = packages.filter(({ name }) => name.startsWith('@scully')).sort((a, b) => (a.name < b.name ? -1 : 1));
        const community = packages.filter(
          ({ name }) => !name.startsWith('@scully') && name.includes('scully') && name.includes('plugin')
        );
        const max = [...official, ...community].reduce((l, { name }) => (name.length > l ? name.length : l), 0);
        const display = (r: { name: string; version: string }[]) =>
          r.forEach(({ name, version }) => {
            console.log(`   ${name.padEnd(max, ' ')} ${version}`);
          });
        console.log('Scully versions');
        display(official);
        if (community.length > 0) {
          console.log('Community plugins');
          display(community);
        }
      } catch (e) {
        console.error(e);
      }
      r();
    });
  });
}
