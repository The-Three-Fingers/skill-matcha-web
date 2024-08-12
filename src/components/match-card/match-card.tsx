'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

import { Card } from '../ui/card';
import CardDetails from './card-details';
import CardHeaderWrapper from './card-header-wrapper';
import ChevronButton from './chevron-button';
import FooterButtons from './footer-buttons';

type ButtonDirection = 'left' | 'right';

const MatchCard = () => {
  const handleChevronClick = (direction: ButtonDirection) => () => {
    console.log(`Chevron ${direction} `);
  };

  const handleFooterButtonClick = (buttonType: 'contact' | 'save') => {
    console.log(`${buttonType} button`);
  };

  return (
    <Card className="relative w-full pb-16">
      <CardHeaderWrapper />
      <CardDetails />
      <FooterButtons onClick={handleFooterButtonClick} />

      <ChevronButton
        className="left-2 md:left-8 lg:left-36"
        onClick={handleChevronClick('left')}
        icon={<ChevronLeft className="size-full" />}
      />

      <ChevronButton
        className="right-2 md:right-8 lg:right-36"
        onClick={handleChevronClick('right')}
        icon={<ChevronRight className="size-full" />}
      />
    </Card>
  );
};

export { MatchCard };
