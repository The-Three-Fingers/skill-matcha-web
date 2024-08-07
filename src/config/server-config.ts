import { Env } from '@/libs/Env';

export const serverConfig = {
  useSecureCookies: Env.USE_SECURE_COOKIES === 'true',
  firebaseApiKey: Env.FIREBASE_API_KEY!,
  serviceAccount: Env.FIREBASE_ADMIN_PRIVATE_KEY
    ? {
        projectId: Env.FIREBASE_PROJECT_ID!,
        clientEmail: Env.FIREBASE_ADMIN_CLIENT_EMAIL!,
        privateKey: Env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n')!,
      }
    : undefined,
};

export const authConfig = {
  apiKey: serverConfig.firebaseApiKey,
  cookieName: 'AuthToken',
  cookieSignatureKeys: [
    Env.COOKIE_SECRET_CURRENT!,
    Env.COOKIE_SECRET_PREVIOUS!,
  ],
  cookieSerializeOptions: {
    path: '/',
    httpOnly: true,
    secure: serverConfig.useSecureCookies, // Set this to true on HTTPS environments
    sameSite: 'lax' as const,
    maxAge: 12 * 60 * 60 * 24, // twelve days
  },
  serviceAccount: serverConfig.serviceAccount,
  // Set to false in Firebase Hosting environment due to https://stackoverflow.com/questions/44929653/firebase-cloud-function-wont-store-cookie-named-other-than-session
  enableMultipleCookies: true,
};
