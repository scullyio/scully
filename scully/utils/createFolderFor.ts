import { mkdirSync } from 'fs';
import { dirname } from 'path';
export function createFolderFor(file) {
  /** drop the /xxx.html part of the route */
  const dirPath = dirname(file);
  try {
    mkdirSync(dirPath, {recursive: true});
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw err;
    }
  }
}
