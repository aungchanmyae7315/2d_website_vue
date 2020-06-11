//plugins/i18n.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

export default ({ app, store }) => {
  // inject our i18n instance into the app root to be used in middleware
  // we assume a store/index.js file has been defined and the variable 'locale' defined on store, we'll go into this in detail in the next code snippet
  app.i18n = new VueI18n({ //construction a new VueI18n
    locale: store.state.locale,
    fallbackLocale: 'uni',//always displays Chinese if English translation is not available
    messages: {
      //'locales' directory contains all the translations in the form of json files
      'en': require('~/locales/en.json'), 
      'uni': require('~/locales/uni.json'),
      'zg': require('~/locales/zg.json'),
      'zh': require('~/locales/zh.json')
    }
  })
}

Vue.config.warnHandler = function(msg, vm, trace) {
  console.dir("+++ warnHandler");
  console.dir(trace);
  console.dir(msg);
  console.dir("++++++");
  console.dir(vm.$axios);
  console.dir(navigator.userAgent);
  //user id
  //url
}
Vue.config.errorHandler = (err, vm, info) => {
  // err: error trace
  // vm: component in which error occured
  // info: Vue specific error information such as lifecycle hooks, events etc.
  
  // TODO: Perform any custom logic or log to server
  console.dir("+++ errorHandler");
  console.dir(err);
};