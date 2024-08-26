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
  label,
  maxSelectable,
  options,
}: {
  label: string;
  maxSelectable?: number;
  options: { value: string; label: string }[];
}) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="subRoles"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <MultiCombobox
              isSearchable={false}
              maxSelectable={maxSelectable}
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
