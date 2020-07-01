import { writeFileSync } from 'fs';
import { join } from 'path';
import { scullyConfig } from '../utils/config';
import { createFolderFor } from '../utils/createFolderFor';
import { log, logError, yellow } from '../utils/log';
import { registerPlugin, scullySystem } from '../pluginManagement';
import { findPlugin } from '../pluginManagement/pluginConfig';

const SCULLY_STATE_START = `/** ___SCULLY_STATE_START___ */`;
const SCULLY_STATE_END = `/** ___SCULLY_STATE_END___ */`;
// export const WriteToStorage = '__Scully_WriteToStorage__';
export const WriteToStorage = Symbol('writeToStorage');
export const ExtractState = Symbol('ExtractState');

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

/** plugin that saves State (if there) to data.json */
const writeDataToFs = async (route: string, content: string): Promise<void> => {
  const state = findPlugin(ExtractState)(route, content);
  if (!scullyConfig.inlineStateOnly && state) {
    const stateFile = join(scullyConfig.outDir, route, '/data.json');
    log(
      `${' '.repeat(13 + route.length)}data into file: "${yellow(stateFile)}"`
    );
  }
};

/**
 * Plugin that returns state as string, and return undefined otherwise
 * @param _route
 * @param content
 */
const extractState = (_route: string, content: string): string | undefined => {
  try {
    return content.split(SCULLY_STATE_START)[1].split(SCULLY_STATE_END)[0];
  } catch {
    return undefined;
  }
};

const writeAll = async (route: string, content: string) => {
  await writeHTMLToFs(route, content);
  await writeDataToFs(route, content);
};

registerPlugin(scullySystem, WriteToStorage, writeAll);
registerPlugin(scullySystem, ExtractState, extractState);
