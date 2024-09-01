'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

import CardDetails from './card-details';
import CardHeaderWrapper from './card-header-wrapper';
import ChevronButton from './chevron-button';
import { FooterButtons } from './footer-buttons';

const MatchCard = () => {
  return (
    <div className="relative w-full pb-16">
      <CardHeaderWrapper />
      <CardDetails />

      <div className="fixed bottom-1/2 h-10 w-full">
        <div className="mx-auto flex w-full max-w-screen-xl justify-between">
          <ChevronButton IconComponent={ChevronLeft} />
          <ChevronButton IconComponent={ChevronRight} />
        </div>
      </div>

      <FooterButtons />
    </div>
  );
};

export { MatchCard };
