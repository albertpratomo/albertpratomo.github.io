export default {
    mode: 'spa',

    /*
     ** SPA routes fallback (https://nuxtjs.org/guide/routing/#spa-fallback)
     */
    generate: {
        fallback: true,
    },

    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {color: '#20c997'},

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],

    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        ['@nuxtjs/eslint-module', {fix: false, cache: true}],
        // Doc: https://github.com/nuxt-community/stylelint-module
        ['@nuxtjs/stylelint-module', {fix: true, lintDirtyModulesOnly: true}],
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        '@nuxtjs/prismic',
        '@nuxtjs/style-resources',
    ],

    /*
     ** Global CSS
     */
    css: [
        '@/assets/scss/main.scss',
    ],

    /*
     ** Autoload SCSS variables, functions, and mixins in all Vue components.
     ** See https://github.com/nuxt-community/style-resources-module
     */
    styleResources: {
        scss: [
            '@/assets/scss/_variables.scss',
            'node_modules/bootstrap/scss/_functions.scss',
            'node_modules/bootstrap/scss/_variables.scss',
            'node_modules/bootstrap/scss/_mixins.scss',
            '@/assets/scss/mixins/_index.scss',
        ],
    },

    /*
     ** BootstrapVue configuration
     */
    bootstrapVue: {
        bootstrapCSS: false,
        bootstrapVueCSS: false,
        componentPlugins: [
            'ButtonPlugin',
            'LayoutPlugin',
        ],
    },

    /*
     ** Prismic CMS configuration
     */
    prismic: {
        endpoint: 'https://albertpratomo.cdn.prismic.io/api/v2',
    },

    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
    },
};
