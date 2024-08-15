import { useTranslations } from 'next-intl';

import InputField from '@/components/ui/input-field';

const PersonalInfo = () => {
  const t = useTranslations('CreateProfileForm');

  return (
    <>
      <InputField
        name="name"
        label={t('name')}
        placeholder={t('name_placeholder')}
      />
      <InputField
        name="lastName"
        label={t('last_name')}
        placeholder={t('last_name_placeholder')}
      />
    </>
  );
};

export { PersonalInfo };
