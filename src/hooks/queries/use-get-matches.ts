import { type QueryFunction, useQuery } from '@tanstack/react-query';
import type { z } from 'zod';

import { Env } from '@/libs/Env';
import type { ProfileValidation } from '@/validations/profile-validation';

export type MatchProfile = z.infer<typeof ProfileValidation> & {
  createdAt: string;
  updatedAt: string;
  id: string;
};

const fetchMatches: QueryFunction<
  MatchProfile[],
  [string, { offset?: number }]
> = async ({ queryKey }) => {
  const [, variables] = queryKey;

  const params = new URLSearchParams();

  if (variables.offset) {
    params.append('offset', String(variables.offset));
  }

  const requestURL = new URL(`${Env.NEXT_PUBLIC_APP_URL}/api/matches`);

  requestURL.search = params.toString();

  const response = await fetch(requestURL.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export const useGetMatches = (variables: { offset?: number } = {}) =>
  useQuery({
    queryFn: fetchMatches,
    queryKey: ['matches', variables],
  });
