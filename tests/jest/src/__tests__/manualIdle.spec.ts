import { replaceIndexNG, readPage } from '../test-config.helper';

describe('manualIdleDetection: test manual Idle detection', () => {
  const index: string = readPage('manualIdle');
  const cleanIndex = replaceIndexNG(index);

  it('Should have the text "__ManualIdle__"', () => {
    expect(cleanIndex.includes('__ManualIdle__')).toBe(true);
  });
});
