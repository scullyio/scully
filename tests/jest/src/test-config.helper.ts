import { TestBed } from '@angular/core/testing';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

type CompilerOptions = Partial<{
  providers: any[];
  useJit: boolean;
  preserveWhitespaces: boolean;
}>;
export type ConfigureFn = (testBed: typeof TestBed) => void;

export const configureTests = (configure: ConfigureFn, compilerOptions: CompilerOptions = {}) => {
  const compilerConfig: CompilerOptions = {
    preserveWhitespaces: false,
    ...compilerOptions,
  };

  const configuredTestBed = TestBed.configureCompiler(compilerConfig);
  configure(configuredTestBed);

  return configuredTestBed.compileComponents().then(() => configuredTestBed);
};

export const replaceIndexNG = (index: string) => {
  return (
    index
      /** take out meta tag */
      .replace(/ content=[\"\']Scully(.*)[\"\']/g, '')
      /** take out scully version from body tag */
      .replace(/scully-version=[\"\'](.*)[\"\']/gi, '')
      /** take out ngContent and ngHost attributes */
      .replace(/\_ng(content|host)([\-A-Za-z0-9]*)/g, '')
      /** take out ng-version attribute */
      .replace(/ng\-version\=\".{5,30}\"/g, '')
      /** take out all script tags... DEBATABLE!!! */
      .replace(/<script[\d\D]*?>[\d\D]*?<\/script>/gi, '')
      /** take out sourcemaps */
      .replace(/\/\*# sourceMappingURL.*\*\//g, '')
  );
};

export const extractTransferState = (index: string) => {
  return separateTransferFromHtml(index)[1];
};

export const removeTransferState = (index: string) => {
  return separateTransferFromHtml(index)[0];
};

export const separateTransferFromHtml = (index) => {
  const SCULLY_STATE_START = `/** ___SCULLY_STATE_START___ */`;
  const SCULLY_STATE_END = `/** ___SCULLY_STATE_END___ */`;

  if (index.indexOf(SCULLY_STATE_START) === -1) {
    return [index, null];
  }

  // Remove transfer state
  const [start, remaining] = index.split(SCULLY_STATE_START);
  const [transferStateBlob, end] = remaining.split(SCULLY_STATE_END);
  const indexWithoutTransferState = start + end;
  const transferState = JSON.parse(transferStateBlob);

  return [indexWithoutTransferState, transferState];
};

export const cl = (something: string) => {
  console.log(something);
};

export function readPage(name: string, project = 'sample-blog'): string {
  const path = join(__dirname, `../../../dist/static/${project}/${name}/index.html`);
  if (!existsSync(path)) {
    throw new Error(`page "${name}" not found at location "${path}"`);
  }
  return readFileSync(path, 'utf-8').toString();
}
