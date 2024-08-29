'use client';

import { Spinner } from '@/components/ui/spinner';
import { useGetProfile } from '@/hooks/queries/use-get-profile';

import { ProfileForm } from './profile-form';

const Profile = () => {
  const { data: profile, isLoading } = useGetProfile();

  if (isLoading || !profile) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  const { id, createdAt, updatedAt, ...rest } = profile;

  return <ProfileForm profile={rest} />;
};

export { Profile };
