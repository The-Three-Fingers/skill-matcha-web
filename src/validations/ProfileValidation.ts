import { z } from 'zod';

export const ProfileValidation = z.object({
  name: z.string().min(1),
  lastName: z.string().min(1),
});

export const EditProfileValidation = z.object({
  id: z.coerce.number(),
  name: z.string().min(1),
  lastName: z.string().min(1),
});

export const DeleteProfileValidation = z.object({
  id: z.coerce.number(),
});
