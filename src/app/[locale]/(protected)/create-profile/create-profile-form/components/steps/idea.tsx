import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { IdeaStageField } from '@/components/idea-stage-field';
import TextareaField from '@/components/textarea-field';
import ToggleGroupField from '@/components/toggle-group-field';
import { TypographyH3 } from '@/components/ui/typography';

import type { ProfileFormFields } from '../../types';

const Idea = () => {
  const t = useTranslations('profileForm');

  const { watch, setValue } = useFormContext<ProfileFormFields>();

  const hsaIdeaOptions = [
    { value: 'false', label: t('idea.noOption') },
    { value: 'true', label: t('idea.yesOption') },
  ];

  const hasIdeaValue = watch('hasIdea');

  useEffect(() => {
    if (hasIdeaValue === 'false') {
      setValue('ideaStage', undefined);
      setValue('ideaDescription', undefined);
    }
  }, [hasIdeaValue, setValue]);

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <TypographyH3>{t(`stepTitles.idea`)}</TypographyH3>

      <div className="flex flex-col gap-4">
        <ToggleGroupField
          isRadioGroup
          type="single"
          name="hasIdea"
          options={hsaIdeaOptions}
        />

        {hasIdeaValue === 'true' && <IdeaStageField />}

        {hasIdeaValue === 'true' && (
          <TextareaField
            textAreaClassName="min-h-32 resize-none"
            placeholder={t('ideaDescriptionPlaceholder')}
            name="ideaDescription"
            label={t('ideaDescriptionLabel')}
          />
        )}
      </div>
    </div>
  );
};

export { Idea };
