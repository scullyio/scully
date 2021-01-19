import { getMyConfig, logWarn } from '@scullyio/scully';
import { LocalCacheConfig } from './local-cache.interface';
import { localCache } from './plugins-local-cache';

/** this is the "global" config for theVault, default values are set here */
export const config: Required<LocalCacheConfig> = {
  includeReferer: false,
  environment: 'dev',
  /** 12 hours. */
  defaultTTL: 12 * 60 * 60 * 1000,
  ttlExceptions: {},
};

/**
 * Update the global config, takes a config object as param
 * wil use above global, and merge in the pluginConfig and the param.
 * Param takes precedence
 * @param configUpdate
 */
export function updateConfig(configUpdate: LocalCacheConfig) {
  /** merge in user settings */
  const userConfig = {
    ...config,
    ...(getMyConfig(localCache) as LocalCacheConfig),
    ...configUpdate,
  };
  Object.entries(userConfig).forEach(([key, val]) => (config[key] = val));
}
