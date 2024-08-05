import {
  GoogleAuthProvider,
  onAuthStateChanged as _onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';

import { auth } from '@/libs/firebase/clientApp';

export function onAuthStateChanged(cb: (user: any) => void) {
  return _onAuthStateChanged(auth, cb);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Error signing in with Google', error);
  }
}

export async function signOut() {
  try {
    return await auth.signOut();
  } catch (error) {
    console.error('Error signing out with Google', error);

    return null;
  }
}
