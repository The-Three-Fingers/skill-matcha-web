'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { type SubmitHandler, useForm } from 'react-hook-form';
import type { z } from 'zod';

import { CreateProfileFormValidation } from '@/validations/ProfileValidation';

import type { CreateProfileFormSettings } from './types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

type IGuestbookFormProps =
  | {
      edit: true;
      id: number;
      defaultValues: z.infer<typeof CreateProfileFormValidation>;
      onSubmit: SubmitHandler<z.infer<typeof CreateProfileFormValidation>>;
    }
  | {
      edit?: false;
      onSubmit: SubmitHandler<z.infer<typeof CreateProfileFormValidation>>;
    };

const CreateProfileForm = (props: IGuestbookFormProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof CreateProfileFormValidation>>({
    resolver: zodResolver(CreateProfileFormValidation),
    defaultValues: props.edit ? props.defaultValues : undefined,
  });

  const router = useRouter();
  const t = useTranslations('CreateProfileForm');

  const onSubmit = async (data: CreateProfileFormSettings) => {
    await onSubmit(data);

    reset();
    router.refresh();
  };

  const roleOptions = {
    developer: t('role_options.developer'),
    designer: t('role_options.designer'),
    product_manager: t('role_options.product_manager'),
    founder: t('role_options.founder'),
    marketing_specialist: t('role_options.marketing_specialist'),
    cto: t('role_options.cto'),
    other: t('role_options.other'),
  };

  const roleOptionsArray = Object.values(roleOptions);

  const getRoleOptionsArray = () => {
    return roleOptionsArray.map((role) => (
      <SelectItem value={role} key={role}>
        {role}
      </SelectItem>
    ));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <div className="mt-3">
        <p className="mb-2 text-sm font-bold text-gray-700">Your role</p>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t('choose_your_role')} />
          </SelectTrigger>

          <SelectContent>{getRoleOptionsArray()}</SelectContent>
        </Select>
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

export { CreateProfileForm };
