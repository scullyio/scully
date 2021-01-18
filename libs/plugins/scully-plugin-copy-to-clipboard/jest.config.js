// const nxPreset = require('@nrwl/jest/preset');
const jestPreset = require('../../../jest.preset');

module.exports = {
  ...jestPreset,
  roots: ['../../../tests/jest/src'],
  preset: '../../../jest.config.js',
  setupFilesAfterEnv: ['../../../tests/jest/src/setup-jest.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../../coverage/libs/plugins/scully-plugin-copy-to-clipboard',
  displayName: 'plugins-scully-plugin-copy-to-clipboard',
};
