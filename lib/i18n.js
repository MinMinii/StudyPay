'use client';

import { useParams } from 'next/navigation';
import fa from '@/../public/locales/fa/common.json';
import en from '@/../public/locales/en/common.json';

const dictionaries = { fa, en };

export default function useI18n() {
  const { locale } = useParams();
  return (key) => dictionaries[locale]?.[key] || key;
}
