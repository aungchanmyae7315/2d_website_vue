# 2d_website_vue

> My perfect Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

/* css zawgyi unicode conventer end */

@font-face {
  font-family: 'Zawgyi-One';
  /* src: {{asset('/fonts/Zawgyi-One_V3.1.ttf')}}, IE9 Compat Modes */
  src: url('https://mmwebfonts.comquas.com/fonts/?font=zawgyi')format(‘embedded-opentype’), IE6-IE8 url('https://mmwebfonts.comquas.com/fonts/?font=zawgyi') format(‘woff’), /* Modern Browsers */
  url('https://mmwebfonts.comquas.com/fonts/?font=zawgyi'), /* Safari, Android, iOS */
  url('https://mmwebfonts.comquas.com/fonts/?font=zawgyi') format(‘svg’);
  /* Legacy iOS */
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'Zawgyi-One'!important;
}

/* myanmar */

@font-face {
  font-family: 'Padauk';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''), local('Padauk-Regular'), url(https://fonts.gstatic.com/s/padauk/v6/RrQRboJg-id7OnbxckXh7Lk.woff2) format('woff2');
  unicode-range: U+1000-109F, U+200C-200D, U+25CC;
}

/* latin */

@font-face {
  font-family: 'Padauk';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''), local('Padauk-Regular'), url(https://fonts.gstatic.com/s/padauk/v6/RrQRboJg-id7OnbxbEXh.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body {
  font-family: 'Padauk'!important;
}
