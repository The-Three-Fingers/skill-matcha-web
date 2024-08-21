import { AppConfig } from '@/utils/AppConfig';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPageTitleWithAppName = (title: string) => {
  return `${AppConfig.name} | ${title}`;
}
