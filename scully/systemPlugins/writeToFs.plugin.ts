import {writeFileSync} from 'fs';
import {join} from 'path';
import {scullyConfig} from '../utils/config';
import {createFolderFor} from '../utils/createFolderFor';
import {log, logError, yellow} from '../utils/log';

export const writeToFs = async (route, content: string): Promise<void> => {
  try {
    const file = join(scullyConfig.outFolder, route, '/index.html');
    createFolderFor(file);
    writeFileSync(file, content);
    log(`Route "${yellow(route)}" rendered into file: "${yellow(file)}"`);
  } catch (e) {
    logError(`Error during file write`, e);
  }
};
