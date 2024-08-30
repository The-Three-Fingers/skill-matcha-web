'use client';

import * as React from 'react';

import type { Profile } from './ProfileContext';
import { ProfileContext } from './ProfileContext';

export interface ProfileProviderProps {
  profile: Profile | null;
  children: React.ReactNode;
}

export const ProfileProvider = ({
  profile,
  children,
}: ProfileProviderProps) => {
  return (
    <ProfileContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        profile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
