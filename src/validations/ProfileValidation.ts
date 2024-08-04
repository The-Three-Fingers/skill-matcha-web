import { z } from 'zod';

export const CreateProfileFormValidation = z.object({
  name: z.string().min(1),
  lastName: z.string().min(1),
  role: z.string(),
});

export const EditProfileValidation = z.object({
  id: z.coerce.number(),
  name: z.string().min(1),
  lastName: z.string().min(1),
});

export const DeleteCreateProfileFormValidation = z.object({
  id: z.coerce.number(),
});
