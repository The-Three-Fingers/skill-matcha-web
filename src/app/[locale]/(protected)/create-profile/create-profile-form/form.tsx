'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { ProfileValidation } from '@/validations/profile-validation';

import type { CreateProfileFormSettings } from '../types';
import { Idea, PersonalInfo, Roles, SearchRoles } from './steps';

const stepRenreders = {
  personal: PersonalInfo,
  roles: Roles,
  idea: Idea,
  searchRoles: SearchRoles,
};

const CreateForm = ({
  activeStep,
  isBackButtonVisible,
  isLastStep,
  onBack,
  onSubmit,
}: {
  activeStep: keyof typeof stepRenreders;
  isBackButtonVisible: boolean;
  isLastStep: boolean;
  onBack: () => void;
  onSubmit: (data?: CreateProfileFormSettings) => void;
}) => {
  const form = useForm<CreateProfileFormSettings>({
    resolver: zodResolver(ProfileValidation),
    defaultValues: {
      name: '',
      lastName: '',
      languages: [],
      location: '',
      avatarURL: '',
      roles: [],
      subRoles: [],
      services: [],
      searchRoles: [],
      searchSubRoles: [],
      searchServices: [],
    },
  });

  const { handleSubmit } = form;

  const t = useTranslations('CreateProfileForm');

  const StepComponent = stepRenreders[activeStep];

  const handeNext = () => {
    onSubmit();
  };

  if (!StepComponent) {
    return null;
  }

  return (
    <Form {...form}>
      <form
        className="lg: flex w-full flex-col gap-y-4 p-5 sm:w-4/5 lg:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <StepComponent />
        </div>

        <div className="mt-5 flex flex-col items-center justify-stretch gap-2">
          {isBackButtonVisible && (
            <Button className="w-full" variant="secondary" onClick={onBack}>
              {t('back')}
            </Button>
          )}
          <Button
            className="w-full"
            onClick={isLastStep ? undefined : handeNext}
            type={isLastStep ? 'submit' : 'button'}
          >
            {isLastStep ? t('create') : t('next')}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { CreateForm };
