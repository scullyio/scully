'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
Object.defineProperty(exports, '__esModule', {value: true});
const schema_1 = require('@schematics/angular/application/schema');
const workspaceOptions = Object.freeze({
  name: 'workspace',
  newProjectRoot: '',
  version: '^9.0.0-rc.4', // TODO (?) synch with requiredAngularVersionRange value from ../ng-add/version-names.ts
});
const defaultAppOptions = Object.freeze({
  name: 'foo',
  // inlineStyle: false,
  // inlineTemplate: false,
  // routing: false,
  // style: Style.Css,
  // skipTests: false,
  // skipPackageJson: false
  projectRoot: '',
  routing: true,
});
function getStyle(key) {
  return Object.values(schema_1.Style).find(s => {
    return s === key;
  });
}
function setupProject(schematicRunner, options) {
  return __awaiter(this, void 0, void 0, function*() {
    if (typeof options === 'string') {
      options = {name: options};
    }
    options = options || {};
    if (options.styleFileFormat) {
      options.style = getStyle(options.styleFileFormat);
    }
    delete options.styleFileFormat;
    const appOptions = Object.assign(Object.assign({}, defaultAppOptions), options);
    let tree = yield schematicRunner
      .runSchematicAsync('workspace', Object.assign({}, workspaceOptions))
      .toPromise();
    tree = yield schematicRunner.runSchematicAsync('application', appOptions, tree).toPromise();
    return tree;
  });
}
exports.setupProject = setupProject;
//# sourceMappingURL=test-utils.js.map
