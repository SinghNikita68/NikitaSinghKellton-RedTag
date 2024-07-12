import { I18nManager } from "react-native";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    LocaleStrings: require("./resources/en.json"),
  },
  ar: {
    LocaleStrings: require("./resources/ar.json")
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  fallbackLng: "en",
  resources,
  lng: I18nManager.isRTL ? "ar" : "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
