'use client';

import { useRouter } from 'next/navigation';

import { signInWithGoogle } from '@/libs/firebase/auth';

import { Button } from './ui/button';

const GoogleLoginButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    await signInWithGoogle();
    router.refresh();
  };
  return (
    <Button variant="outline" onClick={handleClick}>
      Login with Google
    </Button>
  );
};

export { GoogleLoginButton };
