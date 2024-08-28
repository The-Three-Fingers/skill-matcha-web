'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { type z } from 'zod';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { useGetProfile } from '@/hooks/queries/use-get-profile';
import { ProfileValidation } from '@/validations/profile-validation';

import Loading from '../../loading';
import IdeaSection from './idea-section';
import PersonalSection from './personal-section';
import ProfileEmailSection from './profile-email-section';
import RoleSection from './role-section';

// добавить из регистрации когда будет готова
// roles
// subRoles
// services

// !! TODO дописать логику отвязки профайла

type ProfileFormValues = z.infer<typeof ProfileValidation>;

const defaultValues = {
  name: '',
  lastName: '',
  languages: [],
  location: '',
  hasIdea: 'false',
  ideaStage: '',
  ideaDescription: '',
  aboutInfo: '',
  availabilityTime: 20,
  // roles: [],
  // subRoles: [],
  // services: [],
};

const ProfileForm = () => {
  const { data: profile, isLoading } = useGetProfile();
  const t = useTranslations('profile');
  const { toast } = useToast();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileValidation),
    defaultValues,
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid, dirtyFields },
  } = form;

  const resetForm = () => {
    if (!profile) {
      return;
    }

    reset({
      ...defaultValues,
      ...profile,
    });
  };

  useEffect(() => {
    if (!profile) {
      return;
    }

    resetForm();
  }, [profile, reset]);

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const handleUnlinkClick = () => {
    toast({
      title: t('unlinkToastTitle'),
      description: t('unlinkToastDescription'),
    });
  };

  const handleResetChanges = () => {
    resetForm();
  };

  if (isLoading) {
    return <Loading />;
  }

  const isFormModified = Boolean(Object.keys(dirtyFields).length);

  return (
    <div className="flex flex-col gap-10">
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-8">
            <IdeaSection />

            <RoleSection />

            <PersonalSection />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button type="submit" disabled={!isValid} className="w-full">
              {t('submitButton')}
            </Button>

            <Button
              className={`w-full ${!isFormModified && 'hidden'}`}
              variant="secondary"
              disabled={!isFormModified}
              onClick={handleResetChanges}
            >
              {t('resetButton')}
            </Button>
          </div>
        </form>
      </FormProvider>

      <Separator />

      <ProfileEmailSection onUnlinkClick={handleUnlinkClick} />
    </div>
  );
};

export { ProfileForm };
