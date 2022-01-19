import { scullyConfig } from '@scullyio/scully';
import { config } from './config.js';

export function generateId() {
  return `${scullyConfig.projectName}_${config.environment}`;
}
