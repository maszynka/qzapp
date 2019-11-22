module.exports = {
  extends: 'airbnb',
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  plugins: [
    'react-hooks',
    'jest',
  ],
  globals: {
    debug: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx']}],
    // see discussion https://github.com/airbnb/javascript/issues/1365
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
  }
};
