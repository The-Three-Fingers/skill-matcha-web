import { useTranslations } from 'next-intl';
import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const IdeaSection = () => {
  const t = useTranslations('profile');

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('ideaSectionTitle')}</CardTitle>
        <CardDescription>{t('ideaSectionDescription')}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">idea input</CardContent>
    </Card>
  );
};

export default IdeaSection;
