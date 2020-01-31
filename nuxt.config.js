
export default {
  mode: 'spa',
  router: {
    routes: [
      {
        name: 'index',
        path: '/',
        component: 'pages/index.vue'
      },
      {
        name: 'walletLayout',
        path: '/wallet',
        component: 'pages/wallet.vue'
      },
      {
        name: 'serviceLayout',
        path: '/service',
        component: 'pages/service.vue'
      },
      {
        name: 'meLayout',
        path: '/me',
        component: 'pages/me.vue'
      },
      
      {
        name: 'loginLayout',
        path: '/login',
        component: 'pages/login.vue'
      },
      {
        name: 'signupLayout',
        path: '/signup',
        component: 'pages/signup.vue'
      },
      {
        name: 'bet',
        path: '/bet',
        component: 'pages/bet.vue'
      },
      
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      // { src: 'https://unpkg.com/vue' },
      // { src: 'https://unpkg.com/vue-material' },
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.21.0/moment.min.js' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons' },
      // { rel: 'stylesheet', href: 'https://unpkg.com/vue-material/dist/vue-material.min.css' },
      // { rel: 'stylesheet', href: 'https://unpkg.com/vue-material/dist/theme/default.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/style.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
  js: [
    '~/assets/js/index.js',
  ],
  /*
  ** Plugins to load before mounting the App
  */
 axios: {

},

  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
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
    '@nuxtjs/axios',
    
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
