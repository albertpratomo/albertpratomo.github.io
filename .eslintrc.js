module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    ignorePatterns: ['!.eslintrc.js'], // Force to lint `.eslintrc.js`.
    extends: [
        '@nuxtjs', // Already extends eslint-plugin-vue/recommended.
        'plugin:nuxt/recommended',
    ],
    rules: {
        'array-bracket-spacing': ['error', 'never'],

        'comma-dangle': ['error', 'always-multiline'],

        'indent': ['error', 4, {'SwitchCase': 1}],

        'no-param-reassign': ['error'],

        'object-curly-spacing': ['error', 'never'],

        'semi': ['error', 'always'],

        'space-before-function-paren': ['error', 'never'],

        'vue/html-indent': ['error', 4],
    },
};
