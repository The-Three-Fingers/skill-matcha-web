import { z } from 'zod';

export const CreateProfileFormValidation = z.object({
  // name: z.string().min(1),
  name: z
    .string()
    .min(1, 'Please provide at least 2 character for this field.')
    .max(150, {
      message: 'This field should not exceed 150 characters.',
    }),
  lastName: z.string().min(1),
  role: z.array(z.string()),
});

export const EditProfileValidation = z.object({
  id: z.coerce.number(),
  name: z.string().min(1),
  lastName: z.string().min(1),
});

export const DeleteCreateProfileFormValidation = z.object({
  id: z.coerce.number(),
});
