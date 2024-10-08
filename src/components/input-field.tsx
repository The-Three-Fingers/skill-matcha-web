import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type InputFieldProps = {
  className?: string;
  isRequired?: boolean;
  name: string;
  type?: string;
  label?: string;
  placeholder: string;
};

const InputField = ({
  className,
  isRequired = false,
  name,
  type,
  label,
  placeholder,
}: InputFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel>
              {label}{' '}
              {isRequired && <span className="text-destructive">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Input placeholder={placeholder} {...field} type={type} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputField;
