module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['packages/**/*.{ts,js}'],
  coveragePathIgnorePatterns: ['jest.config.js', '/node_modules/', '/dist/'],
  moduleNameMapper: {
    '^@cc/(.*)$': '<rootDir>/packages/$1/',
  },
}
