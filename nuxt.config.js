
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
  ** Server Middlewares
  */
  serverMiddleware: [
    '~/api/_contact'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
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
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-5SKDTQ5' }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    https: true,
    host: process.env.NODE_ENV === 'production' ? 'clarific.com.br' : 'localhost',
    port: process.env.PORT,
    progress: false
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
