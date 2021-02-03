'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
exports.__esModule = true;
var fs_1 = require('fs');
var path_1 = require('path');
var dirsum_1 = require('tools/dirsum');
var readJson = function (path) {
  return JSON.parse(fs_1.readFileSync(path).toString());
};
var folder = process.cwd();
var workspace = readJson(path_1.join(folder, 'workspace.json'));
(function () {
  return __awaiter(void 0, void 0, void 0, function () {
    // console.table(data);
    function updateAndPublish(toRelease) {
      try {
        console.log('going to release ' + toRelease.name);
        var pkg = readJson(path_1.join(folder, toRelease.dist, 'package.json'));
      } catch (e) {
        console.error(e);
      }
    }
    var folders, pj, currentVersions, dataFileName, oldData_1, needRelease;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          folders = Object.entries(workspace.projects)
            .map(function (_a) {
              var name = _a[0],
                val = _a[1];
              return {
                name: name,
                root: val.root,
                dist: val.architect.build.options.outputPath,
              };
            })
            .map(function (row) {
              /** some projects in the workspace dont have an outfolder, add it here. */
              switch (row.name) {
                case 'ng-lib':
                  return __assign(__assign({}, row), { dist: 'dist/libs/ng-lib' });
                default:
                  return row;
              }
            });
          pj = folders.map(function (project) {
            return __awaiter(void 0, void 0, void 0, function () {
              var loc, _a, name_1, version, hash, e_1;
              return __generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    _b.trys.push([0, 3, , 4]);
                    loc = path_1.join(folder, './', project.dist, 'package.json');
                    (_a = readJson(loc)), (name_1 = _a.name), (version = _a.version);
                    if (!name_1.startsWith('@')) return [3 /*break*/, 2];
                    return [4 /*yield*/, dirsum_1.makeHash(path_1.join(folder, './', project.dist))];
                  case 1:
                    hash = _b.sent().hash;
                    // console.table(hash['files'])
                    return [2 /*return*/, __assign(__assign({}, project), { pkg: name_1, version: version, hash: hash })];
                  case 2:
                    return [3 /*break*/, 4];
                  case 3:
                    e_1 = _b.sent();
                    console.log('Project ' + project.name + ' has ' + e_1.toString());
                    return [2 /*return*/, undefined];
                  case 4:
                    return [2 /*return*/];
                }
              });
            });
          });
          return [4 /*yield*/, Promise.all(pj)];
        case 1:
          currentVersions = _a.sent().filter(function (row) {
            return !!row;
          });
          dataFileName = path_1.join(folder, 'releaseChecksums.json');
          try {
            oldData_1 = readJson(dataFileName);
            needRelease = currentVersions.reduce(function (needRelease, data) {
              var old = oldData_1.find(function (row) {
                return row && row.name === data.name;
              });
              if (old === undefined || old.hash !== data.hash) {
                return needRelease.concat(data);
              }
              return needRelease;
            }, []);
            needRelease.forEach(updateAndPublish);
          } catch (e) {
            console.error(e);
            // writeFileSync(dataFileName, JSON.stringify(currentVersions, undefined, 4));
          }
          return [2 /*return*/];
      }
    });
  });
})();
