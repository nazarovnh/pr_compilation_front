import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import ru from './translations/ru.json';

const resources = { ru };

i18n.use(initReactI18next).init({
  resources,
  ns: 't',
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

// How to use:
// import { useTranslation } from 'react-i18next';
// const Component = () => {
//   const { t } = useTranslation();
//   return <h1>{t('key-from-config)}</h1>
// }
