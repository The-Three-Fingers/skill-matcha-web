import { type QueryFunction, useQuery } from '@tanstack/react-query';
import type { z } from 'zod';

import type { ProfileValidation } from '@/validations/profile-validation';

export type MatchProfile = z.infer<typeof ProfileValidation> & {
  createdAt: string;
  updatedAt: string;
  id: string;
};

const fetchMatchProfile: QueryFunction<
  MatchProfile,
  [string, { id?: string }]
> = async ({ queryKey }) => {
  const [, variables] = queryKey;

  const response = await fetch(`/api/matches/${variables.id}`, {
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

export const useGetMatchProfile = (variables: { id: string }) =>
  useQuery({
    queryFn: fetchMatchProfile,
    queryKey: ['matches', variables],
  });
