import { scullyConfig } from '@scullyio/scully';
import { config } from './config';

export function generateId() {
  return `${scullyConfig.projectName}_${config.environment}`;
}
