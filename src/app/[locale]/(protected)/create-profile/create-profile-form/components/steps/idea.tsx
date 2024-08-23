import { useTranslations } from 'next-intl';

import ToggleGroupField from '@/components/toggle-group-field';
import { TypographyH3 } from '@/components/ui/typography';

const Idea = () => {
  const t = useTranslations('profileForm');

  const hsaIdeaOptions = [
    { value: 'false', label: t('idea.noOption') },
    { value: 'true', label: t('idea.yesOption') },
  ];

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <TypographyH3 className="mb-4">{t(`stepTitles.idea`)}</TypographyH3>

      <ToggleGroupField
        isRadioGroup
        type="single"
        name="hasIdea"
        options={hsaIdeaOptions}
      />
    </div>
  );
};

export { Idea };
