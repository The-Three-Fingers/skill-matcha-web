import { type QueryFunction, useQuery } from '@tanstack/react-query';
import type { z } from 'zod';

import type { ProfileValidation } from '@/validations/profile-validation';

type Favorite = z.infer<typeof ProfileValidation> & {
  id: string;
};

const fetchFavorites: QueryFunction<Favorite[]> = async () => {
  const response = await fetch(`/api/favorites`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 404) {
    return null;
  }

  return response.json();
};

export const useGetFavorites = () =>
  useQuery({
    queryFn: fetchFavorites,
    queryKey: ['favorites'],
  });
