const path = require("path");

module.exports = {
  rootDir: process.cwd(),
  testEnvironment: "node",
  transform: {
    "^.+\\.(t|j)s$": path.resolve(__dirname, "jest.transform.js"),
  },
};
