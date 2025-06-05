'use client';

import useI18n from '@/lib/i18n';

export default function Home() {
  const t = useI18n();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">{t('homeTitle')}</h1>
      <p className="text-lg text-center">{t('homeDescription')}</p>
    </main>
  );
}
