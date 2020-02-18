
// export default function ({ app }) {
    
//     app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
        
//         app.store.commit('SET_LANG', newLocale)
//     }
// }

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)


export default function ({ app }) {
  
    app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
        
                app.store.commit('SET_LANG', newLocale)
            }
            // alert('helo')
    app.i18n.path = (link) => {
        if (app.i18n.locale === app.i18n.fallbackLocale) {
            return `/${link}`
        }

        return `/${app.i18n.locale}/${link}`
    }
}