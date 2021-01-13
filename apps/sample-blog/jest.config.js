const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  preset: '../../jest.config.js',
  setupFilesAfterEnv: ['../../tests/jest/src/setup-jest.ts'],
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/apps/sample-blog',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
  displayName: 'sample-blog',
};
