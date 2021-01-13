// const nxPreset = require('@nrwl/jest/preset');
const jestPreset = require('../../jest.preset');

module.exports = {
  ...jestPreset,
  roots: ['../../tests/jest/src'],
  preset: '../../jest.config.js',
  setupFilesAfterEnv: ['../../tests/jest/src/setup-jest.ts'],
  coverageDirectory: '../../coverage/apps/scully-docs',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
  displayName: 'scully-docs',
};
