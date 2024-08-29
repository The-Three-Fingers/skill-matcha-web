import { createContext, useContext } from 'react';

export type Profile = TODO;

export interface ProfileContextValue {
  profile: Profile;
}

export const ProfileContext = createContext<ProfileContextValue>({
  profile: null,
});

export const useProfile = () => useContext(ProfileContext);
