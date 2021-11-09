/* eslint-disable @typescript-eslint/no-explicit-any */
import { logWarn } from '@scullyio/scully';
import { dotFolder } from '@scullyio/scully/src/lib/utils/scullydot';
import * as level from 'level';
import { join } from 'path';
import { noCache } from './cli-options';
import { Deferred } from './deferred';

export const cacheFolder = join(dotFolder, '__cache');

/** "global" get/set/del, so if cache isn't available all still works */
export let get = async <T>(key): Promise<T> => undefined;
export let set = async <T>(key, val: T) => undefined;
export let del = async (key) => undefined;
let dbb: any = {};

const deferred = new Deferred<void>();
export const levelDbReady = deferred.promise;

export function initializeLevelDb() {
  if (noCache) {
    deferred.reject();
    return deferred.promise;
  }
  level(cacheFolder, { createIfMissing: true, valueEncoding: 'json', keyEncoding: 'json' }, (err, db) => {
    if (err) {
      logWarn(`caching disabled. Se the below error`);
      console.log(err);
      deferred.reject(err);
      return;
    }
    /** successfully open, make get-set actually work
     *
     */
    // console.log(db.set, )
    get = db.get.bind(db);
    set = db.put.bind(db);
    del = db.del.bind(db);
    dbb = db;
    deferred.resolve();
  });
  return deferred.promise;
}

export const traverse = async (cb) => {
  if (await levelDbReady.then(() => true).catch(() => false)) {
    return new Promise((res, rej) => {
      dbb.createReadStream().on('data', cb).on('end', res).on('error', rej).on('close', res);
    });
  }
  throw new Error(`cache not available, can't traverse`);
};

export const kill = async () => {
  if (await levelDbReady.then(() => true).catch(() => false)) {
    return new Promise<void>((res, rej) => {
      dbb.clear((err) => (err ? rej(err) : res()));
    });
  }
};
