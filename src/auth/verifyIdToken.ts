import { getAuth } from 'firebase-admin/auth';
import { cookies, headers } from 'next/headers';
import { getTokens } from 'next-firebase-auth-edge';

import { getFirebaseAdminApp } from '@/app/firebase';
import { authConfig } from '@/config/server-config';

export const verifyIdToken = async () => {
  const headerIdToken = headers().get('Authorization')?.split('Bearer ')[1];
  const cookiesAuthToken = cookies().get(authConfig.cookieName);

  if (headerIdToken) {
    const auth = getAuth(getFirebaseAdminApp());

    const decodedToken = await auth.verifyIdToken(headerIdToken);

    return decodedToken;
  }

  if (cookiesAuthToken) {
    const tokens = await getTokens(cookies(), authConfig);

    return tokens?.decodedToken ?? null;
  }

  return null;
};
