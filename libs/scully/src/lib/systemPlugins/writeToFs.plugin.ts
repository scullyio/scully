import { promises, writeFileSync } from 'fs';
import { join } from 'path';
import { registerPlugin, scullySystem } from '../pluginManagement';
import { findPlugin } from '../pluginManagement/pluginConfig';
import { accessPluginDirectly } from '../pluginManagement/pluginRepository';
import { scullyConfig } from '../utils/config';
import { createFolderFor } from '../utils/createFolderFor';
import { log, logError, yellow, logOk } from '../utils/log';
const { writeFile } = promises;

const SCULLY_STATE_START = `/** ___SCULLY_STATE_START___ */`;
const SCULLY_STATE_END = `/** ___SCULLY_STATE_END___ */`;
// export const WriteToStorage = '__Scully_WriteToStorage__';
export const WriteToStorage = 'writeToStorage' as const;
export const ExtractState = 'ExtractState' as const;
export const WriteStateToStorage = 'WriteStateToStorage' as const;

/** don't export, let the plugin-system do its work. */
const writeHTMLToFs = async (route: string, content: string): Promise<string> => {
  try {
    const file = join(scullyConfig.outDir, route, '/index.html');
    createFolderFor(file);
    writeFileSync(file, content);
    return file
  } catch (e) {
    logError(`Error during file write`, e);
  }
  return '';
};

/** plugin that saves State (if there) to data.json */
const writeDataToFs = async (route: string, content: string): Promise<number> => {
  const state: string = findPlugin(ExtractState)[accessPluginDirectly](route, content);
  if (!scullyConfig.inlineStateOnly && state) {
    const stateFile = join(scullyConfig.outDir, route, '/data.json');
    await writeFile(stateFile, state);
    const dataSize = Math.floor((state.length / 1024) * 100) / 100;
    //TODO: add warning for data size?
    return dataSize;
  }
  return 0
};

/**
 * Plugin that returns state as string, and return undefined otherwise
 * @param _route
 * @param content
 */
const extractState = (_route: string, content: string): string | undefined => {
  if (!content.includes(SCULLY_STATE_START)) {
    return undefined;
  }
  try {
    return unescapeHtml(content.split(SCULLY_STATE_START)[1].split(SCULLY_STATE_END)[0]);
  } catch (e) {
    return undefined;
  }
};

const writeAll = async (route: string, content: string) => {
  const file = await writeHTMLToFs(route, content);
  const size = await writeDataToFs(route, content);
  const sizeStr = size > 0 ? `and ${size.toString().trim()}Kb into "${yellow('data.json')}"` : '';
  logOk(`Route "${yellow(route)}" rendered into "${yellow(file)}" ${sizeStr}`);

};

registerPlugin(scullySystem, WriteToStorage, writeAll);
registerPlugin(scullySystem, ExtractState, extractState);
registerPlugin(scullySystem, WriteStateToStorage, writeDataToFs);

/**
 * Unescape our custom escaped texts
 * @param text
 */
export function unescapeHtml(text: string): string {
  const unescapedText: { [k: string]: string } = {
    '_~q~': "'",
    '_~b~': '`',
    '_~o~': '$',
    '_~s~': '/',
    '_~l~': '<',
    '_~g~': '>',
  };

  return (
    text
      /** put back escaped double quotes to make valid json again */
      .replace(/_~d~/g, `\\"`)
      /** replace the custom escapes */
      .replace(/_~[^]~/g, (s) => unescapedText[s])
      /** restore newlines+cr */
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
  );
}
