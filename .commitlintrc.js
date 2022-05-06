module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', ['sentence-case']],
    'scope-case': [2, 'always', ['lower-case', 'upper-case']],
    'body-max-line-length': [1, 'never'],
    'footer-max-line-length': [1, 'never'],
  },
};
