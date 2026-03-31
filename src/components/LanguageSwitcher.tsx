import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation('common');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='flex items-center space-x-2'>
      <span className='text-sm text-gray-600 dark:text-gray-400'>
        {t('language.switchLanguage')}:
      </span>
      <div className='flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden'>
        <button
          onClick={() => changeLanguage('en')}
          className={`px-3 py-1 text-sm font-medium transition-colors ${
            i18n.language === 'en'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          {t('language.en')}
        </button>
        <button
          onClick={() => changeLanguage('uk')}
          className={`px-3 py-1 text-sm font-medium transition-colors ${
            i18n.language === 'uk'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          {t('language.uk')}
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
