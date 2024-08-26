import { useFormContext } from 'react-hook-form';

import { Combobox } from '@/components/ui/combobox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const RoleField = ({
  label,
  isRequired,
  options,
}: {
  label: string;
  isRequired?: boolean;
  options: { value: string; label: string }[];
}) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="role"
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label} {isRequired && <span className="text-destructive">*</span>}
          </FormLabel>
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

export { RoleField };
