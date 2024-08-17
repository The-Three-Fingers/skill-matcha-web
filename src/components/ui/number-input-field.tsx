import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type NumberInputFieldProps = {
  name: string;
  label: string;
  placeholder: string;
};

const maxValue = 1_000_000_000_000;

const NumberInputField = ({
  name,
  label,
  placeholder,
}: NumberInputFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              onChange={(e) => {
                let { value } = e.target;
                value = value.replace(/[^0-9]/g, '').replace(/^0+/, '');

                field.onChange(Math.min(maxValue, Number(value)) || '');
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default NumberInputField;
