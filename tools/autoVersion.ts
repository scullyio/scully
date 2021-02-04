import { exec } from 'child_process';
import * as crypto from 'crypto';
import * as fs from 'fs';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const readJson = (path) => JSON.parse(readFileSync(path).toString());
const folder = process.cwd();
const workspace = readJson(join(folder, 'workspace.json'));

await (async () => {
  const folders = Object.entries(workspace.projects)
    .map(([name, val]: [string, any]) => ({
      name,
      root: val.root,
      dist: val.architect.build.options.outputPath,
    }))
    .map((row) => {
      /** some projects in the workspace dont have an outfolder, add it here. */
      switch (row.name) {
        case 'ng-lib':
          return { ...row, dist: 'dist/libs/ng-lib' };
        default:
          return row;
      }
    });

  const pj = folders.map(async (project) => {
    try {
      const locOrg = join(folder, './', project.root, 'package.json');
      const { name, version } = readJson(locOrg);
      // we are only going to handle publishable packages
      if (name.startsWith('@')) {
        await buildIt(project.name);
        const { hash } = await makeHash(join(folder, './', project.dist));
        return { ...project, pkg: name, version, hash };
      }
    } catch (e) {
      // the apps don't follow the flow, and will error out es expected
      // console.log(`Project ${project.name} has ${e.toString()}`);
      return undefined;
    }
  });

  const currentVersions = (await Promise.all(pj)).filter((row) => !!row);
  const dataFileName = join(folder, 'releaseChecksums.json');
  try {
    const oldData = readJson(dataFileName) as ReleaseData[];
    const needRelease = currentVersions.reduce((needRelease, data) => {
      const old = oldData.find((row) => row && row.name === data.name);
      if (old === undefined || old.hash !== data.hash) {
        return needRelease.concat(data);
      }
      return needRelease;
    }, [] as ReleaseData[]);
    await Promise.all(needRelease.map(updateAndPublish));
    currentVersions
      .map((v) => {
        const isPublished = needRelease.find((r) => r.name === v.name) !== undefined;
        return {
          packageName: v.pkg,
          isPublished,
          version: v.version,
        };
      })
      .forEach(({ packageName, isPublished, version }) => console.log((isPublished ? ' ⇒ ' : '   ') + packageName + '@' + version));

    // writeFileSync(dataFileName, JSON.stringify(currentVersions, undefined, 2));
  } catch (e) {
    console.error(e);
  }
  // console.table(data);

  async function updateAndPublish(toRelease: ReleaseData) {
    try {
      const pkgPath = join(folder, toRelease.dist, 'package.json');
      const original = (readFileSync(pkgPath) as unknown) as string;
      const pkg = JSON.parse(original);
      const tag = 'develop';
      const timeStamp = new Date().toTimeString().split(' ')[0].replace(/\:/g, '');

      pkg.version = `${toRelease.version}-BETA.${timeStamp}`;
      // write a temporary package with the has attached to the version to relase a 'nighly'
      writeFileSync(pkgPath, JSON.stringify(pkg, undefined, 2));
      // const res={ste:'',sto:''}
      const res = await new Promise((resolve, reject) =>
        exec(`npm publish --access-public --ignore-scripts --tag ${tag}`, { cwd: join(folder, toRelease.dist) }, (e, sto, ste) => {
          resolve({ e, sto, ste });
        })
      );
      // writeFileSync(pkgPath, original);
      const hasErrror = res['ste']?.includes('npm ERR! code');
      if (hasErrror) {
        console.log(res['ste']);
      } else {
        console.log(`released ${toRelease.name} with version ${pkg.version}`);
      }
      console.log(`---------------------------------------------------------------------\n`);
    } catch (e) {
      console.error(e);
    }
  }
})();

interface ReleaseData {
  name: string;
  root: string;
  dist: string;
  pkg: string;
  version: string;
  hash: string;
}

async function buildIt(pkg) {
  return new Promise((resolve) => {
    exec(`npm run nx -- build ${pkg}`, (e, sto, ste) => {
      // console.log('build',pkg,sto,ste,e)
      if (e !== null) {
        console.error(`Build failed for ${pkg}`, sto);
        process.exit(15);
      } else {
        console.log(`Builded ${pkg}`);
      }
      resolve({ e, sto, ste });
    });
  });
}

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
