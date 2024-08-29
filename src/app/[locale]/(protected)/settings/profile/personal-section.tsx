import { useTranslations } from 'next-intl';
import React from 'react';

import {
  AvailabilityTimeField,
  AvatarUploadField,
  LanguagesSelector,
  LocationSelector,
} from '@/components';
import InputField from '@/components/input-field';
import TextareaField from '@/components/textarea-field';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const PersonalSection = () => {
  const t = useTranslations('profile.personalSection');

  const availabilityTimeOptions = [
    { value: 'upTo10', label: t('upTo10') },
    { value: '10to20', label: t('10to20') },
    { value: '20to30', label: t('20to30') },
    { value: '30to40', label: t('30to40') },
    { value: '40plus', label: t('40plus') },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
        <CardDescription>{t('description')}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-6">
        <AvatarUploadField className="text-center" name="avatarURL" />

        <div className="flex w-full flex-col gap-6 sm:flex-row">
          <InputField
            name="name"
            className="flex-1"
            label={t('nameTitle')}
            placeholder={t('namePlaceholder')}
          />

          <InputField
            className="flex-1"
            name="lastName"
            label={t('lastNameTitle')}
            placeholder={t('lastNamePlaceholder')}
          />
        </div>

        <TextareaField
          className="w-full"
          textAreaClassName="min-h-32 resize-none"
          name="aboutInfo"
          label={t('aboutMe')}
          placeholder={t('aboutMePlaceholder')}
        />

        <AvailabilityTimeField
          className="w-full"
          label={t('availabilityTime')}
          options={availabilityTimeOptions}
        />

        <LocationSelector className="w-full" />

        <LanguagesSelector className="w-full" />
      </CardContent>
    </Card>
  );
};

export default PersonalSection;
