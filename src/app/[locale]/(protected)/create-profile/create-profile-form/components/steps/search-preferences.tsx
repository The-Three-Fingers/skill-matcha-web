import { zodResolver } from '@hookform/resolvers/zod';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm, useFormContext } from 'react-hook-form';
import type { z } from 'zod';

import { RoleField } from '@/components/role-field';
import { SubRolesField } from '@/components/sub-roles-field';
import ToggleGroupField from '@/components/toggle-group-field';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { TypographyH3, TypographyH4 } from '@/components/ui/typography';
import type { RoleId, SubRoleId } from '@/hooks/queries/use-roles';
import { useRoleFormFields } from '@/hooks/use-role-form-fields';
import { Role } from '@/validations/profile-validation';

import type { ProfileFormFields } from '../../types';

type FormData = z.infer<typeof Role>;

const defaultValues = {
  role: '',
  subRoles: [],
  services: [],
};

const FormFields = () => {
  const t = useTranslations('profileForm');

  const {
    roleOptions,
    subRolesOptions,
    servicesOptions,
    isSubrolesFieldVisible,
    isServicesFieldVisible,
  } = useRoleFormFields();

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <RoleField
        className="w-full"
        label={t('searchRoleLabel')}
        options={roleOptions}
      />

      {isSubrolesFieldVisible && (
        <SubRolesField
          className="w-full"
          label={t('searchSubrolesLabel')}
          options={subRolesOptions}
          maxSelectable={2}
        />
      )}

      {isServicesFieldVisible && (
        <ToggleGroupField
          className="mt-4"
          maxSelectable={4}
          name="services"
          options={servicesOptions}
          type="multiple"
        />
      )}
    </div>
  );
};

const RoleForm = ({
  index,
  initialValues,
}: {
  index?: number;
  initialValues?: FormData;
}) => {
  const t = useTranslations('profileForm');

  const { setValue, watch } = useFormContext<ProfileFormFields>();

  const form = useForm({
    resolver: zodResolver(Role),
    defaultValues: initialValues ?? defaultValues,
  });

  const {
    getValues,
    formState: { isValid },
  } = form;

  const searchPreferences = watch('searchPreferences') as FormData[];

  const isEditMode = index !== undefined;

  const onSubmit = () => {
    const data = getValues();

    if (isEditMode) {
      const updatedPreferences = searchPreferences.map(
        (searchPreference, searchPreferenceIndex) => {
          if (searchPreferenceIndex === index) {
            return {
              ...searchPreference,
              ...data,
            };
          }

          return searchPreference;
        },
      );

      setValue('searchPreferences', updatedPreferences);

      return;
    }

    setValue('searchPreferences', [...searchPreferences, data]);
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
              onClick={onSubmit}
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

const SearchPreferencesDialog = ({
  container,
  children,
  index,
  searchPreference,
}: {
  container?: HTMLElement | null;
  children: React.ReactNode;
  index?: number;
  searchPreference?: FormData;
}) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogPortal container={container}>
      <DialogContent
        className="sm:max-w-md"
        onInteractOutside={(event) => event.preventDefault()}
        onEscapeKeyDown={(event) => event.preventDefault()}
      >
        <RoleForm index={index} initialValues={searchPreference} />
      </DialogContent>
    </DialogPortal>
  </Dialog>
);

const SearchPreferences = () => {
  const container = document.getElementById('dialog-portal');

  const t = useTranslations('profileForm');

  const { watch, setValue } = useFormContext<ProfileFormFields>();

  const searchPreferences = watch('searchPreferences') as FormData[];

  const handleDelete = (index: number) => {
    const updatedPreferences = searchPreferences.filter(
      (_, searchPreferenceIndex) => searchPreferenceIndex !== index,
    );

    setValue('searchPreferences', updatedPreferences);
  };

  const hasSearchPreferences = searchPreferences.length > 0;

  const isAddButtonVisible = searchPreferences.length < 2;

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <TypographyH3>{t(`stepTitles.searchPreferences`)}</TypographyH3>
      <div className="flex w-full flex-col items-center gap-4">
        {hasSearchPreferences && (
          <ul className="flex w-full flex-col gap-4">
            {searchPreferences.map((searchPreference, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${searchPreference.role}_${index}`}>
                <Card className="transition-all hover:border-primary">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-center">
                        {t(`roleOptions.${searchPreference.role as RoleId}`)}
                      </CardTitle>
                      <div className="flex items-center gap-1">
                        <SearchPreferencesDialog
                          index={index}
                          searchPreference={searchPreference}
                        >
                          <Button
                            variant="link"
                            className="size-6 p-1 text-foreground hover:text-primary"
                          >
                            <Pencil className="size-4" />
                          </Button>
                        </SearchPreferencesDialog>
                        <Button
                          variant="link"
                          onClick={() => handleDelete(index)}
                          className="size-6 p-1 text-foreground hover:text-destructive"
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  {searchPreference.subRoles.length > 0 && (
                    <CardContent className="flex flex-wrap gap-1.5">
                      {searchPreference.subRoles.map((subRole) => (
                        <Badge variant="primary-border" key={subRole}>
                          {t(`subRoleOptions.${subRole as SubRoleId}`)}
                        </Badge>
                      ))}
                    </CardContent>
                  )}
                  {searchPreference.services.length > 0 && (
                    <CardFooter className="flex flex-wrap gap-1.5">
                      {searchPreference.services.map((service) => (
                        <Badge key={service} className="h-8 rounded-sm">
                          {t(`serviceOptions.${service}` as any)}
                        </Badge>
                      ))}
                    </CardFooter>
                  )}
                </Card>
              </li>
            ))}
          </ul>
        )}

        {isAddButtonVisible && (
          <SearchPreferencesDialog container={container}>
            <Card className="h-20 w-full cursor-pointer border-2 border-dashed shadow-none transition-all hover:border-primary">
              <div className="flex size-full items-center justify-center">
                <div className="flex items-center gap-2">
                  <Plus className="size-4" />
                  <TypographyH4>{t('add')}</TypographyH4>
                </div>
              </div>
            </Card>
          </SearchPreferencesDialog>
        )}
      </div>
    </div>
  );
};

export { SearchPreferences };
