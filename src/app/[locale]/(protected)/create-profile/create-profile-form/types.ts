import type { z } from 'zod';

import type { ProfileValidation } from '@/validations/profile-validation';

export type CreateProfileFormFields = z.infer<typeof ProfileValidation>;
