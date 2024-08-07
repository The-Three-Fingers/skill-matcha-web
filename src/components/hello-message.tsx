'use client';

import { useTranslations } from 'next-intl';

import { useAuth } from '@/auth/AuthContext';

const HelloMessage = async () => {
  const t = useTranslations('Dashboard');

  const { user } = useAuth();

  return <p>👋 {t('hello_message', { name: user?.displayName })}</p>;
};

export { HelloMessage };
