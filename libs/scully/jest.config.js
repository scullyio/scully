module.exports = {
  name: 'scully',
  // preset: '../../jest.config.js',
  setupFilesAfterEnv: [],
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/libs/scully'
};
