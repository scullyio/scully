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
