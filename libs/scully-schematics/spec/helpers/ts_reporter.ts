import { DisplayProcessor, SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';
import SuiteInfo = jasmine.SuiteInfo;
import mapping from 'source-map-support';

mapping.install();

const displayStacktrace = StacktraceOption.PRETTY;

class CustomProcessor extends DisplayProcessor {
  public displayJasmineStarted(info: SuiteInfo, log: string): string {
    return `TypeScript (${displayStacktrace} format) ${log}`;
  }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      displayStacktrace
    },
    customProcessors: [CustomProcessor]
  })
);
