const path = require("path");

module.exports = {
  rootDir: process.cwd(),
  roots: ["<rootDir>/tests"],
  testEnvironment: "node",
  transform: {
    "^.+\\.(t|j)s$": path.resolve(__dirname, "jest.transform.js"),
  },
};
