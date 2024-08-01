'use client';

import { useState } from 'react';

import { ProfileForm } from './ProfileForm';

const EditableProfileEntry = (props: {
  id: number;
  name: string;
  lastName: string;
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((value) => !value);
  };

  return (
    <>
      <button
        type="button"
        aria-label="edit"
        onClick={() => {
          handleEdit();
        }}
      >
        <svg
          className="size-6 stroke-current"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M4 20h4L18.5 9.5a1.5 1.5 0 0 0-4-4L4 16v4M13.5 6.5l4 4" />
        </svg>
      </button>

      <div className="ml-1 grow">
        {isEditing ? (
          <ProfileForm
            edit
            id={props.id}
            defaultValues={{
              name: props.name,
              lastName: props.lastName,
            }}
            onSubmit={async (data) => {
              await fetch(`/api/profiles`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  id: props.id,
                  ...data,
                }),
              });

              setIsEditing(false);
            }}
          />
        ) : (
          <span className="text-gray-500">
            {props.name} {props.lastName}
          </span>
        )}
      </div>
    </>
  );
};

export { EditableProfileEntry };
