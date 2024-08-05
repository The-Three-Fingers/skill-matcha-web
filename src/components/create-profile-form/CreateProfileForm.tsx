'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { type SubmitHandler, useForm } from 'react-hook-form';
import type { z } from 'zod';

import { CreateProfileFormValidation } from '@/validations/ProfileValidation';

import type { CreateProfileFormSettings } from '../types';
import { Form } from '../ui/form';
import LastNameField from './LastNameField';
import NameField from './NameField';
import RoleField from './RoleField';
import SearcField from './SearcField';

type CreateProfileFormProps = {
    onSubmit: SubmitHandler<z.infer<typeof CreateProfileFormValidation>>;
};

const CreateProfileForm = (props: CreateProfileFormProps) => {
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
        await props.onSubmit(data);

        reset();
        router.refresh();
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
                <NameField />
                <LastNameField />

                <div className="flex justify-between">
                    <RoleField />
                    <SearcField />
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
