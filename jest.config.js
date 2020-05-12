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
  preset: "jest-preset-angular",
  roots: [
    "tests/jest/src"
  ],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest"
  },
  setupFilesAfterEnv: [
    "./tests/jest/src/setup-jest.ts"
  ],
  moduleNameMapper: {
    "@app/(.*)": "<rootDir>/apps/sample-blog/src/app/$1",
    "@assets/(.*)": "<rootDir>/apps/sampleBlog/src/assets/$1",
    "@env": "<rootDir>/apps/sampleBlog/src/environments/environment",
    "@src/(.*)": "<rootDir>/apps/sampleBlog/src/$1",
    "@scullyio/ng-lib": "<rootDir>/dist/libs/ng-lib"
  },
  globals: {
    "ts-jest": {
      "tsConfig": "./tsconfig.spec.json",
      "stringifyContentPathRegex": "\\.html$",
      "astTransformers": [
        "jest-preset-angular/build/InlineFilesTransformer",
        "jest-preset-angular/build/StripStylesTransformer"
      ]
    }
  }
}
