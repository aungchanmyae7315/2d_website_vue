export default {
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  loading: '~/components/loading.vue',
  mode: 'spa',
  router: {              // customize nuxt.js router (vue-router).
    middleware: 'i18n'   // middleware all pages of the application
  },
  generate: {
    routes: ['/', '/about', '/mm', '/mm/about']
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
      
      // { src: '' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.14/moment-timezone-with-data.min.js' },
      { src: 'https://unpkg.com/aos@next/dist/aos.js' },
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.21.0/moment.min.js' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' },
    ],
    link: [
       { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons' },
      // { rel: 'stylesheet', href: 'https://unpkg.com/vue-material/dist/vue-material.min.css' },
      { rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */


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
  credentials: false,
    //  baseURL: "https://api.2dboss.com/api/",
  baseURL: "https://api.2dboss.com/api/",

  proxyHeaders: false,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
},
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/aos',
    '~/plugins/i18n.js',
  
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
    vendor: ['vue-i18n'] ,
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}