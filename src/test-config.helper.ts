import {TestBed} from '@angular/core/testing';

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
  return index
    .replace(/\_ng(content|host)(\-[A-Za-z0-9]{3}){2}/g, '')
    .replace(/ng\-version\=\".{5,30}\"/g, '');
};
