'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

import type { AccountSwitchDirection } from '../types';
import { Card } from '../ui/card';
import CardDetails from './card-details';
import CardHeaderWrapper from './card-header-wrapper';
import ChevronButton from './chevron-button';
import FooterButtons from './footer-buttons';

const MatchCard = () => {
  const handleChevronClick = (direction: AccountSwitchDirection) => {
    console.log(`Chevron ${direction}`);
  };

  const handleFooterButtonClick = (buttonType: 'contact' | 'save') => {
    console.log(`${buttonType} button`);
  };

  return (
    <Card className="relative w-full pb-16">
      <CardHeaderWrapper />
      <CardDetails />
      <FooterButtons onClick={handleFooterButtonClick} />

      <div className="fixed bottom-1/2 left-2 md:left-8 lg:left-36">
        <ChevronButton
          direction="left"
          IconComponent={ChevronLeft}
          onClick={handleChevronClick}
        />
      </div>

      <div className="fixed bottom-1/2 right-2 md:right-8 lg:right-36">
        <ChevronButton
          direction="right"
          IconComponent={ChevronRight}
          onClick={handleChevronClick}
        />
      </div>
    </Card>
  );
};

export { MatchCard };
