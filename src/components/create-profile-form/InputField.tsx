import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

type CreateProfileFormKeys = 'name' | 'name_placeholder' | 'last_name' | 'last_name_placeholder';

type InputFieldProps = {
  fieldName: string;
  labelContent: CreateProfileFormKeys;
  inputPlaceholder: CreateProfileFormKeys;
};

const InputField = ({ fieldName, labelContent, inputPlaceholder }: InputFieldProps) => {
  const { control } = useFormContext();
  const t = useTranslations('CreateProfileForm');

  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t(labelContent)}</FormLabel>
          <FormControl>
            <Input placeholder={t(inputPlaceholder)} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputField;
