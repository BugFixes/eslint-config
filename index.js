const baseRules = require('./rules/base')
const jestRules = require('./rules/jest')
const jestTypescriptRules = require('./rules/jest-typescript')
const jestReactRules = require('./rules/jest-react')
const reactRules = require('./rules/react')
const typescriptRules = require('./rules/typescript')
const typescriptReactRules = require('./rules/typescript-react')
const reactStorybookRules = require('./rules/react-storybook')
const typescriptStorybookRules = require('./rules/typescript-storybook')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ['**/node_modules/**', '!.*.js'],
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: typescriptRules,
    }, {
      files: ['*.{jsx,tsx}'],
      plugins: [
        'react',
        'react-hooks',
        'react-redux',
        'jsx-a11y',
      ],
      rules: reactRules,
    }, {
      files: ['*.tsx'],
      globals: {
        JSX: 'readonly',
      },
      rules: typescriptReactRules,
    }, {
      env: { jest: true },
      files: ['*.{spec,test}.{js,ts,jsx,tsx}'],
      plugins: ['jest'],
      rules: jestRules,
    }, {
      files: ['*.{spec,test}.{ts,tsx}'],
      rules: jestTypescriptRules,
    }, {
      files: ['*.{spec,test}.{jsx,tsx}'],
      rules: jestReactRules,
    }, {
      files: ['*.stories.{jsx,tsx}'],
      rules: reactStorybookRules,
    }, {
      files: ['*.stories.{ts,tsx}'],
      rules: typescriptStorybookRules,
    },
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['tsdoc'],
  reportUnusedDisableDirectives: true,
  rules: baseRules,
  settings: {
    react: {
      version: 'detect',
    },
  },
}
