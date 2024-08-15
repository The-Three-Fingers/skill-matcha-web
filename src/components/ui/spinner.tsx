import { Loader2 } from 'lucide-react';

import { cn } from '@/libs/utils';

export const Spinner = ({ className }: { className?: string }) => (
  <Loader2 className={cn('animate-spin', className)} />
);
