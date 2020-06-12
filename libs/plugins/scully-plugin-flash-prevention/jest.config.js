module.exports = {
  name: 'plugins-scully-plugin-flash-prevention',
  preset: '../../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory:
    '../../../coverage/libs/plugins/scully-plugin-flash-prevention',
};
