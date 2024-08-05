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

const NameField = () => {
  const { control } = useFormContext();
  const t = useTranslations('CreateProfileForm');

  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t('name')}</FormLabel>
          <FormControl>
            <Input placeholder={t('name_placeholder')} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default NameField;
