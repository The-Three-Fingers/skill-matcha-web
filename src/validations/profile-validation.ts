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
