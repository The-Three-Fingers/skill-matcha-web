'use client';

import { onAuthStateChanged, type User } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth } from '@/libs/firebase/clientApp';

export function useUser() {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser: User | null) => {
      setUser(authUser);
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return user;
}
