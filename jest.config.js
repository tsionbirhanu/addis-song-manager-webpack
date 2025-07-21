module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  testMatch: ["<rootDir>/src/**/__tests__/**/*.(js|jsx)", "<rootDir>/src/**/?(*.)(test|spec).(js|jsx)"],
}
