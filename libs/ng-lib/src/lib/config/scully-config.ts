import { InjectionToken } from '@angular/core';

export interface ScullyLibConfig {
  useTransferState?: boolean;
  alwaysMonitor?: boolean;
  manualIdle?: boolean;
  baseURIForScullyContent?: string;
}

export const ScullyDefaultSettings: Required<ScullyLibConfig> = {
  useTransferState: true,
  alwaysMonitor: false,
  manualIdle: false,
  baseURIForScullyContent: 'http://localhost:1668',
};

export const SCULLY_LIB_CONFIG = new InjectionToken<ScullyLibConfig>('scullyLibConfig', {
  factory: () => ScullyDefaultSettings,
});
