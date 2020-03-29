const isProd = process.env.NODE_ENV === 'production'
const apiUrl = isProd ? 'https://clarific-api.herokuapp.com' : 'http://localhost:3000'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Design e desenvolvimento de produtos digitais',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/fav.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#8E54E9' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/custom.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vuelidate.js',
    '~/plugins/mask.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/gtm'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    https: true,
    proxy: true,
    progress: false
  },
  proxy: {
    '/api/': { target: apiUrl, pathRewrite: { '^/api/': '' } }
  },
  /*
  ** Google Tag Manager config
  */
  gtm: {
    id: 'GTM-5SKDTQ5',
    pageTracking: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
