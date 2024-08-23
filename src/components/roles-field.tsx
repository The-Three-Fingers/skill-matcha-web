import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

import { Combobox } from '@/components/ui/combobox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const RolesField = ({
  options,
}: {
  options: { value: string; label: string }[];
}) => {
  const t = useTranslations('profileForm');

  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="roles"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t('role')}</FormLabel>
          <FormControl>
            <Combobox
              isSearchable={false}
              options={options}
              className="flex"
              isClearable
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { RolesField };
