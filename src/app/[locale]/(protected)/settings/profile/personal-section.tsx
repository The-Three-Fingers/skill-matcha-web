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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const PersonalSection = () => {
  const t = useTranslations('profile');

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('personalSectionTitle')}</CardTitle>
        <CardDescription>{t('personalSectionDescription')}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
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

        <div className="w-[350px]">
          <NumberInputField
            name="availabilityTime"
            label={t('availabilityTime')}
            placeholder={t('availabilityTimeDescription')}
          />
        </div>

        <LocationSelector />

        <LanguagesSelector />
      </CardContent>
    </Card>
  );
};

export default PersonalSection;
