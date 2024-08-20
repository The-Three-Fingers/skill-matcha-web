import { useMutation } from '@tanstack/react-query';
import type { z } from 'zod';

import type { sendLeadForm } from '../validation';

const mutationFn = async (data: z.infer<typeof sendLeadForm>) => {
  await fetch(`/api/submit-lead`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const useSendLead = () => {
  return useMutation({
    mutationFn,
  });
};
