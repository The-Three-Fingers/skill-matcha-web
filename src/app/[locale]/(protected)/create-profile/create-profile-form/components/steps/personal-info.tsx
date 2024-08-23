'use client';

import { useTranslations } from 'next-intl';

import { AvatarUploadField } from '@/components/avatar-upload-field';
import InputField from '@/components/input-field';
import { LanguagesSelector } from '@/components/languages-selector';
import { LocationSelector } from '@/components/location-selector';
import { TypographyH3 } from '@/components/ui/typography';

const PersonalInfo = () => {
  const t = useTranslations('profileForm');

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <TypographyH3>{t(`stepTitles.personal`)}</TypographyH3>

      <div className="flex w-full flex-col items-center gap-4">
        <AvatarUploadField className="text-center" name="avatarURL" />

        <InputField
          className="w-[350px]"
          name="name"
          label={t('name')}
          placeholder={t('namePlaceholder')}
        />

        <InputField
          className="w-[350px]"
          name="lastName"
          label={t('lastName')}
          placeholder={t('lastNamePlaceholder')}
        />

        <LanguagesSelector />

        <LocationSelector />
      </div>
    </div>
  );
};

export { PersonalInfo };
