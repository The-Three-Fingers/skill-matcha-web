'use client';

import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useLoadingCallback } from 'react-loading-hook';

import { logout } from '@/api';
import { getFirebaseAuth } from '@/auth/firebase';

const LogOutButton = ({ className }: { className?: string }) => {
  const router = useRouter();
  const t = useTranslations('Auth');

  const [, setHasLoggedOut] = useState(false);

  const [handleLogout] = useLoadingCallback(async () => {
    const auth = getFirebaseAuth();
    await signOut(auth);
    await logout();

    router.push('/login');
    router.refresh();

    setHasLoggedOut(true);
  });

  return (
    <button type="button" className={className} onClick={handleLogout}>
      {t('log_out_link')}
    </button>
  );
};

export { LogOutButton };
