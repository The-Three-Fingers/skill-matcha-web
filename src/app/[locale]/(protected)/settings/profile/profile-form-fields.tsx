'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { AvatarUploadField } from '@/components/avatar-upload-field';
import NumberInputField from '@/components/number-input-field';
import TextareaField from '@/components/textarea-field';

const ProfileFormFields = () => {
  const t = useTranslations('profile');

  return (
    <div className="space-y-8">
      <AvatarUploadField name="avatarURL" />
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
    </div>
  );
};

export default ProfileFormFields;
