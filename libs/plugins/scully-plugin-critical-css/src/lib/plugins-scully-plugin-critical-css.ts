import { HandledRoute, logWarn, registerPlugin, scullyConfig, createFolderFor, getMyConfig } from '@scullyio/scully';
import * as critical from 'critical';
import { readdirSync } from 'fs';
import { join } from 'path';

export const criticalCSS = 'criticalCss';

export interface CriticalCSSSettings {
  /** inline images into the pages when smaller then 10240 bytes */
  inlineImages?: boolean;
  /** Width of the target viewport */
  width?: number;
  /** Height of the target viewport */
  height?: number;
  /** An array of objects containing height and width. Takes precedence over width and height if set */
  dimensions?: {
    width: number;
    height: number;
  }[];
}

const defaultSettings: CriticalCSSSettings = {
  inlineImages: true,
  width: 1800,
  height: 1400,
};

const criticalCssPlugin = async (incomingHtml: string, route: HandledRoute) => {
  try {
    const settings: CriticalCSSSettings = Object.assign({}, defaultSettings, getMyConfig(criticalCssPlugin));
    const cssFiles = getStyleFiles(scullyConfig.distFolder).map((file) => file.replace(scullyConfig.distFolder, ''));
    const assetPaths = [scullyConfig.outDir, join(scullyConfig.outDir, '/assets')];
    const crSettings = {
      html: incomingHtml,
      /** we need to base, as it uses it to _read_ the css */
      base: scullyConfig.outDir,
      /** we parse all the css files found in the dist folder, as we don't know where the dev has put the relevant css for this page. */
      css: cssFiles,
      /** try to read the assets for inlining here */
      assetPaths,
      /** we can't extract, as we don't know what the SPA might need */
      extract: false,
      /** do _not_ rebase, as we are not changing any locations. */
      rebase: () => undefined,
      /** this should be configurable */
      inlineImages: settings.inlineImages,
      height: settings.height,
      width: settings.width,
      /** the options for the inline tool. there is no use in user-setting those. */
      inline: {
        /*  we want to add teh preload tags as that makes the CSS loading lazy */
        preload: true,
        /** we will minify the nliines css */
        minify: true,
      },
    };
    /** dimensions overpower the width/height settings, only set if indees setted. */
    if (settings.dimensions) {
      crSettings['dimensions'] = settings.dimensions;
    }
    const { html } = await critical.generate(crSettings);
    return html;
    // console.log(css);
  } catch (e) {
    logWarn(`route: "${route.route}" could not inline CSS`, e);
  }
  return incomingHtml;
};
registerPlugin('render', criticalCSS, criticalCssPlugin);

function getStyleFiles(path) {
  const entries = readdirSync(path, { withFileTypes: true });
  const folders = entries.filter((folder) => folder.isDirectory());
  const files = entries.filter((file) => !file.isDirectory() && file.name.endsWith('.css')).map((file) => join(path, file.name));
  for (const folder of folders) {
    const newPath = `${path}/${folder.name}`;
    files.push(...getStyleFiles(newPath));
  }
  return files;
}
