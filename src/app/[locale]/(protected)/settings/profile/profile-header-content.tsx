import { useTranslations } from 'next-intl';
import React from 'react';

import { TypographyH3, TypographyP } from '@/components/ui/typography';

const ProfileHeaderContent = () => {
  const t = useTranslations('profile');

  return (
    <div>
      <TypographyH3>{t('metaTitle')}</TypographyH3>
      <TypographyP>{t('metaDescription')}</TypographyP>
    </div>
  );
};

export { ProfileHeaderContent };
