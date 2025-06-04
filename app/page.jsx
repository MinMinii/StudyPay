'use client';

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">{t('home.title')}</h1>
      <p className="text-lg text-center">{t('home.subtitle')}</p>
    </main>
  );
}
