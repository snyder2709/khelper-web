module.exports = {
  root: true,
  // https://eslint.org/docs/rules/no-undef#nodejs
  env: {
    node: true,
    // https://eslint.vuejs.org/user-guide/#compiler-macros-such-as-defineprops-and-defineemits-generate-no-undef-warnings
    'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  // https://github.com/vuejs/vue-eslint-parser#parseroptionsparser
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint', 'jest',"vue"],
 
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:jest/recommended',
    'prettier',
    'rules: "vue/component-name-in-template-casing": ["error", "kebab-case"]  "vue/no-v-model-argument": "off"'
  ],
  
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}