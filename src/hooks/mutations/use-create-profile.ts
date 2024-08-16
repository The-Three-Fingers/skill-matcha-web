import { useMutation } from '@tanstack/react-query';
import type { z } from 'zod';

import type { ProfileValidation } from '@/validations/profile-validation';

const mutationFn = async (data: z.infer<typeof ProfileValidation>) => {
  await fetch(`/api/profiles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const useCreateProfile = () => {
  return useMutation({
    mutationFn,
  });
};
