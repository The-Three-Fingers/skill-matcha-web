'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from './ui/button';

const LogInButton = () => {
  const t = useTranslations('RootLayout');

  return (
    <Button asChild>
      <Link href="/login">{t('log_in_link')}</Link>
    </Button>
  );
};

export { LogInButton };
