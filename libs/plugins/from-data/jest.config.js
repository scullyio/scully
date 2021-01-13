const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['../../../tests/jest/src/setup-jest.ts'],
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../../coverage/libs/plugins/from-data',
  displayName: 'plugins-from-data',
};
