module.exports = {
    root: true,
    extends: [
      'plugin:vue/vue3-recommended',
    ],
    rules: {
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
    },
    parserOptions: {
        parser: 'babel-eslint',
    }
  }