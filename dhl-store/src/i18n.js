import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import ptBR from './i18n/pt-br/pt-br.json';

const resources = {
    'pt-BR': ptBR
  }
  
  i18next.use(initReactI18next).init({
    resources,
    lng: navigator.language,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;