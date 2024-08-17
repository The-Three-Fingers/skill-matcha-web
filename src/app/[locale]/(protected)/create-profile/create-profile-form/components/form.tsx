'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useCreateProfile } from '@/hooks/mutations/use-create-profile';
import { ProfileValidation } from '@/validations/profile-validation';

import type { CreateProfileFormFields } from '../types';
import { Idea, PersonalInfo, Roles, SearchRoles } from './steps';

const defaultValues = {
  name: '',
  lastName: '',
  languages: [],
  location: '',
  roles: [],
  subRoles: [],
  services: [],
  searchRoles: [],
  searchSubRoles: [],
  searchServices: [],
};

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
  onNext,
}: {
  activeStep: keyof typeof stepRenreders;
  isBackButtonVisible: boolean;
  isLastStep: boolean;
  onBack: () => void;
  onNext: () => void;
}) => {
  const router = useRouter();

  const t = useTranslations('CreateProfileForm');

  const { mutateAsync } = useCreateProfile();

  const form = useForm({
    resolver: zodResolver(ProfileValidation),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid },
  } = form;

  const createProfile = async (data: CreateProfileFormFields) => {
    await mutateAsync(data);

    reset();
    router.refresh();
  };

  const StepComponent = stepRenreders[activeStep];

  if (!StepComponent) {
    return null;
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-y-4 p-5 sm:w-4/5 lg:w-1/2"
        onSubmit={handleSubmit(createProfile)}
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
            disabled={isLastStep && !isValid}
            onClick={isLastStep ? undefined : onNext}
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
