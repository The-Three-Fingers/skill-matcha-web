'use client';

import React from 'react';

import { Button } from '../ui/button';
import { Icons } from '../ui/icons';

type ChevronButtonProps = {
  className?: string;
  onClick: () => void;
};

const ChevronButton = ({ className, onClick }: ChevronButtonProps) => (
  <Button
    className={`fixed bottom-1/2 flex size-12 items-center justify-center gap-10 rounded-full bg-white p-0 shadow-hover-glow ${className} hover:cursor-pointer hover:bg-white hover:shadow-blur`}
    onClick={onClick}
  >
    <div className="flex items-center justify-center text-black">
      <Icons.Chevron className="size-full" />
    </div>
  </Button>
);

export default ChevronButton;
