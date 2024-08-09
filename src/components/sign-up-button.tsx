'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from './ui/button';

const SignUpButton = () => {
  const t = useTranslations('Auth');

  return (
    <Button asChild>
      <Link href="/sign-up">{t('sign_up_link')}</Link>
    </Button>
  );
};

export { SignUpButton };
