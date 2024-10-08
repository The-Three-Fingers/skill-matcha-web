import type { z } from 'zod';

import type { ProfileValidation } from '@/validations/profile-validation';

export type FavoriteProfile = z.infer<typeof ProfileValidation> & {
  id: string;
};
