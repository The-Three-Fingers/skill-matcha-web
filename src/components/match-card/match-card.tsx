'use client';

import React from 'react';

import CardDetails from './card-details';
import CardHeaderWrapper from './card-header-wrapper';
import ChevronButton from './chevron-button';
import FooterButtons from './footer-buttons';

type ButtonDirection = 'left' | 'right';

// TODO нужно положить переменные в en locale
const MatchCard = () => {
  const handleChevronClick = (direction: ButtonDirection) => () => {
    console.log(`Chevron ${direction} `);
  };

  const handleFooterButtonClick = (buttonType: 'contact' | 'save') => {
    console.log(`${buttonType} button`);
  };

  return (
    <div className="relative w-full pb-16">
      <CardHeaderWrapper />
      <CardDetails />
      <FooterButtons onClick={handleFooterButtonClick} />

      <ChevronButton
        className="left-2 rotate-90 md:left-8 lg:left-36"
        onClick={handleChevronClick('left')}
      />

      <ChevronButton
        className="right-2 -rotate-90 md:right-8 lg:right-36"
        onClick={handleChevronClick('right')}
      />
    </div>
  );
};

export default MatchCard;
