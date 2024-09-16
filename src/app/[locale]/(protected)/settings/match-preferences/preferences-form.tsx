'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useForm } from 'react-hook-form';

import { SearchPreferencesFields } from '@/components/search-preferences-fields';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { useUpdateProfile } from '@/hooks/mutations';
import { useProfile } from '@/providers/ProfileContext';
import { SearchPreferences } from '@/validations/profile-validation';

import type { ProfileFormFields, SearchPreferencesFormFields } from '../types';

type Preference = ProfileFormFields['searchPreferences'][number];

const PreferencesForm = () => {
  const { mutateAsync } = useUpdateProfile();
  const { profile } = useProfile();

  const t = useTranslations('profile');
  const { toast } = useToast();

  const form = useForm<SearchPreferencesFormFields>({
    resolver: zodResolver(SearchPreferences),
    defaultValues: {
      searchPreferences: profile?.searchPreferences || [],
    },
  });

  const {
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isDirty },
  } = form;

  const searchPreferences = watch(
    'searchPreferences',
  ) as ProfileFormFields['searchPreferences'];

  const handleAdd = (data: Preference) => {
    setValue('searchPreferences', [...searchPreferences, data], {
      shouldDirty: true,
    });
  };

  const handleDelete = (index: number) => {
    const updatedPreferences = searchPreferences.filter(
      (_, searchPreferenceIndex) => searchPreferenceIndex !== index,
    );

    setValue('searchPreferences', updatedPreferences, {
      shouldDirty: true,
    });
  };

  const handleUpdate = (index: number, data: Preference) => {
    const updatedPreferences = searchPreferences.map(
      (searchPreference, searchPreferenceIndex) => {
        if (searchPreferenceIndex === index) {
          return {
            ...searchPreference,
            ...data,
          };
        }

        return searchPreference;
      },
    );

    setValue('searchPreferences', updatedPreferences, {
      shouldDirty: true,
    });
  };

  async function onSubmit(data: SearchPreferencesFormFields) {
    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        const formattedValue = Array.isArray(value)
          ? JSON.stringify(value)
          : value;

        formData.append(key, formattedValue);
      });

      await mutateAsync(formData);

      reset({ ...data });

      toast({
        title: t('successToastTitle'),
        description: t('successToastDescription'),
      });
    } catch (error: any) {
      toast({
        title: t('errorToastTitle'),
        description: t('errorToastDescription'),
        variant: 'destructive',
      });
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <SearchPreferencesFields
            preferences={searchPreferences}
            onDelete={handleDelete}
            onCreate={handleAdd}
            onUpdate={handleUpdate}
          />

          <Button type="submit" disabled={!isDirty} className="w-full">
            {t('submitButton')}
          </Button>
        </form>
      </Form>

      <Separator />
    </div>
  );
};

export { PreferencesForm };
