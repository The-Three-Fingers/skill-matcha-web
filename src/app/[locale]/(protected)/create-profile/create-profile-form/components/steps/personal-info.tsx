'use client';

import { useTranslations } from 'next-intl';

import {
  AvatarUploadField,
  LanguagesSelector,
  LocationSelector,
} from '@/components';
import InputField from '@/components/input-field';
import { TypographyH3 } from '@/components/ui/typography';

const PersonalInfo = () => {
  const t = useTranslations('profileForm');

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <TypographyH3 className="text-center">
        {t(`stepTitles.personal`)}
      </TypographyH3>

      <div className="flex w-full flex-col items-center gap-4">
        <AvatarUploadField
          className="flex flex-col items-center text-center"
          name="avatarURL"
        />

        <InputField
          className="w-full"
          name="name"
          isRequired
          label={t('name')}
          placeholder={t('namePlaceholder')}
        />

        <InputField
          className="w-full"
          name="lastName"
          isRequired
          label={t('lastName')}
          placeholder={t('lastNamePlaceholder')}
        />

        <LanguagesSelector className="w-full" />

        <LocationSelector className="w-full" />
      </div>
    </div>
  );
};

export { PersonalInfo };
