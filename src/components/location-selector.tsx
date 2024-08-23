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

const LocationSelector = () => {
  const t = useTranslations('profileForm');

  const { control } = useFormContext();
  const { data: countries = [] } = useCountries();

  const countryOptions = countries.map((country) => ({
    icon: country.flag,
    value: country.code,
    label: country.name,
  }));

  return (
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
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { LocationSelector };
