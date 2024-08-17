import { useTranslations } from 'next-intl';

import InputField from '@/components/ui/input-field';

const Idea = () => {
  const t = useTranslations('CreateProfileForm');

  return (
    <InputField
      name="idea"
      label={t('idea')}
      placeholder={t('idea_placeholder')}
    />
  );
};

export { Idea };