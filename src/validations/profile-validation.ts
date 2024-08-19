import { z } from 'zod';

const MAX_FILE_SIZE = 1024 * 1024;

export const ProfileValidation = z.object({
  // Personal info
  name: z
    .string()
    .min(1, {
      message: 'Name must be at least 1 character',
    })
    .max(150, {
      message: 'Last name must be maximum 150 characters',
    }),
  lastName: z
    .string()
    .min(1, {
      message: 'Last name must be at least 1 character',
    })
    .max(150, {
      message: 'Last name must be maximum 150 characters',
    }),

  avatarURL: (typeof window === 'undefined'
    ? z.any()
    : z.instanceof(File).refine((file) => file.size <= MAX_FILE_SIZE, {
        message: 'The profile picture must be a maximum of 1MB',
      })
  ).optional(),

  aboutInfo: z.string().max(1000).min(10).optional(),
  languages: z.array(z.string().min(2).max(5)).default([]),
  location: z.string().optional(),
  // Role
  roles: z
    .array(z.string())
    .min(1, {
      message: 'Please choose one role',
    })
    .max(1),
  subRoles: z.array(z.string()).max(5).default([]),
  services: z
    .array(z.string())
    .min(1, {
      message: 'At least one item is required',
    })
    .max(10),
  // Idea
  idea: z
    .object({
      stage: z.string().min(1, {
        message: 'Idea stage must be selected',
      }),
      area: z.string().min(1, {
        message: 'Idea area must be selected',
      }),
    })
    .optional(),
  // Search preferences
  searchRoles: z.array(z.string()).default([]),
  searchSubRoles: z.array(z.string()).max(5).default([]),
  searchServices: z.array(z.string()).max(10).default([]),
  // Others
  availabilityTime: z
    .number()
    .int()
    .or(z.string())
    .pipe(z.coerce.number().int())
    .optional(),
});
