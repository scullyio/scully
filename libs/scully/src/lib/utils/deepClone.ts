/* eslint-disable no-prototype-builtins */
import { Serializable } from 'puppeteer';
/**
 * Helper to deep-clone any JS variable.
 * @param original
 */
export const deepClone = <T>(original: T): T => {
  /**  if not array or object or is null return self */
  if (typeof original !== 'object' || original === null) {
    return original;
  }
  if (original instanceof Date) {
    return new Date(original.getTime()) as unknown as T;
  }
  /** using a single var for both return values gives some air to TS type system. */
  let clone: any;
  if (original instanceof Array) {
    const l = original.length;
    clone = [];
    for (let i = 0; i < l; i++) {
      clone[i] = deepClone(original[i]);
    }
    return clone;
  }
  clone = {};
  for (const i in original) {
    if (original.hasOwnProperty(i)) {
      clone[i] = deepClone(original[i]);
    }
  }
  return clone;
};
