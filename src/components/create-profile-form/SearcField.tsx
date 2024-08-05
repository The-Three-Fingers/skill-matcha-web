import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

import { Checkbox } from '../ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import type { SearchRoleKey } from '../types';

const SearcField = () => {
  const { control } = useFormContext();
  const t = useTranslations('CreateProfileForm');

  const searchOptions: Record<SearchRoleKey, string> = {
    developer: t('search_options.developer'),
    designer: t('search_options.designer'),
    product_manager: t('search_options.product_manager'),
    founder: t('search_options.founder'),
    marketing_specialist: t('search_options.marketing_specialist'),
    cto: t('search_options.cto'),
    other: t('search_options.other'),
  };

  const searchRoleOptions = Object.keys(searchOptions) as SearchRoleKey[];

  return (
    <FormField
      control={control}
      name="searchRoles"
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">
              {t('select_search_role')}
            </FormLabel>
          </div>
          {searchRoleOptions.map((role) => (
            <FormField
              key={role}
              control={control}
              name="searchRoles"
              render={({ field }) => {
                const isChecked = field.value?.includes(role);
                return (
                  <FormItem
                    key={role}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={isChecked}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, role])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== role,
                                ),
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{searchOptions[role]}</FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SearcField;
