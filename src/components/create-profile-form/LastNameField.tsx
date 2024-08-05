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

const LastNameField = () => {
  const { control } = useFormContext();
  const t = useTranslations('CreateProfileForm');

  return (
    <FormField
      control={control}
      name="lastName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t('last_name')}</FormLabel>
          <FormControl>
            <Input placeholder={t('last_name_placeholder')} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default LastNameField;
