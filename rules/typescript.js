module.exports = {
  '@typescript-eslint/adjacent-overload-signatures': 'error', // Require that member overloads be consecutive
  '@typescript-eslint/array-type': [
    'error', {
      default: 'array',
      readonly: 'array',
    },
  ], // Requires using either `T[]` or `Array<T>` for arrays
  '@typescript-eslint/await-thenable': 'error', // Disallows awaiting a value that is not a thenable
  '@typescript-eslint/ban-ts-comment': [
    'error', {
      'ts-check': 'allow-with-description',
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': 'allow-with-description',
      'ts-nocheck': 'allow-with-description',
    },
  ], // Bans `@ts-<directive>` comments from being used or requires descriptions after directive
  '@typescript-eslint/brace-style': ['error', '1tbs'], // Enforce consistent brace style for blocks
  '@typescript-eslint/comma-dangle': ['error', 'always-multiline'], // Require or disallow trailing commas
  '@typescript-eslint/comma-spacing': [
    'error', {
      after: true,
      before: false,
    },
  ], // Enforces spacing around commas
  '@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'], // Enforce or disallow the use of the record type
  '@typescript-eslint/consistent-type-assertions': [
    'error', {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'never',
    },
  ], // Enforces consistent usage of type assertions
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'], // Consistent with type definition either `interface` or `type`
  '@typescript-eslint/consistent-type-imports': [
    'error', {
      disallowTypeAnnotations: true,
      prefer: 'type-imports',
    },
  ], // Enforces consistent usage of type imports
  '@typescript-eslint/default-param-last': 'error', // Enforce default parameters to be last
  '@typescript-eslint/dot-notation': [
    'error', {
      allowKeywords: true,
      allowPrivateClassPropertyAccess: false,
      allowProtectedClassPropertyAccess: false,
    },
  ], // Enforce dot notation whenever possible
  '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }], // Require explicit return types on functions and class methods
  '@typescript-eslint/explicit-member-accessibility': [
    'error', {
      accessibility: 'explicit',
      overrides: {
        constructors: 'no-public',
        parameterProperties: 'off',
      },
    },
  ], // Require explicit accessibility modifiers on class properties and methods
  '@typescript-eslint/explicit-module-boundary-types': ['error', { allowHigherOrderFunctions: true }], // Require explicit return and argument types on exported functions' and classes' public class methods
  '@typescript-eslint/func-call-spacing': ['error', 'never'], // Require or disallow spacing between function identifiers and their invocations
  '@typescript-eslint/indent': ['error', 2], // Enforce consistent indentation
  '@typescript-eslint/keyword-spacing': [
    'error', {
      after: true,
      before: true,
    },
  ], // Enforce consistent spacing before and after keywords
  '@typescript-eslint/lines-between-class-members': [
    'error', 'always', { exceptAfterSingleLine: false },
  ], // Require or disallow an empty line between class members
  '@typescript-eslint/member-delimiter-style': [
    'error', {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    },
  ], // Require a specific member delimiter style for interfaces and type literals
  '@typescript-eslint/member-ordering': ['error'], // Require a consistent member declaration order
  '@typescript-eslint/method-signature-style': ['error', 'method'], // Enforces using a particular method signature syntax
  '@typescript-eslint/naming-convention': [
    'error', {
      format: ['camelCase'],
      leadingUnderscore: 'forbid',
      selector: 'default',
      trailingUnderscore: 'forbid',
    }, {
      format: ['PascalCase'],
      leadingUnderscore: 'forbid',
      selector: 'typeLike',
      trailingUnderscore: 'forbid',
    }, {
      format: ['camelCase', 'PascalCase'],
      leadingUnderscore: 'forbid',
      selector: 'function',
      trailingUnderscore: 'forbid',
    },
  ], // Enforces naming conventions for everything across a codebase
  '@typescript-eslint/no-array-constructor': 'error', // Disallow `Array` constructors
  '@typescript-eslint/no-base-to-string': 'error', // Requires that `.toString()` is only called on objects which provide useful information when stringified
  '@typescript-eslint/no-confusing-void-expression': 'error', // Requires expressions of type void to appear in statement position
  '@typescript-eslint/no-dupe-class-members': 'error', // Disallow duplicate name in class members
  '@typescript-eslint/no-duplicate-imports': 'error', // Disallow duplicate imports
  '@typescript-eslint/no-empty-function': 'error', // Disallow empty functions
  '@typescript-eslint/no-empty-interface': 'error', // Disallow the declaration of empty interfaces
  '@typescript-eslint/no-extra-non-null-assertion': 'error', // Disallow extra non-null assertion
  '@typescript-eslint/no-extra-parens': [
    'error', 'all', {
      enforceForArrowConditionals: true,
      ignoreJSX: 'multi-line',
    },
  ], // Disallow unnecessary parentheses
  '@typescript-eslint/no-extra-semi': 'error', // Disallow unnecessary semicolons
  '@typescript-eslint/no-extraneous-class': 'error', // Forbids the use of classes as namespaces
  '@typescript-eslint/no-floating-promises': 'error', // Requires Promise-like values to be handled appropriately
  '@typescript-eslint/no-for-in-array': 'error', // Disallow iterating over an array with a for-in loop
  '@typescript-eslint/no-implied-eval': 'error', // Disallow the use of `eval()`-like methods
  '@typescript-eslint/no-invalid-this': ['error', { capIsConstructor: true }], // Disallow `this` keywords outside of classes or class-like objects
  '@typescript-eslint/no-invalid-void-type': 'error', // Disallows usage of `void` type outside of generic or return types
  '@typescript-eslint/no-loop-func': 'error', // Disallow function declarations that contain unsafe references inside loop statements
  '@typescript-eslint/no-loss-of-precision': 'error', // Disallow literal numbers that lose precision
  '@typescript-eslint/no-misused-new': 'error', // Enforce valid definition of `new` and `constructor`
  '@typescript-eslint/no-misused-promises': 'error', // Avoid using promises in places not designed to handle them
  '@typescript-eslint/no-namespace': 'warn', // Disallow the use of custom TypeScript modules and namespaces
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error', // Disallows using a non-null assertion after an optional chain expression
  '@typescript-eslint/no-non-null-assertion': 'error', // Disallows non-null assertions using the `!` postfix operator
  '@typescript-eslint/no-parameter-properties': 'error', // Disallow the use of parameter properties in class constructors
  '@typescript-eslint/no-redeclare': 'error', // Disallow variable redeclaration
  '@typescript-eslint/no-require-imports': 'error', // Disallows invocation of `require()`
  '@typescript-eslint/no-shadow': 'error', // Disallow variable declarations from shadowing variables declared in the outer scope
  '@typescript-eslint/no-this-alias': 'error', // Disallow aliasing `this`
  '@typescript-eslint/no-throw-literal': 'error', // Disallow throwing literals as exceptions
  '@typescript-eslint/no-type-alias': [
    'error', {
      allowAliases: 'in-unions-and-intersections',
      allowCallbacks: 'always',
      allowConditionalTypes: 'always',
      allowConstructors: 'always',
      allowLiterals: 'always',
      allowMappedTypes: 'always',
      allowTupleTypes: 'always',
    },
  ], // Disallow the use of type aliases
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error', // Flags unnecessary equality comparisons against boolean literals
  '@typescript-eslint/no-unnecessary-condition': 'error', // Prevents conditionals where the type is always truthy or always falsy
  '@typescript-eslint/no-unnecessary-qualifier': 'error', // Warns when a namespace qualifier is unnecessary
  '@typescript-eslint/no-unnecessary-type-arguments': 'error', // Enforces that type arguments will not be used if not required
  '@typescript-eslint/no-unnecessary-type-assertion': 'error', // Warns if a type assertion does not change the type of an expression
  '@typescript-eslint/no-unnecessary-type-constraint': 'error', // Disallows unnecessary constraints on generic types
  '@typescript-eslint/no-unsafe-call': 'error', // Disallows calling an any type value
  '@typescript-eslint/no-unsafe-member-access': 'error', // Disallows member access on any typed variables
  '@typescript-eslint/no-unsafe-return': 'error', // Disallows returning any from a function
  '@typescript-eslint/no-unused-expressions': 'error', // Disallow unused expressions
  '@typescript-eslint/no-unused-vars': 'error', // Disallow unused variables
  '@typescript-eslint/no-use-before-define': 'error', // Disallow the use of variables before they are defined
  '@typescript-eslint/no-useless-constructor': 'error', // Disallow unnecessary constructor
  '@typescript-eslint/object-curly-spacing': [
    'error', 'always', { arraysInObjects: false },
  ], // Enforce consistent spacing inside braces
  '@typescript-eslint/prefer-as-const': 'error', // Prefer usage of `as const` over literal type
  '@typescript-eslint/prefer-enum-initializers': 'error', // Prefer initializing each enums member value
  '@typescript-eslint/prefer-function-type': 'error', // Use function types instead of interfaces with call signatures
  '@typescript-eslint/prefer-literal-enum-member': 'error', // Require that all enum members be literal values to prevent unintended enum member name shadow issues
  '@typescript-eslint/prefer-nullish-coalescing': 'error', // Enforce the usage of the nullish coalescing operator instead of logical chaining
  '@typescript-eslint/prefer-optional-chain': 'error', // Prefer using concise optional chain expressions instead of chained logical ands
  '@typescript-eslint/prefer-regexp-exec': 'error', // Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided
  '@typescript-eslint/prefer-string-starts-ends-with': 'error', // Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings
  '@typescript-eslint/prefer-ts-expect-error': 'error', // Recommends using `@ts-expect-error` over `@ts-ignore`
  '@typescript-eslint/promise-function-async': 'error', // Requires any function or method that returns a Promise to be marked async
  '@typescript-eslint/quotes': [
    'error', 'single', {
      allowTemplateLiterals: false,
      avoidEscape: true,
    },
  ], // Enforce the consistent use of either backticks, double, or single quotes
  '@typescript-eslint/require-array-sort-compare': 'error', // Requires `Array#sort` calls to always provide a compare function
  '@typescript-eslint/restrict-plus-operands': 'error', // When adding two variables, operands must both be of type number or of type string
  '@typescript-eslint/restrict-template-expressions': [
    'error', {
      allowAny: false,
      allowBoolean: false,
      allowNullish: false,
      allowNumber: true,
    },
  ], // Enforce template literal expressions to be of string type
  '@typescript-eslint/semi': ['error', 'never'], // Require or disallow semicolons instead of ASI
  '@typescript-eslint/space-before-function-paren': [
    'error', {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never',
    },
  ], // Require or disallow a space before function parenthesis
  '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }], // Require spacing around infix operators
  '@typescript-eslint/strict-boolean-expressions': 'error', // Restricts the types allowed in boolean expressions
  '@typescript-eslint/switch-exhaustiveness-check': 'warn', // Exhaustiveness checking in switch with union type
  '@typescript-eslint/triple-slash-reference': [
    'error', {
      lib: 'never',
      path: 'never',
      types: 'never',
    },
  ], // Sets preference level for triple slash directives versus ES6-style import declarations
  '@typescript-eslint/type-annotation-spacing': [
    'error', {
      after: true,
      before: false,
    },
  ], // Require consistent spacing around type annotations
  '@typescript-eslint/unified-signatures': 'error', // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
  'brace-style': 'off', // Enforce consistent brace style for blocks
  'camelcase': 'off', // Enforce camelcase naming convention
  'comma-dangle': 'off', // Require or disallow trailing commas
  'comma-spacing': [
    'error', {
      after: true,
      before: false,
    },
  ], // Enforces spacing around commas
  'default-param-last': 'off', // Enforce default parameters to be last
  'dot-notation': 'off', // Enforce dot notation whenever possible
  'func-call-spacing': 'off', // Require or disallow spacing between function identifiers and their invocations
  'indent': 'off', // Enforce consistent indentation
  'keyword-spacing': 'off', // Enforce consistent spacing before and after keywords
  'lines-between-class-members': 'off', // Require or disallow an empty line between class members'
  'no-array-constructor': 'off', // Disallow `Array` constructors
  'no-dupe-class-members': 'off', // Disallow duplicate name in class members
  'no-duplicate-imports': 'off', // Disallow duplicate imports
  'no-empty-function': 'off', // Disallow empty functions
  'no-extra-parens': 'off', // Disallow unnecessary parentheses
  'no-extra-semi': 'off', // Disallow unnecessary semicolons'
  'no-implied-eval': 'off', // Disallow the use of `eval()`-like methods
  'no-invalid-this': 'off', // Disallow `this` keywords outside of classes or class-like objects
  'no-loop-func': 'off', // Disallow function declarations that contain unsafe references inside loop statements
  'no-loss-of-precision': 'off', // Disallow literal numbers that lose precision
  'no-redeclare': 'off', // Disallow variable redeclaration
  'no-shadow': 'off', // Disallow variable declarations from shadowing variables declared in the outer scope
  'no-unused-expressions': 'off', // Disallow unused expressions
  'no-unused-vars': 'off', // Disallow unused variables
  'no-use-before-define': 'off', // Disallow the use of variables before they are defined
  'no-useless-constructor': 'off', // Disallow unnecessary constructor
  'object-curly-spacing': 'off', // Enforce consistent spacing inside braces
  'quotes': 'off', // Enforce the consistent use of either backticks, double, or single quotes
  'semi': 'off', // Require or disallow semicolons instead of ASI
  'space-before-function-paren': 'off', // Require or disallow a space before function parenthesis
  'space-infix-ops': 'off', // Require spacing around infix operators
}
