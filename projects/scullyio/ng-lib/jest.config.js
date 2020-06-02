module.exports = {
  name: 'ng-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ng-lib',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
