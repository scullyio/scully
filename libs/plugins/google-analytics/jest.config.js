
const jestPreset = require('../../../jest.preset');

module.exports = {
  preset: '../../../jest.preset.js',
  setupFilesAfterEnv: ['../../../tests/jest/src/setup-jest.ts'],
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../../coverage/libs/plugins/google-analytics',
  displayName: 'plugins-google-analytics',
};
