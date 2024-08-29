'use client';

import { Spinner } from '@/components/ui/spinner';
import { useGetProfile } from '@/hooks/queries/use-get-profile';

import { PreferencesForm } from './preferences-form';

const Preferences = () => {
  const { data: profile, isLoading } = useGetProfile();

  if (isLoading || !profile) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  const { searchPreferences, ...rest } = profile;

  return <PreferencesForm searchPreferences={searchPreferences} />;
};

export { Preferences };
