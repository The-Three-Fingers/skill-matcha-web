'use client';

import React from 'react';

import { Button } from '@/components/ui/button';

type ChevronButtonProps = {
  IconComponent: React.ElementType;
  onClick?: () => void;
};

const ChevronButton = ({ IconComponent, onClick }: ChevronButtonProps) => (
  <Button
    size="icon"
    variant="ghost"
    className="rounded-full bg-white shadow-hover-glow hover:shadow-blur dark:text-background"
    onClick={onClick}
  >
    <IconComponent />
  </Button>
);

export default ChevronButton;
