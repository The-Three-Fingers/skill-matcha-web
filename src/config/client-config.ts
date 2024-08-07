import { Env } from '@/libs/Env';

export const clientConfig = {
  apiKey: Env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: Env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  storageBucket: Env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  projectId: Env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  messagingSenderId: Env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: Env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
