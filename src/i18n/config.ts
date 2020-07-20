import i18next from "i18next"

i18next.init({
  fallbackLng: "pt-BR",
  resources: {
    "pt-BR": {
      translations: require("../locales/translations.json").pt,
    },
    en: {
      translations: require("../locales/translations.json").en,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
})

i18next.languages = ["pt-BR", "en"]

export default i18next
