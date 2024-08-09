import type { UserCredential } from 'firebase/auth';
import { useState } from 'react';
import { useLoadingCallback } from 'react-loading-hook';

import { loginWithCredential } from '@/api';
import { getFirebaseAuth } from '@/auth/firebase';
import { getGoogleProvider, loginWithProvider } from '@/auth/helpers';
import { useRedirectAfterLogin } from '@/shared/useRedirectAfterLogin';

const useAuthHandlers = () => {
  const [hasLogged, setHasLogged] = useState(false);

  const redirectAfterLogin = useRedirectAfterLogin();

  async function handleLogin(credential: UserCredential) {
    await loginWithCredential(credential);
    redirectAfterLogin();
  }

  const [handleLoginWithGoogle, isGoogleLoading] = useLoadingCallback(
    async () => {
      setHasLogged(false);

      const auth = getFirebaseAuth();
      await handleLogin(await loginWithProvider(auth, getGoogleProvider(auth)));

      setHasLogged(true);
    },
  );

  return {
    google: {
      isLoading: isGoogleLoading,
      hasLogged,
      onAuth: handleLoginWithGoogle,
    },
  };
};

export { useAuthHandlers };
