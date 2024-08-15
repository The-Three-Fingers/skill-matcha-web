'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { steps } from '../constants';
import type { CreateProfileFormSettings } from '../types';
import { CreateForm } from './form';

const CreateProfileForm = () => {
  const router = useRouter();

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = useMemo(() => steps[activeStepIndex], [activeStepIndex]);

  const isFirstStep = activeStepIndex === 0;
  const isLastStep = activeStepIndex === steps.length - 1;

  const handleSubmit = async (data: CreateProfileFormSettings) => {
    await fetch(`/api/profiles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    router.refresh();
  };

  const goPrevStep = () => {
    setActiveStepIndex((index) => index - 1);
  };

  const goNextStep = () => {
    setActiveStepIndex((index: number) => index + 1);
  };

  const handleNextStep = (data?: CreateProfileFormSettings) => {
    if (isLastStep && data) {
      handleSubmit(data);
    } else {
      goNextStep();
    }
  };

  if (!activeStep) {
    return null;
  }

  return (
    <CreateForm
      activeStep={activeStep}
      isBackButtonVisible={!isFirstStep}
      onBack={goPrevStep}
      isLastStep={isLastStep}
      onSubmit={handleNextStep}
    />
  );
};

export { CreateProfileForm };
