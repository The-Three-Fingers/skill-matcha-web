'use client';

import * as React from 'react';

import type { User } from './AuthContext';
import { AuthContext } from './AuthContext';

export interface AuthProviderProps {
  user: User | null;
  children: React.ReactNode;
}

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({
  user,
  children,
}) => {
  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
