import {FilePlugin, plugins} from '../../pluginManagement/pluginRepository';
import {logError} from '../../utils/log';
export async function handleFile(extension: string, fileContent: string) {
  extension = extension.trim().toLowerCase();
  let plugin = plugins.fileHandler[extension];
  if (!plugin) {
    /** find by alternate extensions */
    const t = Object.entries(plugins.fileHandler).find(
      ([name, pl]: [string, FilePlugin]) =>
        pl.alternateExtensions && pl.alternateExtensions.includes(extension)
    );
    if (t.length) {
      plugin = t[1];
    } else {
      throw new logError(`unknown filetype ${extension}`);
    }
  }
  return plugin.handler(fileContent) as Promise<string>;
}
