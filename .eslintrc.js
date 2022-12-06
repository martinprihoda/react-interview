const prettierConfig = require('./.prettierrc.js')

module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  "extends": [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "react",
    'react-hooks',
    'jest',
    'jest-dom',
    'import',
    'prettier',
    'testing-library',
  ],
  "rules": {
    // Strict mode
    strict: ['error', 'never'],
    // Code style
    'no-console': 'off',
    'no-alert': 'off',
    // require let or const instead of var
    'no-var': 'error',

    // React
    "react/react-in-jsx-scope": "off",
    'react/display-name': 0,
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-max-props-per-line': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-vars': 'error',
    'react/no-danger': 0,
    'react/no-set-state': 0,
    'react/no-access-state-in-setstate': 'error',
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'react/no-multi-comp': 0,
    'react/no-unknown-property': 'error',
    'react/prop-types': 0,
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'instance-variables',
          'static-methods',
          'setters',
          'getters',
          'lifecycle',
          'handlers',
          'accessors',
          'checkers',
          'initializers',
          'everything-else',
          'rendering'
        ],
        groups: {
          handlers: ['/^on.+$/', '/^handle.+$/', '/^.+Handler$/'],
          accessors: ['/^set.+$/', '/^get.+$/'],
          checkers: ['/^is.+$/', '/^has.+$/', '/^can.+$/', '/^should.+$/'],
          initializers: ['/^init.+$/'],
          rendering: ['/^render.+$/', 'render']
        }
      }
    ],
    'react/jsx-wrap-multilines': 'error',

    // React-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    "@typescript-eslint/explicit-module-boundary-types": "off",
    'prettier/prettier': ['error', prettierConfig]
  }
};