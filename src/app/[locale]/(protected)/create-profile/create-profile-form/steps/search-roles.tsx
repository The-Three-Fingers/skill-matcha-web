import { useTranslations } from 'next-intl';

import MultiSelectField from '../multi-choice-field';

const SearchRoles = () => {
  const t = useTranslations('CreateProfileForm');

  const searchOptions = {
    developer: t('search_options.developer'),
    designer: t('search_options.designer'),
    product_manager: t('search_options.product_manager'),
    founder: t('search_options.founder'),
    marketing_specialist: t('search_options.marketing_specialist'),
    cto: t('search_options.cto'),
    other: t('search_options.other'),
  };

  return (
    <MultiSelectField
      name="searchRoles"
      label={t('select_search_role')}
      options={searchOptions}
    />
  );
};

export { SearchRoles };
