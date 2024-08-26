'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { type z } from 'zod';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { ProfileValidation } from '@/validations/profile-validation';

import IdeaSection from './idea-section';
import PersonalSection from './personal-section';
import ProfileEmailSection from './profile-email-section';
import RoleSection from './role-section';

type ProfileFormValues = z.infer<typeof ProfileValidation>;

// добавить из регистрации когда будет готова
// roles
// subRoles
// services
// idea

// !! TODO дописать логику отвязки профайла

const ProfileForm = () => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileValidation),
    defaultValues: {
      name: 'test',
      lastName: 'test',
      languages: [],
      location: '',
      // roles: [],
      // subRoles: [],
      // services: [],
      // idea: [],
      aboutInfo: '',
      availabilityTime: 20,
    },
    mode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = form;

  const t = useTranslations('profile');

  const { toast } = useToast();

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

  return (
    <div className="flex flex-col gap-10">
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-8">
            <IdeaSection />

            <RoleSection />

            <PersonalSection />
          </div>

          <Button type="submit" disabled={!isValid} className="w-full">
            {t('submitButton')}
          </Button>
        </form>
      </FormProvider>

      <Separator />

      <ProfileEmailSection onUnlinkClick={handleUnlinkClick} />
    </div>
  );
};

export { ProfileForm };
