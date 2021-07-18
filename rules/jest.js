module.exports = {
  'complexity': 'off', // Limit cyclomatic complexity
  'jest/consistent-test-it': [
    'error', {
      fn: 'test',
      withinDescribe: 'test',
    },
  ], // Have control over `test` and `it` usages
  'jest/expect-expect': ['error', { assertFunctionNames: ['expect', 'request.*.expect']}], // Enforce assertion to be made in a test body
  'jest/lowercase-name': ['error', { ignoreTopLevelDescribe: true }], // Enforce lowercase test names
  'jest/no-alias-methods': 'error', // Disallow alias methods
  'jest/no-commented-out-tests': 'error', // Disallow commented out tests
  'jest/no-conditional-expect': 'error', // Prevent calling `expect` conditionally
  'jest/no-deprecated-functions': 'error', // Disallow use of deprecated functions
  'jest/no-disabled-tests': 'warn', // Disallow disabled tests
  'jest/no-duplicate-hooks': 'error', // Disallow duplicate setup and teardown hooks
  'jest/no-export': 'error', // Disallow using `exports` in files containing tests
  'jest/no-focused-tests': 'warn', // Disallow focused tests
  'jest/no-identical-title': 'error', // Disallow identical titles
  'jest/no-if': 'error', // Disallow conditional logic
  'jest/no-interpolation-in-snapshots': 'error', // Disallow string interpolation inside snapshots
  'jest/no-jasmine-globals': 'error', // Disallow Jasmine globals
  'jest/no-jest-import': 'error', // Disallow importing Jest
  'jest/no-mocks-import': 'error', // Disallow manually importing from `__mocks__`
  'jest/no-standalone-expect': 'error', // Disallow using `expect` outside of `it` or `test` blocks
  'jest/no-test-prefixes': 'error', // Use `.only` and `.skip` over `f` and `x`
  'jest/no-test-return-statement': 'error', // Disallow explicitly returning from tests
  'jest/prefer-called-with': 'error', // Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`
  'jest/prefer-hooks-on-top': 'error', // Suggest having hooks before any test cases
  'jest/prefer-spy-on': 'error', // Suggest using `jest.spyOn()`
  'jest/prefer-to-be-null': 'error', // Suggest using `toBeNull()`
  'jest/prefer-to-be-undefined': 'error', // Suggest using `toBeUndefined()`
  'jest/prefer-to-contain': 'error', // Suggest using `toContain()`
  'jest/prefer-to-have-length': 'error', // Suggest using `toHaveLength()`
  'jest/prefer-todo': 'error', // Suggest using `test.todo`
  'jest/require-top-level-describe': 'error', // Require test cases and hooks to be inside a `describe` block
  'jest/valid-describe': 'error', // Enforce valid `describe()` callback
  'jest/valid-expect': 'error', // Enforce valid `expect()` usage
  'jest/valid-title': 'error', // nforce valid titles
  'max-classes-per-file': 'off', // Enforce a maximum number of classes per file
  'max-depth': ['error', 10], // Enforce a maximum depth that blocks can be nested
  'max-lines-per-function': 'off', // Enforce a maximum function length
  'max-nested-callbacks': 'off', // Enforce a maximum depth that callbacks can be nested
  'max-statements': 'off', // Enforce a maximum number of statements allowed in function blocks,
  'tsdoc/syntax': 'off', // Validates that TypeScript documentation comments conform to the TSDoc standard
}
