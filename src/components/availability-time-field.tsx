import { useFormContext } from 'react-hook-form';

import { Combobox } from '@/components/ui/combobox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const AvailabilityTimeField = ({
  className,
  label,
  isRequired,
  options,
}: {
  className?: string;
  label: string;
  isRequired?: boolean;
  options: { value: string; label: string }[];
}) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="availabilityTime"
      render={({ field }) => (
        <FormItem className={className}>
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

export { AvailabilityTimeField };
