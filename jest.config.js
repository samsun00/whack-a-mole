module.exports = {
  testEnvironment: "jsdom",

  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],

  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
  },

  collectCoverageFrom: [
    "src/**/*.js",
    "!src/**/*.test.js",
    "!src/**/__tests__/**/*.js",
    "!src/index.js",
  ],
  verbose: true,
  testTimeout: 10000,
};
