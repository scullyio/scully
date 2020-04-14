import {readFileSync} from 'fs';
import {join} from 'path';
import {replaceIndexNG} from '../test-config.helper';

describe('manualIdleDetection: test manual Idle detection', () => {
  const index: string = readFileSync(
    join(__dirname, '../../../../dist/static/manualIdle/index.html'),
    'UTF8'
  ).toString();
  const cleanIndex = replaceIndexNG(index);

  it('Should have the text "__ManualIdle__"', () => {
    expect(cleanIndex.includes('__ManualIdle__')).toBe(true);
  });
});
