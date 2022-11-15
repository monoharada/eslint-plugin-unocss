export default {
  plugins: ['unocss-astro'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'unocss-astro/classnames-order': 'warn',
    'unocss-astro/no-duplicated-classnames': 'warn',
    'unocss-astro/no-excessive-whitespaces': 'warn',
  },
};
