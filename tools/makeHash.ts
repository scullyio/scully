import * as crypto from 'crypto';
import * as fs from 'fs';

// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.
// source: https://github.com/mcavage/node-dirsum
// Included in here because tooling fails... sigh
function _summarize(method, hashes) {
  var keys = Object.keys(hashes);
  keys.sort();

  var obj = {} as any;
  obj.files = hashes;
  var hash = crypto.createHash(method);
  for (var i = 0; i < keys.length; i++) {
    if (typeof hashes[keys[i]] === 'string') {
      hash.update(hashes[keys[i]]);
    } else if (typeof hashes[keys[i]] === 'object') {
      hash.update(hashes[keys[i]].hash);
    } else {
      console.error('Unknown type found in hash: ' + typeof hashes[keys[i]]);
    }
  }

  obj.hash = hash.digest('hex');
  return obj;
}
function digest(root, method, callback) {
  if (!root || typeof root !== 'string') {
    throw new TypeError('root is required (string)');
  }
  if (method) {
    if (typeof method === 'string') {
      // NO-OP
    } else if (typeof method === 'function') {
      callback = method;
      method = 'md5';
    } else {
      throw new TypeError('hash must be a string');
    }
  } else {
    throw new TypeError('callback is required (function)');
  }
  if (!callback) {
    throw new TypeError('callback is required (function)');
  }

  var hashes = {};

  fs.readdir(root, function (err, files) {
    if (err) return callback(err);

    if (files.length === 0) {
      return callback(undefined, { hash: '', files: {} });
    }

    var hashed = 0;
    files.forEach(function (f) {
      var path = root + '/' + f;
      fs.stat(path, function (err, stats) {
        if (err) return callback(err);

        if (stats.isDirectory()) {
          return digest(path, method, function (err, hash) {
            if (err) return hash;

            hashes[f] = hash;
            if (++hashed >= files.length) {
              return callback(undefined, _summarize(method, hashes));
            }
          });
        } else if (stats.isFile()) {
          fs.readFile(path, 'utf8', function (err, data) {
            if (err) return callback(err);

            var hash = crypto.createHash(method);
            hash.update(data);
            hashes[f] = hash.digest('hex');

            if (++hashed >= files.length) {
              return callback(undefined, _summarize(method, hashes));
            }
          });
        } else {
          console.error('Skipping hash of %s', f);
          if (++hashed > files.length) {
            return callback(undefined, _summarize(method, hashes));
          }
        }
      });
    });
  });
}
// added promise handling

export function makeHash(path: string): Promise<{ hash: string }> {
  return new Promise((resolve, reject) => {
    digest(path, 'md5', (err, hash) => {
      if (err) {
        return reject(err);
      }
      return resolve(hash);
    });
  });
}
