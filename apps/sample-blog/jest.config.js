module.exports = {
  name: 'sample-blog',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sample-blog',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
