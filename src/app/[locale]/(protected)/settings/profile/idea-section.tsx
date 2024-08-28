import { useTranslations } from 'next-intl';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { IdeaStageField } from '@/components/idea-stage-field';
import TextareaField from '@/components/textarea-field';
import ToggleGroupField from '@/components/toggle-group-field';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TypographyP } from '@/components/ui/typography';

import type { ProfileFormFields } from '../types';

const IdeaSection = () => {
  const t = useTranslations('profile.ideaSection');
  const { watch, setValue } = useFormContext<ProfileFormFields>();

  const hasIdeaOptions = [
    { value: 'false', label: t('noOption') },
    { value: 'true', label: t('yesOption') },
  ];

  const hasIdeaValue = watch('hasIdea');

  useEffect(() => {
    if (hasIdeaValue === 'false') {
      setValue('ideaStage', undefined);
      setValue('ideaDescription', undefined);
    }
  }, [hasIdeaValue, setValue]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('ideaSectionTitle')}</CardTitle>
        <CardDescription>{t('ideaSectionDescription')}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <TypographyP>{t(`ideaTitle`)}</TypographyP>
        <ToggleGroupField
          isRadioGroup
          type="single"
          name="hasIdea"
          options={hasIdeaOptions}
        />

        {hasIdeaValue === 'true' && (
          <>
            <IdeaStageField />
            <TextareaField
              textAreaClassName="min-h-32 resize-none"
              placeholder={t('ideaDescriptionPlaceholder')}
              name="ideaDescription"
              label={t('ideaDescriptionLabel')}
            />
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default IdeaSection;
