'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { useProfile } from '@/providers/ProfileContext';
import { SearchPreferences } from '@/validations/profile-validation';

import type { SearchPreferencesFormFields } from '../types';

const PreferencesForm = () => {
  const { profile } = useProfile();
  const t = useTranslations('profile');
  const { toast } = useToast();

  const form = useForm<SearchPreferencesFormFields>({
    resolver: zodResolver(SearchPreferences),
    defaultValues: profile,
  });

  const {
    handleSubmit,
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

  return (
    <div className="flex flex-col gap-10">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
