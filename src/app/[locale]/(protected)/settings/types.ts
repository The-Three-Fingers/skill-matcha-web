import type { z } from 'zod';

import type { ProfileValidation } from '@/validations/profile-validation';

export type ProfileFormFields = z.infer<typeof ProfileValidation>;
