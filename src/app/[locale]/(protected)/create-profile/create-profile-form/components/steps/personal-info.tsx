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
import { MultiCombobox } from '@/components/ui/multi-combobox';
import { TypographySmall } from '@/components/ui/typography';
import { useCountries } from '@/hooks/queries/use-countries';
import { useLanguages } from '@/hooks/queries/use-languages';

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

const CountrySelectedValue = ({
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
  const { data: languages = [] } = useLanguages();

  const countryOptions = countries.map((country) => ({
    icon: country.flag,
    value: country.code,
    label: country.name,
  }));

  const languagesOptions = languages.map((language) => ({
    value: language.code,
    label: language.name,
  }));

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
          <FormItem>
            <FormLabel>{t('location')}</FormLabel>
            <FormControl>
              <Combobox
                components={{
                  Option: CountryOption,
                  SelectedValue: CountrySelectedValue,
                }}
                options={countryOptions}
                className="flex"
                isClearable
                placeholder={t('location_placeholder')}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="languages"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('languages')}</FormLabel>
            <FormControl>
              <MultiCombobox
                isClearable
                width={400}
                placeholder={t('languages_placeholder')}
                options={languagesOptions}
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
