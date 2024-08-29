import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

type TextareaFieldProps = {
  className?: string;
  textAreaClassName?: string;
  name: string;
  label: string;
  placeholder?: string;
  isResizable?: boolean;
};

const TextareaField = ({
  className,
  textAreaClassName,
  name,
  label,
  placeholder,
}: TextareaFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              className={textAreaClassName}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextareaField;
