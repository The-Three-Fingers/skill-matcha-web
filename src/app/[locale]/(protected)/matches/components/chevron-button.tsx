import { ChevronLeft } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/libs/utils';

const ChevronButton = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => (
  <Button
    size="icon"
    variant="ghost"
    className={cn(
      'rounded-full bg-white shadow-hover-glow hover:shadow-blur dark:text-background',
      className,
    )}
    onClick={onClick}
  >
    <ChevronLeft />
  </Button>
);

export default ChevronButton;
