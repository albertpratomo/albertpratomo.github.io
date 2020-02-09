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
    plugins: ['prettier'],
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'plugin:vue/recommended',
        // The lines below disable rules that might conflict with Prettier.
        // https://github.com/prettier/eslint-config-prettier
        'plugin:prettier/recommended',
        'prettier/vue',
    ],
    rules: {
        'prettier/prettier': 'error',
    },
};
