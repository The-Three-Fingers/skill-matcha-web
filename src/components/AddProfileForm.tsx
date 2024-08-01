'use client';

import { ProfileForm } from './ProfileForm';

const AddProfileForm = () => (
  <ProfileForm
    onSubmit={async (data) => {
      await fetch(`/api/profiles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    }}
  />
);

export { AddProfileForm };
