'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

import ChevronButton from './chevron-button';
import { FooterButtons } from './footer-buttons';
import { Profile } from './profile';

const MatchCard = () => {
  return (
    <div className="relative flex size-full flex-col justify-center px-4 pb-[70px] pt-4">
      <Profile />

      <div className="fixed bottom-1/2 left-0 h-10 w-full">
        <div className="mx-auto flex w-full max-w-screen-md justify-between">
          <ChevronButton IconComponent={ChevronLeft} />
          <ChevronButton IconComponent={ChevronRight} />
        </div>
      </div>

      <FooterButtons />
    </div>
  );
};

export { MatchCard };
