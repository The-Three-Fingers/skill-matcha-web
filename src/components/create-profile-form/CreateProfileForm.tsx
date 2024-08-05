'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { CreateProfileFormValidation } from '@/validations/ProfileValidation';

import type {
    CreateProfileFormSettings,
    RoleKey,
    SearchRoleKey,
} from '../types';
import { Form } from '../ui/form';
import InputField from './InputField';
import MultiSelectField from './MultiSelectField';

const CreateProfileForm = () => {
    const form = useForm<z.infer<typeof CreateProfileFormValidation>>({
        resolver: zodResolver(CreateProfileFormValidation),
        defaultValues: {
            name: '',
            lastName: '',
            roles: [],
            searchRoles: [],
        },
    });

    const {
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = form;

    const router = useRouter();
    const t = useTranslations('CreateProfileForm');

    const onSubmit = async (data: CreateProfileFormSettings) => {
        console.log('data', data);

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

    const watchedValues = watch(['name', 'lastName', 'roles', 'searchRoles']);
    const [name, lastName, roles, searchRoles] = watchedValues;

    const isButtonDisabled =
        !name ||
        !lastName ||
        roles.length === 0 ||
        searchRoles.length === 0 ||
        Object.keys(errors).length > 0;

    return (
        <Form {...form}>
            <form
                className="flex w-full p-20 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-1/3 flex-col gap-y-4"
                onSubmit={handleSubmit(onSubmit)}>
                <InputField
                    fieldName="name"
                    labelContent="name"
                    inputPlaceholder="name_placeholder"
                />
                <InputField
                    fieldName="lastName"
                    labelContent="last_name"
                    inputPlaceholder="last_name_placeholder"
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
                    <button
                        disabled={isButtonDisabled}
                        className="w-full rounded bg-blue-500 px-5 py-1 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300/50 disabled:opacity-50 disabled:hover:bg-blue-500"
                        type="submit">
                        {t('save')}
                    </button>
                </div>
            </form>
        </Form>
    );
};

export { CreateProfileForm };
