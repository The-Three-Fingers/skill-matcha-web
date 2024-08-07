'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Button } from './ui/button';

const LogInButton = () => {
  const router = useRouter();
  const t = useTranslations('RootLayout');

  const handleClick = () => {
    router.push('/login');
    router.refresh();
  };

  return (
    <Button variant="outline" onClick={handleClick}>
      {t('log_in_link')}
    </Button>
  );
};

export { LogInButton };
