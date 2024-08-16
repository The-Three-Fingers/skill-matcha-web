'use client';

import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

import { Combobox } from '@/components/ui/combobox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import InputField from '@/components/ui/input-field';
import { TypographySmall } from '@/components/ui/typography';
import { useCountries } from '@/hooks/queries/use-countries';

const CountryOption = ({
  option,
}: {
  option: { icon: string; label: string };
}) => (
  <div className="flex min-w-0 flex-1 items-center gap-2">
    <TypographySmall>{option.icon}</TypographySmall>
    <TypographySmall className="truncate">{option.label}</TypographySmall>
  </div>
);

const PersonalInfo = () => {
  const { control } = useFormContext();
  const t = useTranslations('CreateProfileForm');

  const { data: countries = [] } = useCountries();

  return (
    <>
      <InputField
        name="name"
        label={t('name')}
        placeholder={t('name_placeholder')}
      />
      <InputField
        name="lastName"
        label={t('last_name')}
        placeholder={t('last_name_placeholder')}
      />

      <FormField
        control={control}
        name="location"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>{t('location')}</FormLabel>
            <FormControl>
              <Combobox
                components={{ Option: CountryOption }}
                options={countries}
                placeholder={t('location_placeholder')}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export { PersonalInfo };
