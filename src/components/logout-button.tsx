'use client';

import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useLoadingCallback } from 'react-loading-hook';

import { logout } from '@/api';
import { getFirebaseAuth } from '@/auth/firebase';
import { Button } from '@/components/ui/button';

const LogOutButton = () => {
  const router = useRouter();
  const t = useTranslations('Auth');

  const [hasLoggedOut, setHasLoggedOut] = useState(false);

  const [handleLogout, isLogoutLoading] = useLoadingCallback(async () => {
    const auth = getFirebaseAuth();
    await signOut(auth);
    await logout();

    router.push('/login');
    router.refresh();

    setHasLoggedOut(true);
  });

  return (
    <Button
      variant="ghost"
      disabled={isLogoutLoading || hasLoggedOut}
      onClick={handleLogout}
    >
      {t('log_out_link')}
    </Button>
  );
};

export { LogOutButton };
