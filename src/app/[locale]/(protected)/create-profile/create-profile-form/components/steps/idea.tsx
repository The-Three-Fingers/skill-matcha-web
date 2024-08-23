import { useTranslations } from 'next-intl';

import InputField from '@/components/input-field';

const Idea = () => {
  const t = useTranslations('profileForm');

  return (
    <InputField
      name="idea"
      label={t('idea')}
      placeholder={t('ideaPlaceholder')}
    />
  );
};

export { Idea };
