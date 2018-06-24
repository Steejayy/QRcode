module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/attribute-hyphenation': [
      'error',
      'always'
    ],
    'vue/require-prop-types': 'error',
    'generator-star-spacing': 'off',
    'arrow-parens': 0,
    semi: [
      0,
      'never'
    ],
    'space-before-function-paren': [
      0
    ],
    'one-var': [
      0
    ],
    'object-property-newline': [
      0
    ],
    'no-trailing-spaces': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/html-indent': [
      'error',
      2
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
