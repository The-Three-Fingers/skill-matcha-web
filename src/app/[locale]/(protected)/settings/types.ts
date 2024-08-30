import type { z } from 'zod';

import type {
  GeneralProfile,
  SearchPreferences,
} from '@/validations/profile-validation';

export type SearchPreferencesFormFields = z.infer<typeof SearchPreferences>;
export type GeneralFormFields = z.infer<typeof GeneralProfile>;
