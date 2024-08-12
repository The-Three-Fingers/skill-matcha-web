'use client';

import type { ReactNode } from 'react';
import React from 'react';

import { Button } from '../ui/button';

type ChevronButtonProps = {
  className?: string;
  onClick: () => void;
  icon: ReactNode;
};

const ChevronButton = ({ className, onClick, icon }: ChevronButtonProps) => (
  <Button
    className={`fixed bottom-1/2 flex size-12 items-center justify-center gap-10 rounded-full bg-white p-0 shadow-hover-glow ${className} hover:cursor-pointer hover:bg-white hover:shadow-blur`}
    onClick={onClick}
  >
    <div className="flex items-center justify-center text-black">{icon}</div>
  </Button>
);

export default ChevronButton;
