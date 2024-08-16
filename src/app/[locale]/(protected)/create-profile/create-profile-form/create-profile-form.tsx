'use client';

import { useMemo, useState } from 'react';

import { CreateForm } from './components/form';
import { steps } from './constants';

const CreateProfileForm = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = useMemo(() => steps[activeStepIndex], [activeStepIndex]);

  const isFirstStep = activeStepIndex === 0;
  const isLastStep = activeStepIndex === steps.length - 1;

  const goPrevStep = () => {
    setActiveStepIndex((index) => index - 1);
  };

  const goNextStep = () => {
    setActiveStepIndex((index: number) => index + 1);
  };

  if (!activeStep) {
    return null;
  }

  return (
    <CreateForm
      activeStep={activeStep}
      isBackButtonVisible={!isFirstStep}
      onBack={goPrevStep}
      onNext={goNextStep}
      isLastStep={isLastStep}
    />
  );
};

export { CreateProfileForm };
