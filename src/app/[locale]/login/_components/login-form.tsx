'use client';

import type { UserCredential } from 'firebase/auth';
import React, { useState } from 'react';
import { useLoadingCallback } from 'react-loading-hook';

import { loginWithCredential } from '@/api';
import { getFirebaseAuth } from '@/auth/firebase';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { useRedirectAfterLogin } from '@/shared/useRedirectAfterLogin';
import { useRedirectParam } from '@/shared/useRedirectParam';

import { getGoogleProvider, loginWithProvider } from '../firebase';

export function LoginForm() {
  const [hasLogged, setHasLogged] = useState(false);

  const redirect = useRedirectParam();
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

  return (
    <div>
      {hasLogged && (
        <div>
          <span>
            Redirecting to <strong>{redirect || '/'}</strong>
          </span>
        </div>
      )}
      {!hasLogged && (
        <Button
          variant="outline"
          disabled={isGoogleLoading}
          onClick={handleLoginWithGoogle}
        >
          <Icons.Google className="mr-2 size-4" />
          Log in with Google
        </Button>
      )}
    </div>
  );
}
