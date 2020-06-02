import {InjectionToken} from '@angular/core';

export interface ScullyLibConfig {
  useTransferState?: boolean;
  alwaysMonitor?: boolean;
  manualIdle?: boolean;
}

export const ScullyDefaultSettings: ScullyLibConfig = {
  useTransferState: true,
  alwaysMonitor: false,
  manualIdle: false,
};

export const SCULLY_LIB_CONFIG = new InjectionToken<ScullyLibConfig>('scullyLibConfig', {
  factory: () => ScullyDefaultSettings,
});
