'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { type SubmitHandler, useForm } from 'react-hook-form';
import type { z } from 'zod';

import { CreateProfileFormValidation } from '@/validations/ProfileValidation';

import type { CreateProfileFormSettings } from './types';
import { Checkbox } from './ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

type CreateProfileFormProps = {
  onSubmit: SubmitHandler<z.infer<typeof CreateProfileFormValidation>>;
};

const CreateProfileForm = (props: CreateProfileFormProps) => {
  const form = useForm<z.infer<typeof CreateProfileFormValidation>>({
    resolver: zodResolver(CreateProfileFormValidation),
    defaultValues: {
      name: '',
      lastName: '',
      role: [],
    },
  });

  const {
    handleSubmit,
    // register,
    control,
    reset,
    formState: { errors },
  } = form;

  const router = useRouter();
  const t = useTranslations('CreateProfileForm');

  const onSubmit = async (data: CreateProfileFormSettings) => {
    await props.onSubmit(data);

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

  // !! todo
  const isButtonDisabled = Object.keys(errors).length > 0;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-3">
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('name')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('name_placeholder')}
                    {...field}
                    // {...register('name')}
                  />
                </FormControl>
                <FormMessage />
                {/* <FormMessage>
                <div className="my-2 text-xs italic text-red-500">
                  {errors.name?.message}
                </div>
              </FormMessage> */}
              </FormItem>
            )}
          />
        </div>

        <div className="mt-3">
          <FormField
            control={control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('last_name')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('last_name_placeholder')}
                    {...field}
                    // {...register('name')}
                  />
                </FormControl>
                <FormMessage />
                {/* <FormMessage>
               {errors.lastName?.message && (
            <div className="my-2 text-xs italic text-red-500">
              {errors.lastName?.message}
            </div>
          )}
              </FormMessage> */}
              </FormItem>
            )}
          />
        </div>

        {/* <div className="mt-3">
          <p className="mb-2 text-sm font-bold text-gray-700">
            {t('select_your_role')}
          </p>

          <Controller
            control={control}
            name="role"
            render={({ field }) => (
              <div>
                {roleOptionsArray.map((role) => (
                  <div key={role} className="flex items-center space-x-3">
                    <Checkbox
                      id={`role-${role}`}
                      checked={field.value?.includes(role)}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...(field.value || []), role]
                          : (field.value || []).filter(
                              (value) => value !== role,
                            );
                        field.onChange(newValue);
                      }}
                    />
                    <label htmlFor={`role-${role}`}>{role}</label>
                  </div>
                ))}
              </div>
            )}
          />
        </div> */}
        <div className="mt-3">
          <FormField
            control={form.control}
            name="role"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">
                    {t('select_your_role')}
                  </FormLabel>
                </div>
                {roleOptionsArray.map((role) => (
                  <FormField
                    key={role}
                    control={form.control}
                    name="role"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={role}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(role)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, role])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== role,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">{role}</FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-5">
          <button
            disabled={isButtonDisabled}
            className="rounded bg-blue-500 px-5 py-1 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300/50"
            type="submit"
          >
            {t('save')}
          </button>
        </div>
      </form>
    </Form>
  );
};

export { CreateProfileForm };
