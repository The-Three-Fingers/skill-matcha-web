'use client';

import { CreateProfileForm } from './create-profile-form/CreateProfileForm';

const AddCreateProfileForm = () => (
  <CreateProfileForm
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

export { AddCreateProfileForm };
