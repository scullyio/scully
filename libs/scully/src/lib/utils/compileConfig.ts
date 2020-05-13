import {
  pathExists,
  statSync,
  existsSync,
  readFileSync,
  writeFileSync
} from 'fs-extra';
import { join } from 'path';
import { configFileName, project } from './cli-options';
import { findAngularJsonPath } from './findAngularJsonPath';
import { ScullyConfig } from './interfacesandenums';
import { logError, logWarn, yellow } from './log';
import { readAngularJson } from './read-anguar-json';
import { checkFolderExists } from './validateConfig';
import {
  transpileModule,
  TranspileOutput,
  flattenDiagnosticMessageText
} from 'typescript';

const angularRoot = findAngularJsonPath();

console.log(process.cwd(), angularRoot);
const angularConfig = readAngularJson();
const defaFaultProjectName = angularConfig.defaultProject;

const createConfigName = (name = defaFaultProjectName) =>
  `scully.${name}.config.ts`;
const getJsName = (name: string) => name.replace('.ts', '.js');

export const compileConfig = async (): Promise<ScullyConfig> => {
  let path: string;
  try {
    path = join(angularRoot, createConfigName());
    if (configFileName) {
      path = join(angularRoot, configFileName);
    }
    if (project) {
      path = join(angularRoot, createConfigName(project));
    }
    if (!(await pathExists(path))) {
      /** no js config, nothing to do. */
      logWarn(`
---------
    Config file "${yellow(
      path
    )}" not found, only rendering routes without parameters
    The config file should have a name that is formated as:
       scully.${yellow('<projectName>')}.config.js
    where ${yellow(
      '<projectName>'
    )} is the name of the project as defined in the 'angular.json' file
    When you are in a mixed mono-repo you might need to use the --pjFirst flag.
---------
`);
      return ({
        projectName: project || defaFaultProjectName
      } as unknown) as ScullyConfig;
    }
    await compileTsIfNeeded(path);
    const { config } = await import(getJsName(path));
    return { projectName: project || defaFaultProjectName, ...config };
  } catch (e) {
    logError(`
---------
 We encountered an error executing the config file. "${yellow(path)}"
 Check the error below, and try again later
--------- `);
    console.error(e);
    process.exit(15);
  }
};

async function compileTsIfNeeded(path) {
  try {
    const tdLastModified = statSync(path).mtimeMs;
    const jsFile = getJsName(path);
    const jsStats = existsSync(jsFile) ? statSync(jsFile).mtimeMs : 0;
    if (tdLastModified > jsStats) {
      const source = readFileSync(path).toString('utf8');
      const js: TranspileOutput = transpileModule(source, {
        fileName: path,
        reportDiagnostics: true
      });
      if (js.diagnostics.length > 0) {
        logError(
          `----------------------------------------------------------------------------------------`
        );
        logError(
          `   Error${
            js.diagnostics.length === 1 ? '' : 's'
          } while typescript compiling "${yellow(path)}"`
        );
        js.diagnostics.forEach(diagnostic => {
          if (diagnostic.file) {
            // tslint:disable-next-line: no-non-null-assertion
            const {
              line,
              character
            } = diagnostic.file.getLineAndCharacterOfPosition(
              diagnostic.start!
            );
            const message = flattenDiagnosticMessageText(
              diagnostic.messageText,
              '\n'
            );
            logError(`    line (${line + 1},${character + 1}): ${message}`);
          } else {
            logError(
              flattenDiagnosticMessageText(diagnostic.messageText, '\n')
            );
          }
        });
        logError(
          '----------------------------------------------------------------------------------------'
        );
        process.exit(15);
      }
      writeFileSync(jsFile, js.outputText);
    }
  } catch (e) {
    console.log(e);
    process.exit(15);
  }
  // process.exit(0)
}
