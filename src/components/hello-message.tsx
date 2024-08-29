'use client';

import { useTranslations } from 'next-intl';

import { useProfile } from '@/providers/ProfileContext';

import { TypographyP } from './ui/typography';

const HelloMessage = () => {
  const t = useTranslations('Dashboard');
  const { profile } = useProfile();

  return (
    <TypographyP>👋 {t('hello_message', { name: profile?.name })}</TypographyP>
  );
};

export { HelloMessage };
