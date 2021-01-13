// const nxPreset = require('@nrwl/jest/preset');
const jestPreset = require('../../../jest.preset');

module.exports = {
  ...jestPreset,
  roots: ['../../../tests/jest/src'],
  preset: '../../../jest.config.js',
  setupFilesAfterEnv: ['../../../tests/jest/src/setup-jest.ts'],
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../../coverage/libs/plugins/extra',
  displayName: 'plugins-extra',
};
