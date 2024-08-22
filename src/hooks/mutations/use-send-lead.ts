import { useMutation } from '@tanstack/react-query';
import type { z } from 'zod';

import type { SendLeadForm } from '@/validations/lead-email-form';

const mutationFn = async (data: z.infer<typeof SendLeadForm>) => {
  const res = await fetch(`/api/submit-lead`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.json();

    throw new Error(body.error);
  }
};

export const useSendLead = () => {
  return useMutation({
    mutationFn,
  });
};
