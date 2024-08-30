'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { ProfileContext } from '@/providers/ProfileContext';
import { SearchPreferences } from '@/validations/profile-validation';

import type { SearchPreferencesFormFields } from '../types';

// TODO RoleSection поменять на преф - когда будет готово

const defaultValues: SearchPreferencesFormFields = {
  searchPreferences: [
    {
      role: '',
      subRoles: [],
      services: [],
    },
  ],
};

const PreferencesForm = () => {
  const { profile } = useContext(ProfileContext);
  const t = useTranslations('profile');
  const { toast } = useToast();

  const form = useForm<SearchPreferencesFormFields>({
    resolver: zodResolver(SearchPreferences),
    defaultValues: {
      ...defaultValues,
      ...profile.SearchPreferences,
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = form;

  const resetForm = () => {
    console.log('reset');
  };

  function onSubmit(data: SearchPreferencesFormFields) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const handleResetChanges = () => {
    resetForm();
  };

  const isSubmitButtonDisabled = !isValid || !isDirty;

  console.log('searchPreferences', profile.SearchPreferences);

  return (
    <div className="flex flex-col gap-10">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            {!profile.SearchPreferences ? (
              <p>no data</p>
            ) : (
              <p>we have some data</p>
            )}
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
    </div>
  );
};

export { PreferencesForm };
