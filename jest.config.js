const { getJestProjects } = require('@nrwl/jest');
module.exports = {
  projects: ['<rootDir>/tests/jest/src', ...getJestProjects()],
};
