'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { type z } from 'zod';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { ProfileValidation } from '@/validations/profile-validation';

import ProfileEmailSection from './profile-email-section';
import ProfileFormFields from './profile-form-fields';

type ProfileFormValues = z.infer<typeof ProfileValidation>;

// добавить из регистрации когда будет готова
// имя+фамилия
// languages
// location
// roles
// subRoles
// services
// idea

// !! TODO дописать логику отвязки профайла

const ProfileForm = () => {
  const form = useForm<z.infer<typeof ProfileValidation>>({
    resolver: zodResolver(ProfileValidation),
    defaultValues: {
      // name: '',
      // lastName: '',
      // languages: [],
      // location: '',
      // roles: [],
      // subRoles: [],
      // services: [],
      // idea: [],
      aboutInfo: '',
      avatarURL: null,
      availabilityTime: 20,
    },
    mode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = form;

  const mockEmail = 'emailFromBackend@gmail.com';

  const [file, setFile] = useState<string | undefined>(undefined);
  const t = useTranslations('profile');

  const { toast } = useToast();

  function onSubmit(data: ProfileFormValues) {
    console.log('data', data);

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
          <ProfileFormFields file={file} setFile={setFile} />
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
