import {InjectionToken} from '@angular/core';

export interface ScullyLibConfig {
  useTranferState: boolean;
  alwaysMonitor: boolean;
}

export const ScullyDefaultSettings: ScullyLibConfig = {
  useTranferState: true,
  alwaysMonitor: false,
};

export const SCULLY_LIB_CONFIG = new InjectionToken<ScullyLibConfig>('scullyLibConfig', {
  factory: () => ScullyDefaultSettings,
});
