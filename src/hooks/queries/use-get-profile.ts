import { type QueryFunction, useQuery } from '@tanstack/react-query';
import type { z } from 'zod';

import type { ProfileValidation } from '@/validations/profile-validation';

type Profile = z.infer<typeof ProfileValidation> & {
  createdAt: string;
  updatedAt: string;
  id: string;
};

const fetchProfile: QueryFunction<Profile> = async () => {
  const response = await fetch('/api/profiles');
  return response.json();
};

export const useGetProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
    staleTime: Infinity,
  });
};
