const path = require('path')

module.exports = {
  rootDir: process.cwd(),
  testEnvironment: 'jsdom',
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/app/"
  ],
  transform: {
    '^.+\\.js$': path.resolve(__dirname, 'jest.transform.js')
  }
}
