import {InjectionToken} from '@angular/core';

export interface ScullyLibConfig {
  useTranferState: boolean;
}

export const ScullyDefaultSettings: ScullyLibConfig = {
  useTranferState: false,
};

export const SCULLY_LIB_CONFIG = new InjectionToken<ScullyLibConfig>('scullyLibConfig', {
  factory: () => ScullyDefaultSettings,
});
