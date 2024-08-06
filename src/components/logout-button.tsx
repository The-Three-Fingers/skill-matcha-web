'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { signOut } from '@/libs/firebase/auth';

const LogOutButton = () => {
  const router = useRouter();
  const t = useTranslations('DashboardLayout');

  const handleClick = async () => {
    await signOut();

    router.replace('/');
  };
  return (
    <button
      className="border-none text-gray-700 hover:text-gray-900"
      type="button"
      onClick={handleClick}
    >
      {t('sign_out')}
    </button>
  );
};

export { LogOutButton };
