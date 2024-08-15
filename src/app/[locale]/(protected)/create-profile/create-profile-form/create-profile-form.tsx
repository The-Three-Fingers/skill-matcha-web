'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import InputField from '@/components/ui/input-field';
import { ProfileValidation } from '@/validations/profile-validation';

import type {
  CreateProfileFormSettings,
  RoleKey,
  SearchRoleKey,
} from '../types';
import MultiSelectField from './multi-choice-field';

const CreateProfileForm = () => {
  const form = useForm<z.infer<typeof ProfileValidation>>({
    resolver: zodResolver(ProfileValidation),
    defaultValues: {
      name: '',
      lastName: '',
      roles: [],
      searchRoles: [],
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid },
  } = form;

  const router = useRouter();
  const t = useTranslations('CreateProfileForm');

  const onSubmit = async (data: CreateProfileFormSettings) => {
    await fetch(`/api/profiles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    reset();
    router.refresh();
  };

  const roleOptions: Record<RoleKey, string> = {
    developer: t('role_options.developer'),
    designer: t('role_options.designer'),
    product_manager: t('role_options.product_manager'),
    founder: t('role_options.founder'),
    marketing_specialist: t('role_options.marketing_specialist'),
    cto: t('role_options.cto'),
    other: t('role_options.other'),
  };

  const searchOptions: Record<SearchRoleKey, string> = {
    developer: t('search_options.developer'),
    designer: t('search_options.designer'),
    product_manager: t('search_options.product_manager'),
    founder: t('search_options.founder'),
    marketing_specialist: t('search_options.marketing_specialist'),
    cto: t('search_options.cto'),
    other: t('search_options.other'),
  };

  return (
    <Form {...form}>
      <form
        className="lg: flex w-full flex-col gap-y-4 p-5 sm:w-4/5 lg:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          name="name"
          label={t('name')}
          placeholder={t('name_placeholder')}
        />
        <InputField
          name="lastName"
          label={t('last_name')}
          placeholder={t('last_name_placeholder')}
        />

        <div className="flex justify-between">
          <MultiSelectField
            name="roles"
            label={t('select_your_role')}
            options={roleOptions}
          />
          <MultiSelectField
            name="searchRoles"
            label={t('select_search_role')}
            options={searchOptions}
          />
        </div>

        <div className="mt-5">
          <Button className="w-full" disabled={!isValid} type="submit">
            {t('save')}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { CreateProfileForm };
