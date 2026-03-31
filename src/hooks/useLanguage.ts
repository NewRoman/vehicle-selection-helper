import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;
  const isEnglish = currentLanguage === 'en';
  const isUkrainian = currentLanguage === 'uk';

  const changeLanguage = (language: 'en' | 'uk') => {
    i18n.changeLanguage(language);
  };

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? 'uk' : 'en';
    changeLanguage(newLanguage);
  };

  return {
    currentLanguage,
    isEnglish,
    isUkrainian,
    changeLanguage,
    toggleLanguage,
    t,
  };
};
