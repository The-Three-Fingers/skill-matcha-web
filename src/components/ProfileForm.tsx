'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { type SubmitHandler, useForm } from 'react-hook-form';
import type { z } from 'zod';

import { ProfileValidation } from '@/validations/ProfileValidation';

type IGuestbookFormProps =
  | {
      edit: true;
      id: number;
      defaultValues: z.infer<typeof ProfileValidation>;
      onSubmit: SubmitHandler<z.infer<typeof ProfileValidation>>;
    }
  | {
      edit?: false;
      onSubmit: SubmitHandler<z.infer<typeof ProfileValidation>>;
    };

const ProfileForm = (props: IGuestbookFormProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof ProfileValidation>>({
    resolver: zodResolver(ProfileValidation),
    defaultValues: props.edit ? props.defaultValues : undefined,
  });
  const router = useRouter();
  const t = useTranslations('ProfileForm');

  const handleCreate = handleSubmit(async (data) => {
    await props.onSubmit(data);

    reset();
    router.refresh();
  });

  return (
    <form onSubmit={handleCreate}>
      <div>
        <label
          className="text-sm font-bold text-gray-700"
          htmlFor={`username${props.edit ? `-${props.id}` : ''}`}
        >
          {t('name')}
          <input
            id={`username${props.edit ? `-${props.id}` : ''}`}
            className="mt-2 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring focus:ring-blue-300/50"
            {...register('name')}
          />
        </label>
        {errors.name?.message && (
          <div className="my-2 text-xs italic text-red-500">
            {errors.name?.message}
          </div>
        )}
      </div>

      <div className="mt-3">
        <label
          className="text-sm font-bold text-gray-700"
          htmlFor={`body${props.edit ? `-${props.id}` : ''}`}
        >
          {t('last_name')}
          <input
            id={`body${props.edit ? `-${props.id}` : ''}`}
            className="mt-2 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring focus:ring-blue-300/50"
            {...register('lastName')}
          />
        </label>
        {errors.lastName?.message && (
          <div className="my-2 text-xs italic text-red-500">
            {errors.lastName?.message}
          </div>
        )}
      </div>

      <div className="mt-5">
        <button
          className="rounded bg-blue-500 px-5 py-1 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300/50"
          type="submit"
        >
          {t('save')}
        </button>
      </div>
    </form>
  );
};

export { ProfileForm };
