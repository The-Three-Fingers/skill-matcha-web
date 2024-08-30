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
import useIsFirstRender from '@/hooks/use-is-first-render';

import type { GeneralFormFields } from '../types';

const IdeaSection = () => {
  const t = useTranslations('profile.ideaSection');
  const { watch, setValue } = useFormContext<GeneralFormFields>();

  const hasIdeaOptions = [
    { value: 'false', label: t('noOption') },
    { value: 'true', label: t('yesOption') },
  ];

  const hasIdeaValue = watch('hasIdea');

  const isFirstRender = useIsFirstRender();

  useEffect(() => {
    if (isFirstRender) return;

    if (hasIdeaValue === 'false') {
      setValue('ideaStage', '');
      setValue('ideaDescription', '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
