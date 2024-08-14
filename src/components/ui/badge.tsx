import { cva, type VariantProps } from 'class-variance-authority';
import { Check, X } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/libs/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
        matched: 'border-primary',
        mismatched: 'border-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const CheckIcon = () => <Check className="size-4 text-primary" />;
const XIcon = () => <X className="size-4 text-destructive" />;

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const variantIcons: Record<string, React.FunctionComponent> = {
  matched: CheckIcon,
  mismatched: XIcon,
};

function Badge({ className, variant, ...props }: BadgeProps) {
  const IconComponent = variant ? variantIcons[variant] : null;

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {IconComponent && <IconComponent />}
      {props.children}
    </div>
  );
}

export { Badge, badgeVariants };
