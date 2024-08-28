import { type QueryFunction, useQuery } from '@tanstack/react-query';
import type { z } from 'zod';

import type { ProfileValidation } from '@/validations/profile-validation';

const fetchProfile: QueryFunction<
  z.infer<typeof ProfileValidation>
> = async () => {
  const response = await fetch('/api/profiles');
  return response.json();
};

export const useGetProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
  });
};
