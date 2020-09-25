/* eslint-disable no-prototype-builtins */
import { readFileSync, writeFileSync } from 'fs';
import { stringify } from 'yamljs';
import { randomString } from '../../utils/randomString';
import { logWarn, yellow } from '../../utils';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fm = require('front-matter');

export interface ContentMetaData {
  author?: string;
  published?: boolean;
  slug?: string;
  'publish date'?: Date;
  slugs?: string[];
  title?: string;
  [key: string]: any;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function readFileAndCheckPrePublishSlug(file) {
  const prependString = '___UNPUBLISHED___';
  const createSlug = () => `${prependString}${Date.now().toString(36)}_${randomString(32)}`;
  const originalFile = readFileSync(file, 'utf-8');
  const { attributes: meta, body: fileContent }: { attributes: ContentMetaData; body: string } = fm(originalFile);
  let prePublished = false;
  if (fileContent.trim() === '') {
    logWarn(`Content file "${yellow(file)}" has no content!`);
  }
  if (meta.hasOwnProperty('publish date') || meta.hasOwnProperty('publish-date') || meta.hasOwnProperty('publishDate')) {
    const date = meta['publish date'] || meta['publish-date'] || meta['publishDate'];
    // check if there is a valid date (getTime on invalid date returns NaN)
    if (date instanceof Date && date.getTime() === date.getTime()) {
      const published = date.getTime() <= new Date().getTime();
      if (published && meta.hasOwnProperty('published') && meta.published === false) {
        /** no need to update when its published anyway already! */
        updateFileWithNewMeta({ ...meta, published });
      }
      /** make sure internal published reflects the state of the published date */
      meta.published = published;
    }
  }
  if (meta.hasOwnProperty('published') && meta.published === false) {
    /** this post needs an pre-publish slug */
    const slugs = Array.isArray(meta.slugs) ? meta.slugs : [];
    let unPublishedSlug = slugs.find((sl: string) => sl.startsWith(prependString));
    if (!unPublishedSlug) {
      /** there is no prepub slug so create one and update the file */
      unPublishedSlug = createSlug();
      updateFileWithNewMeta({ ...meta, slugs: slugs.concat(unPublishedSlug) });
    }
    prePublished = true;
    /** overwrite slug from file with prepub only in memory. we don't want a file with the original slug name now. */
    meta.slug = unPublishedSlug;
  }
  return { meta, fileContent, prePublished };

  function updateFileWithNewMeta(newMeta: ContentMetaData) {
    /** only update file on actual changes. */
    if (JSON.stringify(meta) !== JSON.stringify(newMeta)) {
      /** string literal, don't format "correctly" or things will break ;) */
      const newFile = `---
${stringify(meta).trim()}
---

${fileContent}`;
      writeFileSync(file, newFile);
    }
  }
}
