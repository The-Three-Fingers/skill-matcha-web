import { z } from 'zod';

export const CreateProfileFormValidation = z.object({
  name: z.string().min(1).max(150),
  lastName: z.string().min(1).max(150),
  roles: z.array(z.string()).min(1),
  searchRoles: z.array(z.string()),
});
