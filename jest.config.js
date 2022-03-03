const { getJestProjects } = require('@nrwl/jest');
console.error(JSON.stringify(getJestProjects(), null, 2));
module.exports = {
  projects: ['<rootDir>/tests/jest/src', ...getJestProjects()],
};
