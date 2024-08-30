import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

import { SearchPreferencesFields } from '@/components/search-preferences-fields';
import { TypographyH3 } from '@/components/ui/typography';

import type { ProfileFormFields } from '../../types';

type Preference = ProfileFormFields['searchPreferences'][number];

const SearchPreferences = () => {
  const t = useTranslations('profileForm');

  const { watch, setValue } = useFormContext<ProfileFormFields>();

  const searchPreferences = watch(
    'searchPreferences',
  ) as ProfileFormFields['searchPreferences'];

  const handleDelete = (index: number) => {
    const updatedPreferences = searchPreferences.filter(
      (_, searchPreferenceIndex) => searchPreferenceIndex !== index,
    );

    setValue('searchPreferences', updatedPreferences);
  };

  const handleUpdate = (index: number, data: Preference) => {
    const updatedPreferences = searchPreferences.map(
      (searchPreference, searchPreferenceIndex) => {
        if (searchPreferenceIndex === index) {
          return {
            ...searchPreference,
            ...data,
          };
        }

        return searchPreference;
      },
    );

    setValue('searchPreferences', updatedPreferences);
  };

  const handleAdd = (data: Preference) => {
    setValue('searchPreferences', [...searchPreferences, data]);
  };

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <TypographyH3>{t(`stepTitles.searchPreferences`)}</TypographyH3>
      <SearchPreferencesFields
        preferences={searchPreferences}
        onDelete={handleDelete}
        onCreate={handleAdd}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export { SearchPreferences };
