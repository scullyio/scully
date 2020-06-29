import { writeFileSync } from 'fs';
import { join } from 'path';
import { scullyConfig } from '../utils/config';
import { createFolderFor } from '../utils/createFolderFor';
import { log, logError, yellow } from '../utils/log';
import { registerPlugin, scullySystem } from '../pluginManagement';

const SCULLY_STATE_START = `/** ___SCULLY_STATE_START___ */`;
const SCULLY_STATE_END = `/** ___SCULLY_STATE_END___ */`;
// export const WriteToStorage = '__Scully_WriteToStorage__';
export const WriteToStorage = Symbol('writeToStorage');

/** don't export, let the plugin-system do its work. */
const writeHTMLToFs = async (route: string, content: string): Promise<void> => {
  try {
    const file = join(scullyConfig.outDir, route, '/index.html');
    createFolderFor(file);
    writeFileSync(file, content);
    log(`Route "${yellow(route)}" rendered into file: "${yellow(file)}"`);
  } catch (e) {
    logError(`Error during file write`, e);
  }
};

const writeDataToFs = async (route: string, content: string): Promise<void> => {
  if (!scullyConfig.inlineStateOnly && content.includes(SCULLY_STATE_START)) {
    try {
      const stateFile = join(scullyConfig.outDir, route, '/data.json');
      const state = content
        .split(SCULLY_STATE_START)[1]
        .split(SCULLY_STATE_END)[0];
      writeFileSync(stateFile, state);
      log(
        `${' '.repeat(13 + route.length)}data into file: "${yellow(stateFile)}"`
      );
    } catch {
      /** there is probably no JSON data, ignore! */
    }
  }
};

const writeAll = async (route: string, content: string) => {
  await writeHTMLToFs(route, content);
  await writeDataToFs(route, content);
};

registerPlugin(scullySystem, WriteToStorage, writeAll);
