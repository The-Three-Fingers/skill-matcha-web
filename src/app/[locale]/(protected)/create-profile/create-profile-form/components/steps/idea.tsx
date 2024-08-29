import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { IdeaStageField } from '@/components/idea-stage-field';
import TextareaField from '@/components/textarea-field';
import ToggleGroupField from '@/components/toggle-group-field';
import { TypographyH3 } from '@/components/ui/typography';
import useIsFirstRender from '@/hooks/use-is-first-render';

import type { ProfileFormFields } from '../../types';

const Idea = () => {
  const t = useTranslations('profileForm');

  const { watch, setValue } = useFormContext<ProfileFormFields>();

  const hasIdeaOptions = [
    { value: 'false', label: t('idea.noOption') },
    { value: 'true', label: t('idea.yesOption') },
  ];

  const hasIdeaValue = watch('hasIdea');

  const isFirstRender = useIsFirstRender();

  useEffect(() => {
    if (isFirstRender) return;

    if (hasIdeaValue === 'false') {
      setValue('ideaStage', '');
      setValue('ideaDescription', '');
    }
  }, [hasIdeaValue, setValue]);

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <TypographyH3>{t(`stepTitles.idea`)}</TypographyH3>

      <div className="flex w-full flex-col gap-4">
        <ToggleGroupField
          isRadioGroup
          type="single"
          name="hasIdea"
          options={hasIdeaOptions}
        />

        {hasIdeaValue === 'true' && (
          <>
            <IdeaStageField className="w-full" />
            <TextareaField
              textAreaClassName="min-h-32 resize-none"
              placeholder={t('ideaDescriptionPlaceholder')}
              name="ideaDescription"
              label={t('ideaDescriptionLabel')}
            />
          </>
        )}
      </div>
    </div>
  );
};

export { Idea };
