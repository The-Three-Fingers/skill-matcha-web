import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Card } from '../ui/card';
import { TypographyH4 } from '../ui/typography';
import { SearchPreferenceCard } from './search-preference-card';
import { SearchPreferenceDialog } from './search-preference-dialog';
import type { PreferenceFields } from './types';

const SearchPreferencesFields = ({
  preferences,
  onDelete,
  onCreate,
  onUpdate,
}: {
  preferences: PreferenceFields[];
  onDelete: (index: number) => void;
  onCreate: (data: PreferenceFields) => void;
  onUpdate: (index: number, data: PreferenceFields) => void;
}) => {
  const t = useTranslations('profileForm');

  const hasSearchPreferences = preferences.length > 0;

  const isAddButtonVisible = preferences.length < 2;

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {hasSearchPreferences && (
        <ul className="flex w-full flex-col gap-4">
          {preferences.map((searchPreference, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${searchPreference.role}_${index}`}>
              <SearchPreferenceCard
                onUpdate={onUpdate}
                index={index}
                searchPreference={searchPreference}
                onDelete={onDelete}
              />
            </li>
          ))}
        </ul>
      )}

      {isAddButtonVisible && (
        <SearchPreferenceDialog onSubmit={onCreate}>
          <Card className="h-20 w-full cursor-pointer border-2 border-dashed shadow-none transition-all hover:border-primary">
            <div className="flex size-full items-center justify-center">
              <div className="flex items-center gap-2">
                <Plus className="size-4" />
                <TypographyH4>{t('add')}</TypographyH4>
              </div>
            </div>
          </Card>
        </SearchPreferenceDialog>
      )}
    </div>
  );
};

export { SearchPreferencesFields };
