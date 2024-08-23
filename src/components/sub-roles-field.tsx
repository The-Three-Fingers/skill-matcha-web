import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { MultiCombobox } from '@/components/ui/multi-combobox';

const SubRolesField = ({
  options,
}: {
  options: { value: string; label: string }[];
}) => {
  const t = useTranslations('profileForm');

  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="subRoles"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t('subRolesLabel')}</FormLabel>
          <FormControl>
            <MultiCombobox
              isSearchable={false}
              isClearable
              options={options}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { SubRolesField };
