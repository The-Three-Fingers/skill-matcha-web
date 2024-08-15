import type { z } from 'zod';

import type { ProfileValidation } from '@/validations/profile-validation';

export type CreateProfileFormSettings = z.infer<typeof ProfileValidation>;
