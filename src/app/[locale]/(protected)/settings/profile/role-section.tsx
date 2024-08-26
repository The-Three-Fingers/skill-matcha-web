import { useTranslations } from 'next-intl';
import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const RoleSection = () => {
  const t = useTranslations('profile');

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('rolesSectionTitle')}</CardTitle>
        <CardDescription>{t('rolesSectionDescription')}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        your role and subrole inputs
      </CardContent>
    </Card>
  );
};

export default RoleSection;
