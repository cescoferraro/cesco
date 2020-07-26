import i18next from "i18next"
import en from "../locales/en/translations.json"
import pt from "../locales/pt/translations.json"

i18next.init({
  fallbackLng: "pt-BR",
  resources: { pt: { translations: pt }, en: { translations: en } },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: { escapeValue: false },
  react: { wait: true },
} as any)

i18next.languages = ["pt", "en"]

export default i18next
