'use client';

import type { User } from 'firebase/auth';
import { useRouter } from 'next/navigation';

import { useUserSession } from '@/hooks/use-user-session';
import { signInWithGoogle } from '@/libs/firebase/auth';

const GoogleLoginButton = ({
  initialUser = null,
}: {
  initialUser?: User | null;
}) => {
  const router = useRouter();

  // TODO: move this hook to header across the app
  useUserSession(initialUser);

  const handleClick = async () => {
    await signInWithGoogle();
    router.refresh();
  };
  return (
    <button
      className="border-none text-gray-700 hover:text-gray-900"
      type="button"
      onClick={handleClick}
    >
      Login with Google
    </button>
  );
};

export { GoogleLoginButton };
