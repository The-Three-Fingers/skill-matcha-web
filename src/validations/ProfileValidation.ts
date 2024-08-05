import { z } from 'zod';

// TODO add translations for error messages

export const CreateProfileFormValidation = z.object({
  name: z.string().min(1, '').max(150, {
    message: '',
  }),
  lastName: z.string().min(1, '').max(150, {
    message: '',
  }),
  roles: z.array(z.string()),
  searchRoles: z.array(z.string()),
});

export const EditProfileValidation = z.object({
  id: z.coerce.number(),
  name: z.string().min(1),
  lastName: z.string().min(1),
});

export const DeleteCreateProfileFormValidation = z.object({
  id: z.coerce.number(),
});
