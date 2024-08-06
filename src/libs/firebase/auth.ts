import {
  GoogleAuthProvider,
  onAuthStateChanged as _onAuthStateChanged,
  signInWithPopup,
  type User,
} from 'firebase/auth';

import { auth } from '@/libs/firebase/clientApp';

export function onAuthStateChanged(cb: (user: User | null) => void) {
  return _onAuthStateChanged(auth, cb);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    return await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Error signing in with Google', error);

    return null;
  }
}

export async function signOut() {
  try {
    return await auth.signOut();
  } catch (error) {
    console.error('Error signing out', error);

    return null;
  }
}
