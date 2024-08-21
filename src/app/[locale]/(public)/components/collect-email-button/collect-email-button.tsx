'use client';

import { Button, type ButtonProps } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import { LeadForm } from './lead-form';

const CollectEmailButton = ({
  children,
  className,
  size,
}: {
  children: React.ReactNode;
  className?: string;
  size?: ButtonProps['size'];
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={size} className={className}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <LeadForm />
      </DialogContent>
    </Dialog>
  );
};

export { CollectEmailButton };
