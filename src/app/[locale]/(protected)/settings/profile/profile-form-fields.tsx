'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import {
  AvatarUploadField,
  LanguagesSelector,
  LocationSelector,
} from '@/components';
import InputField from '@/components/input-field';
import NumberInputField from '@/components/number-input-field';
import TextareaField from '@/components/textarea-field';

const ProfileFormFields = () => {
  const t = useTranslations('profile');

  return (
    <div className="space-y-8">
      <AvatarUploadField name="avatarURL" />

      <InputField
        name="name"
        label={t('nameTitle')}
        placeholder={t('namePlaceholder')}
      />
      <InputField
        name="lastName"
        label={t('lastNameTitle')}
        placeholder={t('lastNamePlaceholder')}
      />

      <TextareaField
        name="aboutInfo"
        label={t('aboutMe')}
        placeholder={t('aboutMePlaceholder')}
      />

      <NumberInputField
        name="availabilityTime"
        label={t('availabilityTime')}
        placeholder={t('availabilityTimeDescription')}
      />
      <LocationSelector />

      <LanguagesSelector />
    </div>
  );
};

export default ProfileFormFields;
