import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  connectAuthEmulator,
  getAuth,
  inMemoryPersistence,
  setPersistence,
} from 'firebase/auth';

import { clientConfig } from '@/config/client-config';
import { Env } from '@/libs/Env';

export const getFirebaseApp = () => {
  if (getApps().length) {
    return getApp();
  }

  const app = initializeApp(clientConfig);

  return app;
};

export function getFirebaseAuth() {
  const auth = getAuth(getFirebaseApp());

  // App relies only on server token. We make sure Firebase does not store credentials in the browser.
  // See: https://github.com/awinogrodzki/next-firebase-auth-edge/issues/143
  setPersistence(auth, inMemoryPersistence);

  if (Env.NEXT_PUBLIC_AUTH_EMULATOR_HOST) {
    // https://stackoverflow.com/questions/73605307/firebase-auth-emulator-fails-intermittently-with-auth-emulator-config-failed
    // eslint-disable-next-line no-underscore-dangle
    (auth as unknown as any)._canInitEmulator = true;
    connectAuthEmulator(auth, Env.NEXT_PUBLIC_AUTH_EMULATOR_HOST, {
      disableWarnings: true,
    });
  }

  return auth;
}
