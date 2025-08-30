import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import LanguageSwitcher from './components/LanguageSwitcher';

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
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-4xl mx-auto'>
          <header className='text-center mb-12'>
            <div className='flex justify-end mb-4'>
              <LanguageSwitcher />
            </div>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              {t('hero.title')}
            </h1>
            <p className='text-xl text-gray-600'>{t('hero.subtitle')}</p>
          </header>

          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
              {t('api.title')}
            </h2>

            {isLoading && (
              <div className='flex items-center justify-center py-8'>
                <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
                <p className='ml-3 text-gray-600'>{t('api.loading')}</p>
              </div>
            )}

            {error && (
              <div className='bg-red-50 border border-red-200 rounded-md p-4'>
                <p className='text-red-800'>
                  {t('api.error')} {error.message}
                </p>
              </div>
            )}

            {data && (
              <div className='bg-green-50 border border-green-200 rounded-md p-4'>
                <h3 className='font-semibold text-green-800 mb-2'>
                  {t('api.response')}
                </h3>
                <pre className='text-sm text-green-700 bg-green-100 p-3 rounded overflow-auto'>
                  {JSON.stringify(data, null, 2)}
                </pre>
              </div>
            )}
          </div>

          <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white rounded-lg shadow-md p-6 text-center'>
              <div className='text-3xl text-blue-600 mb-2'>⚛️</div>
              <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                {t('features.react.title')}
              </h3>
              <p className='text-gray-600'>{t('features.react.description')}</p>
            </div>

            <div className='bg-white rounded-lg shadow-md p-6 text-center'>
              <div className='text-3xl text-blue-600 mb-2'>🎨</div>
              <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                {t('features.tailwind.title')}
              </h3>
              <p className='text-gray-600'>
                {t('features.tailwind.description')}
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-md p-6 text-center'>
              <div className='text-3xl text-blue-600 mb-2'>🔄</div>
              <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                {t('features.query.title')}
              </h3>
              <p className='text-gray-600'>{t('features.query.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
