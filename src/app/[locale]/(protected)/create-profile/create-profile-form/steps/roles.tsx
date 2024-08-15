import { useTranslations } from 'next-intl';

import MultiSelectField from '../multi-choice-field';

const Roles = () => {
  const t = useTranslations('CreateProfileForm');

  const roleOptions = {
    developer: t('role_options.developer'),
    designer: t('role_options.designer'),
    product_manager: t('role_options.product_manager'),
    founder: t('role_options.founder'),
    marketing_specialist: t('role_options.marketing_specialist'),
    cto: t('role_options.cto'),
    other: t('role_options.other'),
  };

  return (
    <MultiSelectField
      name="roles"
      label={t('select_your_role')}
      options={roleOptions}
    />
  );
};

export { Roles };
