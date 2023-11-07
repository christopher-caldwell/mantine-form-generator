const prettierrc = require('rc')('./prettier')

module.exports = {
  extends: ['next/core-web-vitals'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierrc],
    '@next/next/no-img-element': 'off',
  },
}
