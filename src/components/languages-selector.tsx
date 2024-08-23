import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { MultiCombobox } from '@/components/ui/multi-combobox';
import { useLanguages } from '@/hooks/queries/use-languages';

const LanguagesSelector = () => {
  const t = useTranslations('profileForm');

  const { control } = useFormContext();
  const { data: languages = [] } = useLanguages();
  const languagesOptions = languages.map((language) => ({
    value: language.code,
    label: language.name,
  }));

  return (
    <FormField
      control={control}
      name="languages"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t('languages')}</FormLabel>
          <FormControl>
            <MultiCombobox isClearable options={languagesOptions} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { LanguagesSelector };
