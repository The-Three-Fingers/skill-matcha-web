'use client';

import { Indicator, Root } from '@radix-ui/react-progress';
import * as React from 'react';

import { cn } from '@/libs/utils';

const Progress = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> & {
    indicatorClassName?: string;
  }
>(({ className, indicatorClassName, value, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
      className,
    )}
    {...props}
  >
    <Indicator
      className={cn(
        'size-full flex-1 bg-primary transition-all',
        indicatorClassName,
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </Root>
));
Progress.displayName = Root.displayName;

export { Progress };
