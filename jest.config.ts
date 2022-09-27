const { getJestProjects } = require('@nrwl/jest');
export default {
  projects: ['<rootDir>/tests/jest/src', ...getJestProjects()],
};
