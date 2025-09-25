const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  collectCoverageFrom: [
    '**/*.{ts,js}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/*.spec.{ts,js}',
    '!**/*.test.{ts,js}',
    '!**/jest.config.{ts,js}',
    '!**/main.ts',
    '!**/environment*.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};