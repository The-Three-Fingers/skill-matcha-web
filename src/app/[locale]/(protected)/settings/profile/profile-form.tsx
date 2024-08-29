'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import {
  DEFAULT_PROFILE,
  ProfileValidation,
} from '@/validations/profile-validation';

import type { GeneralFormFields } from '../types';
import IdeaSection from './idea-section';
import PersonalSection from './personal-section';
import ProfileEmailSection from './profile-email-section';
import RoleSection from './role-section';

// !! TODO дописать логику отвязки профайла

const ProfileForm = ({ profile }: { profile: GeneralFormFields }) => {
  const t = useTranslations('profile');
  const { toast } = useToast();

  const form = useForm<GeneralFormFields>({
    resolver: zodResolver(ProfileValidation),
    defaultValues: {
      ...DEFAULT_PROFILE,
      ...profile,
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = form;

  const resetForm = () => {
    reset(profile);
  };

  function onSubmit(data: GeneralFormFields) {
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

  const isSubmitButtonDisabled = !isValid || !isDirty;

  return (
    <div className="flex flex-col gap-10">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-8">
            <PersonalSection />
            <RoleSection />
            <IdeaSection />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            {isDirty && (
              <Button
                className="w-full"
                variant="secondary"
                onClick={handleResetChanges}
              >
                {t('resetButton')}
              </Button>
            )}

            <Button
              type="submit"
              disabled={isSubmitButtonDisabled}
              className="w-full"
            >
              {t('submitButton')}
            </Button>
          </div>
        </form>
      </Form>

      <Separator />

      <ProfileEmailSection onUnlinkClick={handleUnlinkClick} />
    </div>
  );
};

export { ProfileForm };
