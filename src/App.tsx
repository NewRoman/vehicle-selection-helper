import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeToggle from './components/ThemeToggle';

// Example API call using React Query and Axios
const fetchData = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/1',
  );
  return response.data;
};

function App() {
  const { t } = useTranslation(['home', 'common']);
  const { data, isLoading, error } = useQuery({
    queryKey: ['example'],
    queryFn: fetchData,
  });

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-4xl mx-auto'>
          <header className='text-center mb-12'>
            <div className='flex justify-end gap-3 mb-4'>
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
            <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300'>
              {t('hero.title')}
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300'>{t('hero.subtitle')}</p>
          </header>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-8 transition-colors duration-300'>
            <h2 className='text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors duration-300'>
              {t('api.title')}
            </h2>

            {isLoading && (
              <div className='flex items-center justify-center py-8'>
                <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400'></div>
                <p className='ml-3 text-gray-600 dark:text-gray-300 transition-colors duration-300'>{t('api.loading')}</p>
              </div>
            )}

            {error && (
              <div className='bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4 transition-colors duration-300'>
                <p className='text-red-800 dark:text-red-300 transition-colors duration-300'>
                  {t('api.error')} {error.message}
                </p>
              </div>
            )}

            {data && (
              <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4 transition-colors duration-300'>
                <h3 className='font-semibold text-green-800 dark:text-green-300 mb-2 transition-colors duration-300'>
                  {t('api.response')}
                </h3>
                <pre className='text-sm text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 p-3 rounded overflow-auto transition-colors duration-300'>
                  {JSON.stringify(data, null, 2)}
                </pre>
              </div>
            )}
          </div>

          <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/20 p-6 text-center transition-colors duration-300'>
              <div className='text-3xl text-blue-600 dark:text-blue-400 mb-2'>⚛️</div>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors duration-300'>
                {t('features.react.title')}
              </h3>
              <p className='text-gray-600 dark:text-gray-300 transition-colors duration-300'>{t('features.react.description')}</p>
            </div>

            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/20 p-6 text-center transition-colors duration-300'>
              <div className='text-3xl text-blue-600 dark:text-blue-400 mb-2'>🎨</div>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors duration-300'>
                {t('features.tailwind.title')}
              </h3>
              <p className='text-gray-600 dark:text-gray-300 transition-colors duration-300'>
                {t('features.tailwind.description')}
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/20 p-6 text-center transition-colors duration-300'>
              <div className='text-3xl text-blue-600 dark:text-blue-400 mb-2'>🔄</div>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors duration-300'>
                {t('features.query.title')}
              </h3>
              <p className='text-gray-600 dark:text-gray-300 transition-colors duration-300'>{t('features.query.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
