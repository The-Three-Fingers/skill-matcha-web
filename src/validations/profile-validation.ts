import { z } from 'zod';

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
  avatarURL: z.string().optional(),
  aboutInfo: z.string().max(1000).min(10).optional(),
  languages: z.array(z.string().min(2).max(5)).default([]),
  location: z.string().min(2).max(2).optional(),
  // Role
  roles: z
    .array(z.string())
    .min(1, {
      message: 'At least one item is required',
    })
    .max(1),
  subRoles: z.array(z.string()).default([]),
  services: z.array(z.string()).min(1, {
    message: 'At least one item is required',
  }),
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
  searchSubRoles: z.array(z.string()).default([]),
  searchServices: z.array(z.string()).default([]),
  // Others
  availabilityTime: z.number().min(0).optional(),
});
