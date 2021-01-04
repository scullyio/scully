// module.exports = {
//   testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
//   transform: {
//     '^.+\\.(ts|js|html)$': 'ts-jest'
//   },
//   resolver: '@nrwl/jest/plugins/resolver',
//   moduleFileExtensions: ['ts', 'js', 'html'],
//   coverageReporters: ['html']
// };
module.exports = {
  preset: 'jest-preset-angular',
  roots: ['tests/jest/src'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  snapshotSerializers: ['jest-serializer-html'],
  setupFilesAfterEnv: ['./tests/jest/src/setup-jest.ts'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/apps/sample-blog/src/app/$1',
    '@assets/(.*)': '<rootDir>/apps/sample-blog/src/assets/$1',
    '@env': '<rootDir>/apps/sample-blog/src/environments/environment',
    '@src/(.*)': '<rootDir>/apps/sample-blog/src/$1',
    '@scullyio/ng-lib': '<rootDir>/dist/libs/ng-lib',
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: ['jest-preset-angular/build/InlineFilesTransformer', 'jest-preset-angular/build/StripStylesTransformer'],
    },
  },
};
