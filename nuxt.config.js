export default {

    server: {
        port: 8000, // default: 3000
        host: '0.0.0.0' // default: localhost
    },

    //loading: '~/components/loading.vue',
    mode: 'spa',
    router: { // customize nuxt.js router (vue-router).
        middleware: 'i18n' // middleware all pages of the application
    },
    generate: {
        fallback: true,
        interval: 100
    },

    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
            { name: 'apple-mobile-web-app-title', content: "Sein Lucky" },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        script: [

            // { src: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js' },
            // { src: 'https://unpkg.com/vue-image-upload-resize' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.js',defer:true },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.14/moment-timezone-with-data.min.js',defer:true },
            { src: 'https://unpkg.com/aos@next/dist/aos.js',defer: true},
            // { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',defer:true },
            // { src: 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js',defer:true },
            // { src: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.21.0/moment.min.js' },
            // { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',defer:true },
        ],
        link: [
            // { rel: 'icon', type: 'image/x-icon', href: `${dir}/favicon.ico` },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',defer:true },
            { rel: 'apple-touch-icon', href: '/apple-touch-icon.png',defer:true },
            { rel: 'stylesheet', href: 'https://mmwebfonts.comquas.com/fonts/?font=zawgyi' ,defer:true},
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Padauk&display=swap',defer:true },
            { rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css',defer:true },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',defer:true },
            // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css' },
            { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',defer:true },
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
        // '~/assets/css/hello.css',
        'element-ui/lib/theme-chalk/index.css'
    ],
    download: [
        '~/assets/download/SeinLucky.apk',

    ],
    js: [
        '~/assets/js/index.js',
    ],
    /*
     ** Plugins to load before mounting the App
     */
    axios: {
        credentials: false,
        //debug:true,
       baseURL: "https://api.2dboss.com/api/",
       // baseURL: "https://build.seinchanthar.com/api/",
        proxy: false,
        proxyHeaders: false,
        headers: {
            'Content-Type': 'application/json',
            //'Content-Type': 'application/x-www-form-urlencoded',
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
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // '@nuxtjs/onesignal',

        '@nuxtjs/axios',
        // '@nuxtjs/proxy'
    ],
    // proxy: {
    //   '/v2': {
    //     target: 'https://api.2dboss.com/api/',
    //     // pathRewrite: {
    //     //   '^/api' : '/'
    //     //   }
    //     },
    //   '/v1': {
    //     target: 'https://luke.2dboss.com/api/',
    //   },
    //   '/luke': {
    //     target: 'https://luke.2dboss.com/api/',
    //   },
    //   '/web-app-version': {
    //     target: 'https://version.seinlucky123.com',
    //   },
    // },

    //
    // oneSignal: {
    //   init: {
    //     appId: '01498d20-af81-4787-a6b4-c9c1f054aeee',
    //     allowLocalhostAsSecureOrigin: true,
    //     welcomeNotification: {
    //         disable: true
    //     }
    //   }
    // },
    /*
     ** Build configuration
     */
    build: {
        vendor: ['vue-i18n'],
        transpile: [/^element-ui/],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}