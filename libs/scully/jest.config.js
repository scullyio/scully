const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  // preset: '../../jest.config.js',
  setupFilesAfterEnv: ['../../tests/jest/src/setup-jest.ts'],
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/libs/scully',
  preset: 'jest-preset-angular',
  displayName: 'scully',
};
