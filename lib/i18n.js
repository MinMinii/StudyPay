'use client';
import { useTranslation } from 'next-i18next';

export default function useI18n() {
  const { t } = useTranslation('common');
  return t;
}
