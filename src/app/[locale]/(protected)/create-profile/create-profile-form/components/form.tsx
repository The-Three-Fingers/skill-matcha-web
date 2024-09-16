'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Progress } from '@/components/ui/progress';
import { Spinner } from '@/components/ui/spinner';
import { useToast } from '@/components/ui/use-toast';
import { useCreateProfile } from '@/hooks/mutations';
import { cn } from '@/libs/utils';
import {
  DEFAULT_PROFILE,
  ProfileValidation,
} from '@/validations/profile-validation';

import { steps } from '../constants';
import type { ProfileFormFields } from '../types';
import { Idea, PersonalInfo, Role, SearchPreferences } from './steps';

const stepRenreders = {
  personal: PersonalInfo,
  role: Role,
  idea: Idea,
  searchPreferences: SearchPreferences,
};

const CreateForm = ({
  activeStep,
  isBackButtonVisible,
  isLastStep,
  onBack,
  onNext,
}: {
  activeStep: keyof typeof stepRenreders;
  isBackButtonVisible: boolean;
  isLastStep: boolean;
  onBack: () => void;
  onNext: () => void;
}) => {
  const { toast } = useToast();

  const t = useTranslations('profileForm');

  const { mutateAsync, isPending } = useCreateProfile();

  const form = useForm<ProfileFormFields>({
    mode: 'all',
    resolver: zodResolver(ProfileValidation),
    defaultValues: DEFAULT_PROFILE,
  });

  const {
    getValues,
    formState: { isValid, errors },
  } = form;

  const createProfile = async (data: ProfileFormFields) => {
    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined) {
          const formattedValue = Array.isArray(value)
            ? JSON.stringify(value)
            : value;

          formData.append(key, formattedValue);
        }
      });

      await mutateAsync(formData);

      window.location.reload();
    } catch (error: any) {
      toast({
        title: t('errorTitle'),
        variant: 'destructive',
      });
    }
  };

  const formValues = getValues();

  const isStepValid = useMemo(() => {
    switch (activeStep) {
      case 'personal':
        return (
          Boolean(formValues.name && formValues.lastName) && !errors.avatarURL
        );
      case 'role':
        return Boolean(formValues.role) && formValues.services.length > 0;
      case 'idea':
        return formValues.hasIdea === 'true'
          ? Boolean(formValues.ideaStage)
          : true;
      case 'searchPreferences':
        return isValid;
      default:
        return false;
    }
  }, [activeStep, formValues, isValid, errors]);

  const handleNext = () => {
    if (!isStepValid) return;

    if (isLastStep) {
      createProfile(formValues);

      return;
    }

    onNext();
  };

  const StepComponent = stepRenreders[activeStep];

  if (!StepComponent) {
    return null;
  }

  const nextButtonContent = isLastStep ? t('create') : t('next');

  const progressValue = ((steps.indexOf(activeStep) + 1) / steps.length) * 100;

  return (
    <Form {...form}>
      <div
        className={cn('relative flex size-full flex-col pb-[70px]', {
          'pointer-events-none': isPending,
        })}
      >
        <Progress
          indicatorClassName="bg-primary/70"
          className="h-2 rounded-none"
          value={progressValue}
        />
        <div className="mx-auto flex w-full max-w-md flex-1 p-5">
          <StepComponent key={activeStep} />
        </div>

        <div className="fixed bottom-0 left-0 z-50 flex h-[70px] w-full items-center justify-center bg-white p-3 dark:border-t dark:bg-background">
          <div className="mx-auto flex w-full max-w-lg items-center gap-2">
            {isBackButtonVisible && (
              <Button
                size="lg"
                className="flex-1"
                variant="secondary"
                disabled={isPending}
                onClick={onBack}
              >
                {t('back')}
              </Button>
            )}
            <Button
              className="flex-1"
              size="lg"
              disabled={!isStepValid || isPending}
              onClick={handleNext}
            >
              {isPending ? <Spinner /> : nextButtonContent}
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export { CreateForm };
