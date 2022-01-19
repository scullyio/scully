import { lstatSync, readdir, readFileSync } from 'fs';
import { basename, extname, join } from 'path';
import { FilePlugin } from '../pluginManagement/Plugin.interfaces.js';
import { AlternateExtensionsForFilePlugin, plugins, registerPlugin } from '../pluginManagement/pluginRepository.js';
import { readFileAndCheckPrePublishSlug } from '../renderPlugins/content-render-utils/readFileAndCheckPrePublishSlug.js';
import { captureException } from '../utils/captureMessage.js';
import { scullyConfig } from '../utils/config.js';
import { RouteTypeContentFolder } from '../utils/interfacesandenums.js';
import { logOk, logWarn, printProgress, yellow } from '../utils/log.js';
import { HandledRoute } from './handledRoute.interface.js';
let basePath: string;

export async function contentFolderPlugin(angularRoute: string, conf: RouteTypeContentFolder): Promise<HandledRoute[]> {
  const parts = angularRoute.split('/');
  /** for now, just handle the First parameter. Not sure if/how we can handle multiple ones. */
  const param = parts.filter((p) => p.startsWith(':')).map((id) => id.slice(1))[0];
  const paramConfig = conf[param];
  if (!paramConfig) {
    console.error(`missing config for parameters (${param}) in route: ${angularRoute}. Skipping`);
    return [];
  }
  const baseRoute = angularRoute.split(':' + param)[0];
  basePath = join(scullyConfig.homeFolder, paramConfig.folder);
  const handledRoutes = await checkSourceIsDirectoryAndRun(basePath, baseRoute, conf);
  printProgress(handledRoutes.length, 'content files added');
  logOk(`ContentFolderPlugin found ${handledRoutes.length} files in folder "${yellow(basePath)}" for route "${angularRoute}"`);
  return handledRoutes;
}

async function checkSourceIsDirectoryAndRun(path, baseRoute, conf) {
  const files = await new Promise<string[]>((resolve) =>
    readdir(path, (err, data) => {
      if (err) {
        captureException(err);
      }
      return resolve(data);
    })
  );
  const handledRoutes: HandledRoute[] = [];
  for (const sourceFile of files) {
    const ext = extname(sourceFile);
    // const ext = sourceFile.split('.').pop();
    const templateFile = join(path, sourceFile);

    if (lstatSync(templateFile).isDirectory()) {
      handledRoutes.push(...(await checkSourceIsDirectoryAndRun(templateFile, baseRoute, conf)));
    } else {
      if (checkIfEmpty(templateFile)) {
        logWarn(`The file ${yellow(templateFile)} is empty, scully will ignore.`);
      } else if (!hasContentPlugin(ext)) {
        logWarn(
          `The file ${yellow(templateFile)} has extension ${yellow(ext)} that has no plugin defined, scully will skip this file.`
        );
      } else {
        handledRoutes.push(...(await addHandleRoutes(sourceFile, baseRoute, templateFile, conf, ext)));
        // await new Promise((r) => setTimeout(() => r(), 2000));
        printProgress(handledRoutes.length, 'content files added');
      }
    }
  }
  return handledRoutes;
}

function hasContentPlugin(extension: string) {
  const availAblePlugins = plugins.fileHandler;
  extension = extension.toLowerCase().trim();
  extension = extension.startsWith('.') ? extension.slice(1) : extension;
  return (
    Object.entries(availAblePlugins).find(
      ([name, plugin]: [string, FilePlugin]) =>
        extension === name.toLowerCase() ||
        (Array.isArray(plugin[AlternateExtensionsForFilePlugin]) && plugin[AlternateExtensionsForFilePlugin].includes(extension))
    ) !== undefined
  );
}

function checkIfEmpty(templateFile: string) {
  try {
    const file = readFileSync(templateFile).toString();
    return file.length === 0 ? true : false;
  } catch (e) {
    return false;
  }
}

async function addHandleRoutes(sourceFile, baseRoute, templateFile, conf, ext) {
  const handledRoutes = [];
  const base = basename(sourceFile, ext);
  // if a subfolder we need add a route for this folder
  let routify = (frag) => `${baseRoute}${slugify(frag)}`;
  // replace \ for / for windows
  const newTemplateFile = templateFile.split('\\').join('/');
  if (!newTemplateFile.endsWith(`${basePath}/${sourceFile}`)) {
    /** get the 'path' part of as a route partial */
    const routePartial = newTemplateFile.substr(basePath.length + 1).replace(sourceFile, '');
    routify = (frag) => `${baseRoute}${routePartial}${slugify(frag)}`;
  }
  const { meta, prePublished } = await readFileAndCheckPrePublishSlug(templateFile);
  const name = conf.name;
  const handledRoute: HandledRoute = {
    route: routify(meta.slug || base),
    type: conf.type,
    templateFile,
    data: { name, ...meta, sourceFile },
  };
  handledRoutes.push(handledRoute);
  if (!prePublished && Array.isArray(meta.slugs)) {
    /** also add routes for all available slugs */
    meta.slugs
      .filter((slug) => typeof slug === 'string')
      .map(routify)
      .forEach((route) => handledRoutes.push({ ...handledRoute, route }));
  }
  return handledRoutes;
}

export function slugify(frag: string): string {
  return frag.trim().split('/').join('_').split(' ').join('_').split('?').join('_');
}

// TODO actual validation of the config
const configValidator = async (conf) => {
  // return [yellow('all seems ok')];
  return [];
};

registerPlugin('router', 'contentFolder', contentFolderPlugin, configValidator);
