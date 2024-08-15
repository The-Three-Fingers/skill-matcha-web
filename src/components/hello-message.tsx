'use client';

import { useTranslations } from 'next-intl';

import { useAuth } from '@/auth/AuthContext';

import { TypographyP } from './ui/typography';

const HelloMessage = () => {
  const t = useTranslations('Dashboard');

  const { user } = useAuth();

  return (
    <TypographyP>
      👋 {t('hello_message', { name: user?.displayName })}
    </TypographyP>
  );
};

export { HelloMessage };
