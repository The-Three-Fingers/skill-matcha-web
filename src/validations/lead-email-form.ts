import { z } from 'zod';

export const SendLeadForm = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .min(1, { message: 'Email is required' }),
});
