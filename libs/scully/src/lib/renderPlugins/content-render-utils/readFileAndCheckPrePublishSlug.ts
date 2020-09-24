import { readFileSync, writeFileSync } from 'fs';
import { stringify } from 'yamljs';
import { randomString } from '../../utils/randomString';
import { logWarn, yellow } from '../../utils';
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
      if (date.getTime() <= new Date().getTime()) {
        meta.published = true;
      } else {
        meta.published = false;
      }
    }
  }
  if (meta.hasOwnProperty('published')) {
    /** this post needs an pre-publish slug */
    const slugs = Array.isArray(meta.slugs) ? meta.slugs : [];
    let unPublishedSlug = slugs.find((sl: string) => sl.startsWith(prependString));
    if (meta.published === false) {
      if (!unPublishedSlug) {
        /** there is no prepub slug so create one and update the file */
        unPublishedSlug = createSlug();
        meta.slugs = slugs.concat(unPublishedSlug);
      }
      prePublished = true;
    }
    /** string literal, don't format "correctly" or things will break ;) */
    const newFile = `---
${stringify(meta)}
---
${fileContent}`;
    writeFileSync(file, newFile);
    /** overwrite slug from file with prepub only in memory. we don't want a file with the original slug name now. */
    meta.slug = unPublishedSlug;
  }
  return { meta, fileContent, prePublished };
}
