export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest'],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|react-markdown|vfile|.*\\.es\\.js$))',
  ],
  globals: {
    window: {},
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  extensionsToTreatAsEsm: ['.jsx'],
  moduleFileExtensions: ['js', 'jsx'],

  // Adicionando a configuração de coverage
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/styles/*.{js,jsx,ts,tsx}',
    '!<rootDir>/**/stories.{js,jsx,ts,tsx}',
    '!<rootDir>/src/templates/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
  ],
};
