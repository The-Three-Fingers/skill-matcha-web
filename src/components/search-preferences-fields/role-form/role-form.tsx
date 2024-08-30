import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { Role } from '@/validations/profile-validation';

import type { PreferenceFields } from '../types';
import { FormFields } from './form-fields';

const defaultValues = {
  role: '',
  subRoles: [],
  services: [],
};

const RoleForm = ({
  index,
  initialValues,
  onSubmit,
}: {
  index?: number;
  initialValues?: PreferenceFields;
  onSubmit: (data: PreferenceFields) => void;
}) => {
  const t = useTranslations('profileForm');

  const form = useForm({
    resolver: zodResolver(Role),
    defaultValues: initialValues ?? defaultValues,
  });

  const {
    getValues,
    formState: { isValid },
  } = form;

  const isEditMode = index !== undefined;

  const handleSubmit = () => {
    const data = getValues();

    onSubmit(data);
  };

  return (
    <Form {...form}>
      <div className="flex w-full flex-col gap-4">
        <DialogHeader className="sm:text-center">
          <DialogTitle>{t('addSearchPreferencesDialogTitle')}</DialogTitle>
        </DialogHeader>
        <FormFields />
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button
              form="search-preference-form"
              className="mt-4 min-w-24"
              onClick={handleSubmit}
              disabled={!isValid}
            >
              {t(isEditMode ? 'update' : 'add')}
            </Button>
          </DialogClose>
        </DialogFooter>
      </div>
    </Form>
  );
};

export { RoleForm };
