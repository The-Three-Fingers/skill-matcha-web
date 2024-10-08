import { z } from 'zod';

export const DEFAULT_PROFILE = {
  name: '',
  lastName: '',
  avatarURL: undefined,
  aboutInfo: '',
  languages: [],
  location: '',
  hasIdea: 'false',
  ideaStage: '',
  ideaDescription: '',
  searchPreferences: [],
  availabilityTime: '',
  role: '',
  subRoles: [],
  services: [],
};

const MAX_FILE_SIZE = 2 * 1024 * 1024;

export const Role = z.object({
  // TODO: make it as array later for multi roles
  role: z.string().min(1, {
    message: 'Please choose a role',
  }),
  subRoles: z.array(z.string()).max(2).default([]),
  services: z.array(z.string()).max(4).default([]),
});

export const SearchPreferences = z.object({
  searchPreferences: z.array(Role).default([]),
});

export const GeneralProfile = z.object({
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
  avatarURL:
    typeof window === 'undefined'
      ? z.any()
      : z
          .instanceof(File)
          .refine(
            (file) => {
              return file.size <= MAX_FILE_SIZE;
            },
            {
              message: 'The profile picture must be a maximum of 1MB',
            },
          )
          .refine((file) => {
            return file.type.startsWith('image/');
          }, 'File must be an image')
          .optional(),
  aboutInfo: z.string().max(1000).default(''),
  languages: z.array(z.string().min(2).max(5)).default([]),
  location: z.string().default(''),
  // Idea
  hasIdea: z.string().default('false'),
  ideaStage: z.string().optional().default(''),
  ideaDescription: z.string().max(1000).default(''),
  // Others
  availabilityTime: z.string().default(''),
});

export const ProfileValidation =
  GeneralProfile.and(Role).and(SearchPreferences);
