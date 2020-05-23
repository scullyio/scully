module.exports = {
  name: 'scully-docs',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/scully-docs',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
