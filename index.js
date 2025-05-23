import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      menu: "Menu",
      about: "About Us",
      contact: "Contact"
    }
  },
  ar: {
    translation: {
      menu: "القائمة",
      about: "من نحن",
      contact: "اتصل بنا"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
