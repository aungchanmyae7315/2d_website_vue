export default function ({ app }) {
    app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
         app.store.commit('SET_LANG', newLocale)
    }


app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}

