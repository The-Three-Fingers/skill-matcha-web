import type { Auth, AuthProvider, UserCredential } from 'firebase/auth';
import {
  browserPopupRedirectResolver,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  useDeviceLanguage,
} from 'firebase/auth';

export const logout = async (auth: Auth): Promise<void> => {
  return signOut(auth);
};

export const getGoogleProvider = (auth: Auth) => {
  const provider = new GoogleAuthProvider();

  provider.addScope('profile');
  provider.addScope('email');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useDeviceLanguage(auth);
  provider.setCustomParameters({
    display: 'popup',
  });

  return provider;
};

export const loginWithProvider = async (
  auth: Auth,
  provider: AuthProvider,
): Promise<UserCredential> => {
  const result = await signInWithPopup(
    auth,
    provider,
    browserPopupRedirectResolver,
  );

  return result;
};
