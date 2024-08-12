'use client';

import React from 'react';

import { Button } from '@/components/ui/button';

import type { AccountSwitchDirection } from '../types';

type ChevronButtonProps = {
  direction: AccountSwitchDirection;
  IconComponent: React.ElementType;
  onClick: (direction: AccountSwitchDirection) => void;
};

const ChevronButton = ({
  direction,
  IconComponent,
  onClick,
}: ChevronButtonProps) => (
  <Button
    size="icon"
    variant="ghost"
    className="rounded-full bg-white shadow-hover-glow hover:shadow-blur"
    onClick={() => onClick(direction)}
  >
    <IconComponent />
  </Button>
);

export default ChevronButton;
