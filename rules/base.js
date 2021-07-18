module.exports = {
  'array-bracket-newline': ['error', 'consistent'], // Enforce line breaks after opening and before closing array brackets
  'array-bracket-spacing': ['error', 'never'], // Disallow or enforce spaces inside of brackets
  'array-callback-return': [
    'error', {
      allowImplicit: false,
      checkForEach: false,
    },
  ], // Enforces return statements in callbacks of array's methods
  'array-element-newline': ['error', 'consistent'], // Enforce line breaks between array elements
  'arrow-parens': ['error', 'always'], // Require parens in arrow function arguments
  'arrow-spacing': [
    'error', {
      after: true,
      before: true,
    },
  ], // Require space before/after arrow function's arrow
  'block-scoped-var': 'error', // Enforce the use of variables within the scope they are defined
  'block-spacing': ['error', 'always'], // Disallow or enforce spaces inside of blocks after opening block and before closing block
  'brace-style': ['error', '1tbs'], // Enforce consistent brace style for blocks
  'camelcase': [
    'error', {
      ignoreDestructuring: true,
      ignoreGlobals: true,
      ignoreImports: true,
      properties: 'always',
    },
  ], // Enforce camelcase naming convention
  'comma-dangle': ['error', 'always-multiline'], // Require or disallow trailing commas
  'comma-spacing': [
    'error', {
      after: true,
      before: false,
    },
  ], // Enforces spacing around commas
  'comma-style': ['error', 'last'], // Enforce consistent comma style
  'complexity': ['warn', 20], // Enforce a maximum cyclomatic complexity allowed in a program
  'computed-property-spacing': ['error', 'never'], // Disallow or enforce spaces inside of computed properties
  'consistent-this': ['error', 'self'], // Enforce consistent naming when capturing the current execution context
  'constructor-super': 'error',
  'curly': [
    'error', 'multi-line', 'consistent',
  ], // Enforce consistent brace style for all control statements
  'default-case-last': 'error', // Enforce default clauses in switch statements to be last
  'default-param-last': 'error', // Enforce default parameters to be last
  'dot-location': ['error', 'property'], // Enforce newline before and after dot
  'dot-notation': ['error', { allowKeywords: false }], // Enforce dot notation whenever possible
  'eol-last': ['error', 'always'], // Require or disallow newline at the end of files
  'eqeqeq': 'error', // Require the use of `===` and `!==`
  'for-direction': 'error', // Enforce "for" loop update clause moving the counter in the right direction
  'func-call-spacing': ['error', 'never'], // Require or disallow spacing between function identifiers and their invocations
  'func-name-matching': 'error', // Require function names to match the name of the variable or property to which they are assigned
  'func-style': [
    'error', 'declaration', { allowArrowFunctions: true },
  ], // Enforce the consistent use of either `function` declarations or expressions
  'function-call-argument-newline': ['error', 'consistent'], // Enforce line breaks between arguments of a function call
  'function-paren-newline': ['error', 'multiline-arguments'], // Enforce consistent line breaks inside function parentheses
  'generator-star-spacing': [
    'error', {
      after: true,
      before: false,
    },
  ], // Enforce spacing around the * in generator functions
  'getter-return': 'error', // Enforce `return` statements in getters
  'grouped-accessor-pairs': 'error', // Require grouped accessor pairs in object literals and classes
  'guard-for-in': 'warn', // Require `for-in` loops to include an `if` statement
  'id-length': [
    'error', {
      max: 48,
      min: 1,
      properties: 'always',
    },
  ],
  'implicit-arrow-linebreak': ['error', 'beside'], // Enforce the location of arrow function bodies with implicit returns
  'indent': ['error', 2], // Enforce consistent indentation
  'jsx-quotes': ['error', 'prefer-single'], // Enforce the consistent use of either double or single quotes in JSX attributes
  'key-spacing': [
    'error', {
      afterColon: true,
      beforeColon: false,
      mode: 'strict',
    },
  ], // enforce consistent spacing between keys and values in object literal properties
  'keyword-spacing': [
    'error', {
      after: true,
      before: true,
    },
  ], // Enforce consistent spacing before and after keywords
  'linebreak-style': ['error', 'unix'], // Enforce consistent linebreak style
  'lines-around-comment': [
    'error', {
      afterBlockComment: false,
      afterLineComment: false,
      allowArrayEnd: false,
      allowArrayStart: true,
      allowBlockEnd: false,
      allowBlockStart: true,
      allowClassEnd: false,
      allowClassStart: true,
      allowObjectEnd: false,
      allowObjectStart: true,
      beforeBlockComment: true,
      beforeLineComment: true,
    },
  ], // Require empty lines around comments
  'lines-between-class-members': [
    'error', 'always', { exceptAfterSingleLine: false },
  ], // Require or disallow an empty line between class members
  'max-classes-per-file': ['error', 1], // Enforce a maximum number of classes per file
  'max-depth': ['error', 5], // Enforce a maximum depth that blocks can be nested
  'max-len': [
    'error', {
      code: 180,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      tabWidth: 2,
    },
  ], // Enforce a maximum line length
  'max-lines': [
    'warn', {
      max: 500,
      skipBlankLines: true,
      skipComments: true,
    },
  ], // Enforce a maximum file length
  'max-lines-per-function': [
    'warn', {
      IIFEs: true,
      max: 50,
      skipBlankLines: true,
      skipComments: true,
    },
  ],
  'max-nested-callbacks': ['error', { max: 3 }], // Enforce a maximum depth that callbacks can be nested
  'max-params': ['warn', 5], // Enforce a maximum number of parameters in function definitions
  'multiline-comment-style': ['error', 'starred-block'], // Enforce a particular style for multiline comments
  'new-cap': [
    'error', {
      capIsNew: true,
      newIsCap: true,
      properties: true,
    },
  ], // Require constructor names to begin with a capital letter
  'new-parens': ['error', 'always'], // Require parentheses when invoking a constructor with no arguments
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }], // Require a newline after each call in a method chain
  'no-alert': 'error', // Disallow the use of `alert`, `confirm`, and `prompt`
  'no-array-constructor': 'error', // Disallow `Array` constructors
  'no-async-promise-executor': 'error', // Disallow using an async function as a Promise executor
  'no-caller': 'error', // disallow the use of `arguments.caller` or `arguments.callee`
  'no-case-declarations': 'error', // Disallow lexical declarations in case clauses
  'no-class-assign': 'error', // Disallow modifying variables of class declarations
  'no-compare-neg-zero': 'error', // Disallow comparing against -0
  'no-cond-assign': ['error', 'except-parens'], // Disallow assignment operators in conditional expressions
  'no-console': 'warn', // Disallow the use of `console`
  'no-const-assign': 'error', // Disallow reassigning `const` variables
  'no-constant-condition': 'error', // Disallow constant expressions in conditions
  'no-constructor-return': 'error', // Disallow returning value from constructor
  'no-control-regex': 'error', // Disallow control characters in regular expressions
  'no-debugger': 'error', // Disallow the use of `debugger`
  'no-delete-var': 'error', // Disallow deleting variables
  'no-div-regex': 'error', // Disallow division operators explicitly at the beginning of regular expressions
  'no-dupe-args': 'error', // Disallow duplicate arguments in `function` definitions
  'no-dupe-class-members': 'error', // Disallow duplicate name in class members
  'no-dupe-else-if': 'error', // Disallow duplicate conditions in if-else-if chains
  'no-dupe-keys': 'error', // Disallow duplicate keys in object literals
  'no-duplicate-case': 'error', // Disallow duplicate case labels
  'no-duplicate-imports': 'error', // Disallow duplicate imports
  'no-else-return': 'error', // Disallow `else` blocks after `return` statements in `if` statements
  'no-empty': 'error', // Disallow empty block statements
  'no-empty-character-class': 'error', // Disallow empty character classes in regular expressions
  'no-empty-function': 'error', // Disallow empty functions
  'no-empty-pattern': 'error', // Disallow empty destructuring patterns
  'no-eval': 'error', // Disallow the use of `eval()`
  'no-ex-assign': 'error', // Disallow reassigning exceptions in `catch` clauses
  'no-extend-native': 'error', // Disallow extending native types
  'no-extra-bind': 'error', // Disallow unnecessary function binding
  'no-extra-label': 'error', // Disallow unnecessary labels
  'no-extra-parens': [
    'error', 'all', {
      enforceForArrowConditionals: true,
      ignoreJSX: 'multi-line',
      nestedBinaryExpressions: false,
    },
  ], // Disallow unnecessary parentheses
  'no-extra-semi': 'error', // Disallow unnecessary semicolons
  'no-fallthrough': 'error', // Disallow fallthrough of `case` statements
  'no-floating-decimal': 'error', // Disallow leading or trailing decimal points in numeric literals
  'no-func-assign': 'error', // Disallow reassigning `function` declarations
  'no-global-assign': 'error', // Disallow assignment to native objects or read-only global variables
  'no-implicit-coercion': 'warn', // Disallow the type conversion with shorter notations
  'no-implicit-globals': 'error', // Disallow declarations in the global scope
  'no-implied-eval': 'error', // Disallow the use of `eval()`-like methods
  'no-import-assign': 'error', // Disallow assigning to imported bindings
  'no-inner-declarations': ['error', 'functions'], // Disallow variable or `function` declarations in nested blocks
  'no-invalid-regexp': 'error', // Disallow invalid regular expression strings in `RegExp` constructors
  'no-invalid-this': ['error', { capIsConstructor: true }], // Disallow `this` keywords outside of classes or class-like objects
  'no-irregular-whitespace': ['error', { skipStrings: true }], // Disallow irregular whitespace
  'no-iterator': 'error', // Disallow the use of the `__iterator__` property
  'no-label-var': 'error', // Disallow labels that share a name with a variable
  'no-lone-blocks': 'error', // Disallow unnecessary nested blocks
  'no-lonely-if': 'error', // Disallow `if` statements as the only statement in `else` blocks
  'no-loop-func': 'error', // Disallow function declarations that contain unsafe references inside loop statements
  'no-loss-of-precision': 'error', // Disallow literal numbers that lose precision
  'no-misleading-character-class': 'error', // Disallow characters which are made with multiple code points in character class syntax
  'no-mixed-operators': ['error', { allowSamePrecedence: true }], // Disallow mixes of different operators
  'no-multi-assign': 'error', // Disallow use of chained assignment expressions
  'no-multi-spaces': [
    'error', {
      exceptions: {
        BinaryExpression: false,
        ImportDeclaration: false,
        Property: false,
      },
      ignoreEOLComments: false,
    },
  ], // Disallow multiple spaces
  'no-multi-str': 'error', // Disallow multiline strings
  'no-multiple-empty-lines': [
    'error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 1,
    },
  ], // Disallow multiple empty lines
  'no-nested-ternary': 'error', // Disallow nested ternary expressions
  'no-new': 'warn', // Disallow `new` operators outside of assignments or comparisons
  'no-new-object': 'error', // Disallow `Object` constructors
  'no-new-symbol': 'error', // Disallow `new` operators with the `Symbol` object
  'no-new-wrappers': 'error', // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
  'no-nonoctal-decimal-escape': 'error', // Disallow `\8` and `\9` escape sequences in string literals
  'no-obj-calls': 'error', // Disallow calling global object properties as functions
  'no-octal': 'error', // Disallow octal literals
  'no-octal-escape': 'error', // Disallow octal escape sequences in string literals
  'no-param-reassign': 'error', // Disallow reassigning `function` parameters
  'no-promise-executor-return': 'error', // Disallow returning values from Promise executor functions
  'no-proto': 'error', // Disallow the use of the `__proto__` property
  'no-redeclare': 'error', // Disallow variable redeclaration
  'no-regex-spaces': 'error', // Disallow multiple spaces in regular expressions
  'no-return-assign': 'error', // Disallow assignment operators in `return` statements
  'no-return-await': 'error', // Disallow unnecessary `return await`
  'no-script-url': 'error', // Disallow `javascript:` URLs
  'no-self-assign': 'error', // Disallow assignments where both sides are exactly the same
  'no-self-compare': 'error', // Disallow comparisons where both sides are exactly the same
  'no-sequences': 'error', // Disallow comma operators
  'no-setter-return': 'error', // Disallow returning values from setters
  'no-shadow': 'error', // Disallow variable declarations from shadowing variables declared in the outer scope
  'no-shadow-restricted-names': 'error', // Disallow identifiers from shadowing restricted names
  'no-sparse-arrays': 'error', // Disallow sparse arrays
  'no-tabs': 'error', // Disallow all tabs
  'no-template-curly-in-string': 'error', // Disallow template literal placeholder syntax in regular strings
  'no-this-before-super': 'error', // Disallow `this`/`super` before calling `super()` in constructors
  'no-throw-literal': 'error', // Restrict what can be thrown as an exception
  'no-trailing-spaces': 'error', // Disallow trailing whitespace at the end of lines
  'no-undef': 'error', // Disallow the use of undeclared variables unless mentioned in `/*global */` comments
  'no-undef-init': 'error', // Disallow initializing variables to `undefined`
  'no-underscore-dangle': [
    'error', {
      allowAfterSuper: false,
      allowAfterThis: false,
      allowAfterThisConstructor: false,
      allowFunctionParams: false,
      enforceInMethodNames: true,
    },
  ], // Disallow dangling underscores in identifiers
  'no-unexpected-multiline': 'error', // Disallow confusing multiline expressions
  'no-unmodified-loop-condition': 'error', // Disallow unmodified conditions of loops
  'no-unneeded-ternary': 'error', // Disallow ternary operators when simpler alternatives exist
  'no-unreachable': 'error', // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
  'no-unreachable-loop': 'error', // Disallow loops with a body that allows only one iteration
  'no-unsafe-finally': 'error', // Disallow control flow statements in finally blocks
  'no-unsafe-negation': 'error', // Disallow negating the left operand of relational operators
  'no-unsafe-optional-chaining': 'error', // Disallow use of optional chaining in contexts where the `undefined` value is not allowed
  'no-unused-expressions': 'error', // Disallow unused expressions
  'no-unused-labels': 'error', // Disallow unused labels
  'no-unused-vars': 'error', // Disallow unused variables
  'no-use-before-define': 'error', // Disallow the use of variables before they are defined
  'no-useless-backreference': 'error', // Disallow useless backreferences in regular expressions
  'no-useless-call': 'error', // Disallow unnecessary calls to `.call()` and `.apply()`
  'no-useless-catch': 'error', // Disallow unnecessary catch clauses
  'no-useless-computed-key': 'error', // Disallow unnecessary computed property keys in objects and classes
  'no-useless-concat': 'error', // Disallow unnecessary concatenation of strings
  'no-useless-constructor': 'error', // Disallow unnecessary constructor
  'no-useless-escape': 'error', // Disallow unnecessary escape usage
  'no-useless-rename': 'error', // Disallow renaming import, export, and destructured assignments to the same name
  'no-useless-return': 'error', // Disallow redundant return statements
  'no-var': 'error', // Require `let` or `const` instead of `var`
  'no-void': 'error', // Disallow use of the void operator
  'no-warning-comments': 'warn', // Disallow specified warning terms in comments
  'no-whitespace-before-property': 'error', // Disallow whitespace before properties
  'no-with': 'error', // Disallow `with` statements
  'nonblock-statement-body-position': ['error', 'beside'], // Enforce the location of single-line statements
  'object-curly-newline': [
    'error', {
      consistent: true,
      minProperties: 5,
      multiline: true,
    },
  ], // Enforce consistent line breaks inside braces
  'object-curly-spacing': [
    'error', 'always', { arraysInObjects: false },
  ], // Enforce consistent spacing inside braces
  'object-shorthand': ['error', 'consistent-as-needed'], // Require or disallow method and property shorthand syntax for object literals
  'one-var': ['error', 'never'], // Enforce variables to be declared either together or separately in functions
  'operator-assignment': 'error', // Require or disallow assignment operator shorthand where possible
  'operator-linebreak': ['error', 'before'], // Enforce consistent linebreak style for operators
  'padded-blocks': ['error', 'never'], // Require or disallow padding within blocks
  'prefer-const': 'error', // Require `const` declarations for variables that are never reassigned after declared
  'prefer-exponentiation-operator': 'error', // Disallow the use of `Math.pow` in favor of the `**` operator
  'prefer-object-spread': 'error', // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
  'prefer-promise-reject-errors': 'error', // Require using Error objects as Promise rejection reasons
  'prefer-regex-literals': 'error', // Disallow use of the `RegExp` constructor in favor of regular expression literals
  'prefer-rest-params': 'error', // Require rest parameters instead of `arguments`
  'prefer-spread': 'error', // Require spread operators instead of `.apply()`
  'prefer-template': 'error', // Require using template literals instead of string concatenation
  'quote-props': ['error', 'consistent-as-needed'], // Require quotes around object literal property names
  'quotes': [
    'error', 'single', {
      allowTemplateLiterals: false,
      avoidEscape: true,
    },
  ], // Enforce the consistent use of either backticks, double, or single quotes
  'radix': ['error', 'always'], // Enforce the consistent use of the radix argument when using `parseInt()`
  'require-atomic-updates': 'error', // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
  'require-yield': 'error', // Require generator functions to contain `yield`
  'rest-spread-spacing': ['error', 'never'], // Enforce spacing between rest and spread operators and their expressions
  'semi': ['error', 'never'], // Require or disallow semicolons instead of ASI
  'semi-spacing': [
    'error', {
      after: true,
      before: false,
    },
  ], // Enforce spacing before and after semicolons
  'sort-imports': [
    'error', {
      allowSeparatedGroups: false,
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
    },
  ], // Enforce sorted import declarations within modules
  'sort-keys': [
    'error', 'asc', {
      caseSensitive: true,
      natural: true,
    },
  ], // Require object keys to be sorted
  'space-before-blocks': ['error', 'always'], // Enforce consistent spacing before blocks
  'space-before-function-paren': [
    'error', {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never',
    },
  ], // Require or disallow a space before function parenthesis
  'space-in-parens': ['error', 'never'], // Disallow or enforce spaces inside of parentheses
  'space-infix-ops': ['error', { int32Hint: false }], // Require spacing around infix operators
  'space-unary-ops': [
    'error',
    {
      nonwords: false,
      words: true,
    },
  ], // Require or disallow spaces before/after unary operators
  'spaced-comment': [
    'error', 'always', { block: { balanced: true } },
  ], // Requires or disallows a whitespace (space or tab) beginning a comment
  'switch-colon-spacing': [
    'error', {
      after: true,
      before: false,
    },
  ], // Enforce spacing around colons of switch statements
  'symbol-description': 'error', // Require symbol descriptions
  'template-curly-spacing': ['error', 'never'], // Require or disallow spacing around embedded expressions of template strings
  'template-tag-spacing': ['error', 'never'], // Require or disallow spacing between template tags and their literals
  'tsdoc/syntax': 'warn', // Validates that TypeScript documentation comments conform to the TSDoc standard
  'use-isnan': 'error', // Require calls to `isNaN()` when checking for `NaN`
  'valid-typeof': 'error', // Enforce comparing `typeof` expressions against valid strings
  'wrap-iife': ['error', 'inside'], // Require parentheses around immediate `function` invocations
  'wrap-regex': 'error', // Require parenthesis around regex literals
  'yield-star-spacing': [
    'error', {
      after: true,
      before: false,
    },
  ], // Require or disallow spacing around the `*` in `yield*` expressions
  'yoda': [
    'error', 'never', { exceptRange: true },
  ], // Require or disallow "Yoda" conditions
}
