module.exports = {
  'jsx-a11y/alt-text': 'error', // Enforce all elements that require alternative text have meaningful information to relay back to end user
  'jsx-a11y/anchor-has-content': 'error', // Enforce all anchors to contain accessible content
  'jsx-a11y/anchor-is-valid': 'error', // Enforce all anchors are valid, navigable elements
  'jsx-a11y/aria-activedescendant-has-tabindex': 'error', // Enforce elements with aria-activedescendant are tabbable
  'jsx-a11y/aria-props': 'error', // Enforce all `aria-*` props are valid
  'jsx-a11y/aria-proptypes': 'error', // Enforce ARIA state and property values are valid
  'jsx-a11y/aria-role': 'error', // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role
  'jsx-a11y/aria-unsupported-elements': 'error', // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes
  'jsx-a11y/autocomplete-valid': 'error', // Enforce that autocomplete attributes are used correctly
  'jsx-a11y/click-events-have-key-events': 'error', // Enforce a clickable non-interactive element has at least one keyboard event listener
  'jsx-a11y/heading-has-content': 'error', // Enforce heading (`h1`, `h2`, etc) elements contain accessible content
  'jsx-a11y/html-has-lang': 'warn', // Enforce `<html>` element has `lang` prop
  'jsx-a11y/iframe-has-title': 'warn', // Enforce `iframe` elements have a title attribute
  'jsx-a11y/img-redundant-alt': 'error', // Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo"
  'jsx-a11y/interactive-supports-focus': 'error', // Enforce that elements with interactive handlers like `onClick` must be focusable
  'jsx-a11y/label-has-associated-control': 'error', // Enforce that a `label` tag has a text label and an associated control
  'jsx-a11y/lang': 'error', // Enforce `lang` attribute has a valid value
  'jsx-a11y/media-has-caption': 'error', // Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions
  'jsx-a11y/mouse-events-have-key-events': 'error', // Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users
  'jsx-a11y/no-access-key': 'error', // Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screenreade
  'jsx-a11y/no-autofocus': 'error', // Enforce `autoFocus` prop is not used
  'jsx-a11y/no-distracting-elements': 'error', // Enforce distracting elements are not used
  'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error', // Interactive elements should not be assigned non-interactive roles
  'jsx-a11y/no-noninteractive-element-interactions': 'error', // Non-interactive elements should not be assigned mouse or keyboard event listeners
  'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error', // Non-interactive elements should not be assigned interactive roles
  'jsx-a11y/no-noninteractive-tabindex': 'error', // `tabIndex` should only be declared on interactive elements
  'jsx-a11y/no-onchange': 'warn', // Enforce usage of `onBlur` over `onChange` on `select` menus for accessibility
  'jsx-a11y/no-redundant-roles': 'error', // Enforce explicit role property is not the same as implicit/default role property on element
  'jsx-a11y/no-static-element-interactions': 'error', // Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute
  'jsx-a11y/role-has-required-aria-props': 'error', // Enforce that elements with ARIA roles must have all required attributes for that role
  'jsx-a11y/role-supports-aria-props': 'error', // Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that role
  'jsx-a11y/scope': 'error', // Enforce `scope` prop is only used on `<th>` elements
  'jsx-a11y/tabindex-no-positive': 'error', // Enforce `tabIndex` value is not greater than zero
  'react/button-has-type': 'error', // Prevent usage of `button` elements without an explicit `type` attribute
  'react/default-props-match-prop-types': 'error', // Enforce all defaultProps have a corresponding non-required PropType
  'react/display-name': 'error', // Prevent missing displayName in a React component definition
  'react/forbid-component-props': [
    'warn', {
      forbid: ['style'],
    },
  ], // Forbid certain props on Components
  'react/forbid-foreign-prop-types': 'error', // Forbid foreign propTypes
  'react/function-component-definition': [
    'error', {
      namedComponents: 'function-declaration',
      unnamedComponents: 'function-expression',
    },
  ], // Enforce a specific function type for function components
  'react/jsx-boolean-value': ['error', 'always'], // Enforce boolean attributes notation in JSX
  'react/jsx-child-element-spacing': 'warn', // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  'react/jsx-closing-bracket-location': ['error', 'line-aligned'], // Validate closing bracket location in JSX
  'react/jsx-curly-brace-presence': ['error', 'never'], // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
  'react/jsx-curly-newline': ['error', 'consistent'], // Enforce linebreaks in curly braces in JSX attributes and expressions
  'react/jsx-curly-spacing': ['error', { when: 'never' }], // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  'react/jsx-equals-spacing': ['error', 'never'], // Enforce or disallow spaces around equal signs in JSX attributes
  'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'], // Configure the position of the first property
  'react/jsx-fragments': ['error', 'element'], // Enforce shorthand or standard form for React fragments
  'react/jsx-handler-names': [
    'error', {
      eventHandlerPrefix: 'on',
      eventHandlerPropPrefix: 'on',
    },
  ], // Enforce event handler naming conventions in JSX
  'react/jsx-indent': [
    'error', 2, {
      checkAttributes: true,
      indentLogicalExpressions: true,
    },
  ], // Validate JSX indentation
  'react/jsx-indent-props': ['error', 2], // Validate props indentation in JSX
  'react/jsx-key': ['error', { checkFragmentShorthand: true }], // Detect missing `key` prop
  'react/jsx-max-depth': ['error', { max: 10 }], // Validate JSX maximum depth
  'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }], // Limit maximum of props on a single line in JSX
  'react/jsx-no-bind': 'error', // No `.bind()` or Arrow Functions in JSX Props
  'react/jsx-no-comment-textnodes': 'error', // Prevent comments from being inserted as text nodes
  'react/jsx-no-constructed-context-values': 'error', // Prevent react contexts from taking non-stable values
  'react/jsx-no-duplicate-props': 'error', // Prevent duplicate properties in JSX
  'react/jsx-no-script-url': 'error', // Prevent usage of `javascript:` URLs
  'react/jsx-no-target-blank': 'error', // Prevent usage of unsafe `target='_blank'`
  'react/jsx-no-undef': 'error', // Disallow undeclared variables in JSX
  'react/jsx-no-useless-fragment': 'error', // Disallow unnecessary fragments
  'react/jsx-pascal-case': 'error', // Enforce PascalCase for user-defined JSX components
  'react/jsx-props-no-multi-spaces': 'error', // Disallow multiple spaces between inline JSX props
  'react/jsx-props-no-spreading': 'error', // Disallow JSX props spreading
  'react/jsx-sort-props': ['error', { callbacksLast: true }], // Enforce props alphabetical sorting
  'react/jsx-tag-spacing': [
    'error', {
      afterOpening: 'never',
      beforeClosing: 'never',
      beforeSelfClosing: 'never',
      closingSlash: 'never',
    },
  ], // Validate whitespace in and around the JSX opening and closing brackets
  'react/jsx-uses-react': 'error', // Prevent React to be incorrectly marked as unused
  'react/jsx-uses-vars': 'error', // Prevent variables used in JSX to be incorrectly marked as unused
  'react/jsx-wrap-multilines': 'error', // Prevent missing parentheses around multiline JSX
  'react/no-access-state-in-setstate': 'error', // Prevent using `this.state` within a `this.setState`
  'react/no-array-index-key': 'error', // Prevent usage of Array index in keys
  'react/no-children-prop': 'error', // Prevent passing of children as props
  'react/no-danger': 'error', // Prevent usage of dangerous JSX properties
  'react/no-danger-with-children': 'error', // Prevent problem with children and `props.dangerouslySetInnerHTML`
  'react/no-deprecated': 'error', // Prevent usage of deprecated methods
  'react/no-did-mount-set-state': 'error', // Prevent usage of `setState` in `componentDidMount`
  'react/no-did-update-set-state': 'error', // Prevent usage of `setState` in `componentDidUpdate`
  'react/no-is-mounted': 'error', // Prevent usage of `isMounted`
  'react/no-multi-comp': 'error', // Prevent multiple component definition per file
  'react/no-redundant-should-component-update': 'error', // Prevent usage of `shouldComponentUpdate` when extending `React.PureComponent`
  'react/no-render-return-value': 'error', // Prevent usage of the return value of `ReactDOM.render`
  'react/no-string-refs': 'error', // Prevent using string references
  'react/no-this-in-sfc': 'error', // Prevent `this` from being used in stateless functional components
  'react/no-typos': 'error', // Prevents common typos
  'react/no-unescaped-entities': 'error', // Prevent invalid characters from appearing in markup
  'react/no-unknown-property': 'error', // Prevent usage of unknown DOM property
  'react/no-unsafe': 'error', // Prevent usage of unsafe lifecycle methods
  'react/no-unstable-nested-components': 'error', // Prevent creating unstable components inside components
  'react/no-unused-state': 'error', // Prevent definitions of unused state
  'react/no-will-update-set-state': 'error', // Prevent usage of `setState` in `componentWillUpdate`
  'react/prefer-es6-class': ['error', 'always'], // Enforce ES5 or ES6 class for React Components
  'react/prefer-stateless-function': 'error', // Enforce stateless React Components to be written as a pure function
  'react/prop-types': ['error', { skipUndeclared: false }], // Prevent missing props validation in a React component definition
  'react/react-in-jsx-scope': 'error', // Prevent missing React when using JSX
  'react/require-render-return': 'error', // Enforce ES5 or ES6 class for returning value in render function
  'react/self-closing-comp': 'error', // Prevent extra closing tags for components without children
  'react/sort-comp': [
    'error', {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
    },
  ], // Enforce component methods order
  'react/state-in-constructor': ['error', 'always'], // Enforce state initialization style
  'react/static-property-placement': ['error', 'static public field'], // Enforces where React component static properties should be positioned
  'react/style-prop-object': 'error', // Enforce style prop value being an object
  'react/void-dom-elements-no-children': 'error', // Prevent void DOM elements (e.g. `<img />`, `<br />`) from receiving children
  'react-hooks/exhaustive-deps': 'error', // Verifies the list of dependencies for hooks like `useEffect` and similar
  'react-hooks/rules-of-hooks': 'error', // Enforces the rules of hooks
  'react-redux/connect-prefer-named-arguments': 'error', // Enforces that all `connect` arguments have recommended names
  'react-redux/mapDispatchToProps-prefer-parameters-names': 'error', // Enforces that all `mapDispatchToProps` parameters have specific names
  'react-redux/mapDispatchToProps-prefer-shorthand': 'error', // Enforces that `mapDispatchToProps` uses a shorthand method to wrap actions in dispatch calls whenever possible
  'react-redux/mapDispatchToProps-returns-object': 'error', // Enforces that `mapDispatchToProps` returns an object
  'react-redux/mapStateToProps-no-store': 'error', // Enforces that `mapStateToProps` does not bind complete store to a component
  'react-redux/mapStateToProps-prefer-hoisted': 'error', // Flags generation of copies of same-by-value but different-by-reference props
  'react-redux/mapStateToProps-prefer-parameters-names': 'error', // Enforces that all `mapStateToProps` parameters have specific names
  'react-redux/mapStateToProps-prefer-selectors': 'error', // Enforces that all `mapStateToProps` properties use selector functions
  'react-redux/no-unused-prop-types': 'error', // Prevent definitions of unused propTypes
  'react-redux/useSelector-prefer-selectors': 'error', // Enforces that all `useSelector` hooks use named selector functions
}
