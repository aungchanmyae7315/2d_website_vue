
export default {
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  loading: '~/components/loading.vue',
  mode: 'spa',

  generate: {
    routes: ['/', '/result', '/mm', '/mm/result']
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
      
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.min.js' },
      { src: 'https://unpkg.com/aos@next/dist/aos.js' },
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

},

  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/aos',
   
    {src: '@/plugins/i18n', ssr: false},
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
  ['nuxt-i18n',
      {
        locales: ['en', 'mm'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              greeting: 'Hello world!'
            },
            mm: {
              greeting: 'Lee bal'
            }
          }
        }
      }
    ]
],
// auth: {
//   strategies: {
//     local: {
//       endpoints: {
//         login: { url: '/', method: 'post', propertyName: 'access_token' },
//         logout: { url: '/', method: 'post' },
//         user: { url: '/', method: 'get', propertyName: false}
//       },
//     },
//   },
//   redirect: {
//     login: '/',
//     logout: '/',
//     home: '/'
// }
// },
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
