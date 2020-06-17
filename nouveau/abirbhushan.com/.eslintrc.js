module.exports = {
    root: true,
    extends: [
      'plugin:vue/vue3-recommended',
    ],
    rules: {
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/component-tags-order': ['error', {
        'order': ['template', 'script', 'style']
      }],
    },
    parserOptions: {
        parser: 'babel-eslint',
    }
  }