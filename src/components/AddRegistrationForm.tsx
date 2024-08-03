'use client';

import { RegistrationForm } from './RegistrationForm';

const AddRegistrationForm = () => (
  <RegistrationForm
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

export { AddRegistrationForm };
