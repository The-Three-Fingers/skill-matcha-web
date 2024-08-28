import { useTranslations } from 'next-intl';
import React from 'react';

import {
  AvatarUploadField,
  LanguagesSelector,
  LocationSelector,
} from '@/components';
import { AvailabilityTimeField } from '@/components/availability-time-field';
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
    { value: 'zero-to-ten', label: t('availabilityOption1') },
    { value: 'ten-to-twenty', label: t('availabilityOption2') },
    { value: 'twenty-to-thirty', label: t('availabilityOption3') },
    { value: 'thirty-to-forty', label: t('availabilityOption4') },
    { value: 'forty-plus', label: t('availabilityOption5') },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
        <CardDescription>{t('description')}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <AvatarUploadField name="avatarURL" />

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
          name="aboutInfo"
          label={t('aboutMe')}
          placeholder={t('aboutMePlaceholder')}
        />

        <AvailabilityTimeField
          className="w-full"
          label={t('availabilityTime')}
          options={availabilityTimeOptions}
        />

        <LocationSelector />

        <LanguagesSelector />
      </CardContent>
    </Card>
  );
};

export default PersonalSection;
