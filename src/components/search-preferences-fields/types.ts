import type { z } from 'zod';

import type { Role } from '@/validations/profile-validation';

export type PreferenceFields = z.infer<typeof Role>;
