'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Progress } from '@/components/ui/progress';
import { TypographyH3 } from '@/components/ui/typography';
import { useCreateProfile } from '@/hooks/mutations/use-create-profile';
import { ProfileValidation } from '@/validations/profile-validation';

import { steps } from '../constants';
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

  const t = useTranslations('createProfileForm');

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

  const progressValue = ((steps.indexOf(activeStep) + 1) / steps.length) * 100;

  return (
    <Form {...form}>
      <form
        className="relative flex size-full w-full flex-col justify-between"
        onSubmit={handleSubmit(createProfile)}
      >
        <div className="mx-auto flex w-full max-w-lg flex-col gap-10 p-5">
          <TypographyH3>{t(`stepTitles.${activeStep}`)}</TypographyH3>

          <StepComponent key={activeStep} />
        </div>

        <div>
          <Progress
            indicatorClassName="bg-primary/70"
            className="h-2 rounded-none"
            value={progressValue}
          />
          <div className="flex w-full items-center justify-center bg-white p-3 dark:bg-background">
            <div className="mx-auto flex w-full max-w-lg items-center gap-2">
              {isBackButtonVisible && (
                <Button
                  size="lg"
                  className="flex-1"
                  variant="secondary"
                  onClick={onBack}
                >
                  {t('back')}
                </Button>
              )}
              <Button
                className="flex-1"
                size="lg"
                disabled={isLastStep && !isValid}
                onClick={isLastStep ? undefined : onNext}
                type={isLastStep ? 'submit' : 'button'}
              >
                {isLastStep ? t('create') : t('next')}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export { CreateForm };
