exports.config = {
  bareProject: true,
  projectName: 'default',
  distFolder: './build',
  outDir: './static/',
  sourceRoot: './src',
  extraRoutes: ['/', '/users', '/users/:id', '/about'],
  routes: [],
};
