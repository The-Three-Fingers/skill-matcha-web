'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import NumberInputField from '@/components/ui/number-input-field';
import TextareaField from '@/components/ui/textarea-field';

import { AvatarUploadField } from './avatar-upload-field';

interface ProfileFormFieldsProps {
  file: string | undefined;
  setFile: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ProfileFormFields: React.FC<ProfileFormFieldsProps> = ({
  file,
  setFile,
}) => {
  const t = useTranslations('profile');

  return (
    <div className="space-y-8">
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
      <AvatarUploadField file={file} setFile={setFile} />
    </div>
  );
};

export default ProfileFormFields;
