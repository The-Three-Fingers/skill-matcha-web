import { createContext, useContext } from 'react';
import type { z } from 'zod';

import type { ProfileValidation } from '@/validations/profile-validation';

export type Profile = z.infer<typeof ProfileValidation> & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export interface ProfileContextValue {
  profile: Profile | null;
}

export const ProfileContext = createContext<ProfileContextValue>({
  profile: null,
});

export const useProfile = () => useContext(ProfileContext);
