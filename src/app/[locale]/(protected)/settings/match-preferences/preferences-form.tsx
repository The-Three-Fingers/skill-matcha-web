'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
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

const PreferencesForm = ({
  searchPreferences,
}: {
  searchPreferences: SearchPreferencesFormFields[];
}) => {
  const t = useTranslations('profile');
  const { toast } = useToast();

  const form = useForm<SearchPreferencesFormFields>({
    resolver: zodResolver(SearchPreferences),
    defaultValues: {
      ...defaultValues,
      ...searchPreferences,
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

  console.log('searchPreferences', searchPreferences);

  return (
    <div className="flex flex-col gap-10">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="h-20 bg-pink-700">
            <div className="search-preferences">
              {searchPreferences.map((preference, index) => (
                <div key={index}>
                  <h3>Role: {preference.role || 'No role specified'}</h3>
                  <div>
                    <h4>SubRoles:</h4>
                    {preference.subRoles && preference.subRoles.length > 0 ? (
                      <ul>
                        {preference.subRoles.map((subRole, subIndex) => (
                          <li key={subIndex}>{subRole}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No subRoles specified</p>
                    )}
                  </div>
                  <div>
                    <h4>Services:</h4>
                    {preference.services && preference.services.length > 0 ? (
                      <ul>
                        {preference.services.map((service, serviceIndex) => (
                          <li key={serviceIndex}>{service}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No services specified</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
