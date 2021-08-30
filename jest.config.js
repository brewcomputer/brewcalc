const path = require('path')

module.exports = {
  rootDir: process.cwd(),
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': path.resolve(__dirname, 'jest.transform.js'),
  },
}
